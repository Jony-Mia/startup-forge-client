// Card Data:
// Role Title
// Startup Name
// Required Skills
// Application Deadline

import { GetRoute } from "@/api/actionRoutes";
import { Button, Card, Tab, Table } from "@heroui/react";

// const data = [
//     {
//         role: "consultant",
//         workType:"remote",
//         startup: "Business Helper",
//         skills: ["Communication", "Team Work", "Patient"],
//         deadline: "12-12-2026"
//     },
//     {
//         workType:"remote",
//         role: "agriculture",
//         startup: "Business Helper",
//         skills: ["Communication", "Team Work", "Patient"],
//         deadline: "12-12-2026"

//     },
//     {
//         role: "security",
//         workType:"hybrid",
//         startup: "Business Helper",
//         skills: ["Communication", "Team Work", "Patient"],
//         deadline: "12-12-2026"
//     },
//     {
//         role: "developer",
//         workType:"onsite",
//         startup: "Business Helper",
//         skills: ["Communication", "Team Work", "Patient"],
//         deadline: "12-12-2026"
//     },
// ]


const page = async () => {
    
    let data = await GetRoute();
    return (
        <div>
            <Table suppressHydrationWarning className="container mx-auto my-4">
                <Table.Content >
                    <Table.Header  >
                        {/* <Table.Column>Startup</Table.Column> */}
                        <Table.Column>Role</Table.Column>
                        <Table.Column>Skills</Table.Column>
                        <Table.Column>Work Type</Table.Column>
                        <Table.Column>Deadline</Table.Column>
                        <Table.Column>Action</Table.Column>
                    </Table.Header>
                    <Table.Body>
                        {
                            data.map(items => (
                                <Table.Row key={items} >
                                    {/* <Table.Cell>{items.startup}</Table.Cell> */}
                                    <Table.Cell>{items.role}</Table.Cell>
                                    <Table.Cell>{items.skills.map(sk => ` ${sk} `)}</Table.Cell>
                                    <Table.Cell>{items.workType}</Table.Cell>
                                    <Table.Cell>{items.deadline}</Table.Cell>
                                    <Table.Cell>
                                        <Button variant="danger" size="sm">
                                            Reject
                                        </Button>
                                        <Button variant="outline" size="sm">
                                            Accept
                                        </Button>
                                    </Table.Cell>
                                </Table.Row>
                            ))
                        }
                    </Table.Body>
                </Table.Content>
            </Table>
            <br />

        </div>
    );
};

export default page;