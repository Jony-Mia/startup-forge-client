"use client"
import { Button, Chip, Table, Tooltip } from "@heroui/react";
import DeleteButton from "./DeleteButton";
import { Check } from "@gravity-ui/icons";

const Tabler = ({data}) => {
    
    return (
            <Table
                aria-label="Opportunities management table"
            >
                <Table.Content>
                    <Table.Header >
                        <Table.Column isRowHeader  className="bg-default-100 text-default-700 font-semibold text-sm">ROLE</Table.Column>
                        <Table.Column isRowHeader  className="bg-default-100 text-default-700 font-semibold text-sm">SKILLS REQUIRED</Table.Column>
                        <Table.Column isRowHeader className="bg-default-100 text-default-700 font-semibold text-sm">WORK TYPE</Table.Column>
                        <Table.Column isRowHeader className="bg-default-100 text-default-700 font-semibold text-sm">DEADLINE</Table.Column>
                        <Table.Column isRowHeader className="bg-default-100 text-default-700 font-semibold text-sm align-middle text-right pr-6">ACTIONS</Table.Column>
                    </Table.Header>
                    <Table.Body>
                        {data.map((item) => (
                            <Table.Row key={item._id || item.role} className="border-b border-divider last:border-none hover:bg-default-50 transition-colors">
                                <Table.Cell className="py-4">
                                    <div className="flex flex-col">
                                        <span className="font-medium text-default-800 capitalize">{item.role_title}</span>
                                        <span className="text-xs text-default-400 capitalize">{item.startup || "Business Helper"}</span>
                                    </div>
                                </Table.Cell>
                                <Table.Cell className="py-4">
                                    <div className="flex flex-wrap gap-1.5 max-w-md">
                                      { console.log(item.required_skills) }
                                      
                                        {/* {item.required_skills?.map((skill, idx) => (
                                            <Chip
                                                key={idx}
                                                size="sm"
                                                variant="flat"
                                                className="text-default-600 bg-default-100 font-medium"
                                            >
                                                {skill}
                                            </Chip>
                                        ))} */}
                                    </div>
                                </Table.Cell>
                                <Table.Cell className="py-4">
                                    <Chip
                                        size="sm"
                                        variant="dot"
                                        // color={getWorkTypeColor(item.workType)}
                                        className="capitalize font-medium px-2"
                                    >
                                        {item.work_type}
                                    </Chip>
                                </Table.Cell>
                                <Table.Cell className="py-4 text-default-600 text-sm font-medium">
                                    {item.deadline}
                                </Table.Cell>
                                <Table.Cell className="py-4 text-right pr-4">
                                    <div className="flex justify-end items-center gap-2">
                                        <Tooltip content="Approve Opportunity" closeDelay={100}>
                                            <Button
                                                isIconOnly
                                                variant="outline"
                                                size="sm"
                                                color="success"
                                                className="min-w-8 w-8 h-8 rounded-full"
                                            >
                                                <Check className="w-4 h-4" />
                                            </Button>
                                        </Tooltip>
                                        <Tooltip content="Delete Record" color="danger" closeDelay={100}>
                                            <div className="inline-flex">
                                                <DeleteButton id={item._id} />
                                            </div>
                                        </Tooltip>
                                    </div>
                                </Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table.Content>
            </Table>
    );
};

export default Tabler;