"use client";

import { PostRoute } from "@/api/actionRoutes";
import React, { useRef, useState } from 'react';

import { Button, Calendar, DateField, DatePicker, Description, FieldError, Input, Label, Radio, RadioGroup, TextField } from "@heroui/react";
import axios from "axios";

export default function WithForm() {
    let [isDragging, setIsDragging] = useState(false);
    let fileInputRef = useRef(null)
    let [selectedFile, setSelectedFile] = useState(null);
    let [opData, setOpData] = useState({
        role: "",
        startup: "",
        image: [],
        commit: "",
        skills: "",
        deadline: "",
    })
    let dragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
    }
    let dropFile = (e) => {
        e.preventDefault();
        setIsDragging(true);
        e.dataTransfer.files[0]
        console.log(e)
    }
    let triggerFile = () => {
        fileInputRef.current.click()
    }
    let dragLeave = () => {
        setIsDragging(false)
    }
    let fileChange = (e) => {
        let file = e.target.files[0];
        if (file) setSelectedFile(file)
        // setOpData(im => im.image = file)
    }
    let clearSelection = () => {
        setSelectedFile(null)
        if (fileInputRef.current) {
            fileInputRef.current.value = ""
        }
    }
    let dataChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        console.log(opData)
        setOpData(prev => ({
            ...prev,
            [name]: value
        }))
    }
    const dataSubmit = async (e) => {
        e.preventDefault()

        let currentTarget = e.currentTarget;
        let formData = new FormData(currentTarget)
        let dataField = Object.fromEntries(formData.entries());
        dataField.skills = dataField.skills.trim().split(" ")

        console.log(dataField);

        // try {
        //     let fetchImage = await axios.post(`https://api.imgbb.com/1/upload?key=3400c5b9c87c9fadca80817ae1c398a6`, formData)
        //     let imageData = await fetchImage.data;
        //     dataField.image = imageData.data.uri;
        //     await PostRoute(dataField);
        // } catch (error) {
        //     console.log(error);
        // }

    }
    return (
        <>
            <h3 className="text-2xl text-center mt-6 font-bold" >Create opportunities</h3> <br />
            <form onSubmit={dataSubmit} className="flex flex-col gap-4 container mx-auto md:w-[50%] sm:w-[90%] lg:w-[40%] p-4 m-5 border border-blue-400 rounded-2xl">
                <TextField className="w-full" type="text" variant="secondary" isRequired>
                    <Label>Role Title</Label>
                    <Input placeholder="Enter your name" name="role" />
                </TextField>
                <TextField className="w-full" type="text" isRequired>
                    <Label>Skills</Label>
                    <Input name="skills" placeholder="Enter your skills" />
                    <Description>Kindly Separate by space</Description>
                </TextField>

                {!selectedFile && (
                    <div className={`w-full h-48 border-2 border-dashed rounded-xl flex flex-col items-center justify-center gap-4 p-4 transition-colors cursor-pointer
                    ${isDragging
                            ? 'border-primary bg-primary/10'
                            : 'border-default-300 hover:border-default-400 bg-default-50'
                        }`}
                        onDragOver={dragOver}
                        onDrop={dropFile}
                        onClick={triggerFile}
                        onDragLeave={dragLeave}
                    >
                        <input name="image" type="file" className="hidden" ref={fileInputRef} onChange={fileChange} />

                        <div className="text-center">
                            <p className="text-sm text-default-500">
                                Drag and drop your Logo here, or click to browse
                            </p>
                        </div>
                    </div>
                )}
                {selectedFile && (
                    <div className="w-full mt-4 p-3 bg-default-100 rounded-lg flex items-center justify-between">
                        <div className="flex flex-col overflow-hidden mr-2">
                            <span className="text-sm font-medium truncate text-default-700">
                                {selectedFile.name}
                            </span>
                            <span className="text-xs text-default-400">
                                {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB
                            </span>
                        </div>
                        <Button
                            isIconOnly
                            color="danger"
                            variant="light"
                            size="sm"
                            onClick={clearSelection}
                        >
                            Remove
                        </Button>
                    </div>
                )}

                <RadioGroup defaultValue={"onsite"} name="workType" isRequired>
                    <Label>Work Type</Label>
                    <Radio value="remote" >
                        <Radio.Content>
                            <Radio.Control>
                                <Radio.Indicator />
                            </Radio.Control>
                            Remote
                        </Radio.Content>
                    </Radio>
                    <Radio value="onsite">
                        <Radio.Content>
                            <Radio.Control>
                                <Radio.Indicator />
                            </Radio.Control>
                            Onsite
                        </Radio.Content>
                    </Radio>
                    <Radio value="hybrid">
                        <Radio.Content>
                            <Radio.Control>
                                <Radio.Indicator />
                            </Radio.Control>
                            Hybrid
                        </Radio.Content>
                    </Radio>
                    <FieldError>Work Type Must Needed</FieldError>
                </RadioGroup>

                <TextField className="w-full" variant="secondary" isRequired>
                    <Label>Commitment Level</Label>
                    <Input placeholder="Enter your message" name="commit" />
                </TextField>

                <DatePicker isRequired name="deadline" >
                    <Label>Deadline</Label>
                    <DateField.Group >
                        <DateField.Input >
                            {(segment) => <DateField.Segment segment={segment} />}
                        </DateField.Input>
                        <DateField.Suffix >
                            <DatePicker.Trigger >
                                <DatePicker.TriggerIndicator />
                            </DatePicker.Trigger>
                        </DateField.Suffix>
                    </DateField.Group>

                    <DatePicker.Popover>
                        <Calendar aria-label="Event date">
                            <Calendar.Header>
                                <Calendar.YearPickerTrigger>
                                    <Calendar.YearPickerTriggerHeading />
                                    <Calendar.YearPickerTriggerIndicator />
                                </Calendar.YearPickerTrigger>
                                <Calendar.NavButton slot="previous" />
                                <Calendar.NavButton slot="next" />
                            </Calendar.Header>
                            <Calendar.Grid>
                                <Calendar.GridHeader>
                                    {(day) => <Calendar.HeaderCell>{day}</Calendar.HeaderCell>}
                                </Calendar.GridHeader>
                                <Calendar.GridBody>{(date) => <Calendar.Cell date={date} />}</Calendar.GridBody>
                            </Calendar.Grid>
                            <Calendar.YearPickerGrid>
                                <Calendar.YearPickerGridBody>
                                    {({ year }) => <Calendar.YearPickerCell year={year} />}
                                </Calendar.YearPickerGridBody>
                            </Calendar.YearPickerGrid>
                        </Calendar>
                    </DatePicker.Popover>
                </DatePicker>

                <Button type="submit" >Submit</Button>
            </form>

        </>
    );
}


export function FileUpload() {
    const fileInputRef = useRef(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const [isDragging, setIsDragging] = useState(false);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedFile(file);
        }
    };

    const onTriggerClick = () => {
        fileInputRef.current.click();
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragging(false);
        const file = e.dataTransfer.files[0];
        if (file) {
            setSelectedFile(file);
        }
    };

    const clearSelection = () => {
        setSelectedFile(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    return (
        <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto p-6">
            <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={`w-full h-48 border-2 border-dashed rounded-xl flex flex-col items-center justify-center gap-4 p-4 transition-colors cursor-pointer
          ${isDragging
                        ? 'border-primary bg-primary/10'
                        : 'border-default-300 hover:border-default-400 bg-default-50'
                    }`}
                onClick={onTriggerClick}
            >
                <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    className="hidden"
                />

                <div className="text-center">
                    <p className="text-sm text-default-500">
                        Drag and drop your file here, or click to browse
                    </p>
                </div>

                <Button
                    variant="flat"
                    color="primary"
                    size="sm"
                    onPress={onTriggerClick}
                >
                    Select File
                </Button>
            </div>

            {selectedFile && (
                <div className="w-full mt-4 p-3 bg-default-100 rounded-lg flex items-center justify-between">
                    <div className="flex flex-col overflow-hidden mr-2">
                        <span className="text-sm font-medium truncate text-default-700">
                            {selectedFile.name}
                        </span>
                        <span className="text-xs text-default-400">
                            {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB
                        </span>
                    </div>
                    <Button
                        isIconOnly
                        color="danger"
                        variant="light"
                        size="sm"
                        onPress={clearSelection}
                    >
                        Remove
                    </Button>
                </div>
            )}
        </div>
    );
}