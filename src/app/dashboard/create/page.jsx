"use client";

import { PostRoute } from "@/api/actionRoutes";
import { useRef, useState } from 'react';

import { Button, Calendar, DateField, DatePicker, Description, FieldError, Input, Label, Radio, RadioGroup, TextField } from "@heroui/react";
// import axios from "axios";

export default function Opportunities() {
    let [isDragging, setIsDragging] = useState(false);
    let fileInputRef = useRef(null)
    let reset = useRef(null)
    let [selectedFile, setSelectedFile] = useState(null);
    // let [valid, setValid] = false

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
    let triggerFile = () => fileInputRef.current.click()

    let dragLeave = () => {
        setIsDragging(false)
    }
    let fileChange = (e) => {
        let file = e.target.files[0];
        if (file) setSelectedFile(file)
    }
    let clearSelection = () => {
        setSelectedFile(null)
        if (fileInputRef.current) {
            fileInputRef.current.value = ""
        }
    }
    const dataSubmit = async (e) => {
        e.preventDefault()

        let currentTarget = e.currentTarget;
        let formData = new FormData(currentTarget)
        let dataField = Object.fromEntries(formData.entries());
        dataField.required_skills = dataField.required_skills?.trim().split(" ")

        await PostRoute(dataField);
        reset.current.click()
    }
    return (
        <>
            <h3 className="text-2xl text-center mt-6 font-bold" >Create opportunities</h3> <br />
            <form onSubmit={dataSubmit} className="flex flex-col gap-4 container mx-auto md:w-[70%] sm:w-[90%] lg:w-[70%] p-4 m-5 border border-blue-400 rounded-2xl">
                <TextField className="w-full" type="text" variant="secondary" isRequired>
                    <Label>Role Title</Label>
                    <Input placeholder="Enter your name" name="role_title" />
                </TextField>
                <TextField className="w-full" type="text" isRequired>
                    <Label>Skills</Label>
                    <Input name="required_skills" placeholder="Enter your skills" />
                    <Description>Kindly Separate by space</Description>
                </TextField>

                {/* {!selectedFile || (
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
                        <input name="image" type="file" multiple="5" className="hidden" ref={fileInputRef} onChange={fileChange} />

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
                )} */}

              <div className="flex gap-4 justify-between w-full sm:flex-wrap md:flex-wrap lg:flex-nowrap">
                  <RadioGroup defaultValue={"onsite"} name="work_type" isRequired className={"w-full"}>
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

                <RadioGroup defaultValue={"full-time"} name="commitment_level" className="w-full" variant="secondary" isRequired>
                    <Label>Commitment Level</Label>
                    {/* <Input placeholder="Enter your message" name="commitment_level" /> */}
                    <Radio value="full-time" >
                        <Radio.Content>
                            <Radio.Control>
                                <Radio.Indicator />
                            </Radio.Control>
                            Full Time
                        </Radio.Content>
                    </Radio>
                    <Radio value="part-time" >
                        <Radio.Content>
                            <Radio.Control>
                                <Radio.Indicator />
                            </Radio.Control>
                            Part Time
                        </Radio.Content>
                    </Radio>
                </RadioGroup>
              </div>

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
                <Button type="reset" ref={reset} className={"hidden"} ></Button>
            </form>
        </>
    );
}
