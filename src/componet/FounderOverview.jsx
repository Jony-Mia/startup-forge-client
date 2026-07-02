import { GetRoute } from '@/api/actionRoutes';
import { FileText, Rocket, PersonGear, Check } from '@gravity-ui/icons';
import { Card, Button, Chip, Table, TableColumn, Label, Tooltip } from '@heroui/react';
import DeleteButton from './DeleteButton';

export default async function FounderOverview() {
  let data = await GetRoute();
  console.log();

  const metrics = [
    {
      title: 'TOTAL OPPORTUNITIES',
      value: data.length,
      trend: '+12%',
      trendType: 'positive',
      icon: <Rocket />
    },
    {
      title: 'TOTAL APPLICATIONS',
      value: '148',
      trend: '+5%',
      trendType: 'positive',
      icon: <FileText />
    },
    {
      title: 'ACCEPTED MEMBERS',
      value: '52',
      trend: 'Stable',
      trendType: 'neutral',
      icon: <PersonGear />
    }
  ];

  return (
    <div className="w-full  mx-auto p-6 bg-[#f8f9fa]">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-[#091e42] tracking-tight">
            Founder Overview
          </h1>
          <p className="text-base text-[#5e6c84] mt-1">
            Welcome back. Here's what's happening across your ventures today.
          </p>
        </div>
        <Button className="bg-[#ff6b00] text-white font-medium px-5 h-11 rounded-xl shadow-sm hover:bg-[#e05e00] transition-colors self-start sm:self-center" >
          Quick Add
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 mx-auto gap-6">
        {metrics.map((item, index) => (
          <Card
            key={index}
            radius="lg"
            className="border border-[#e2e8f0] bg-white shadow-none p-2"
          >
            <Card.Content className="flex flex-col justify-between p-4 min-h-[140px]">
              <div className="flex items-start justify-between w-full">
                <div className="p-3 bg-[#1e293b] text-white rounded-xl">
                  {item.icon}
                </div>
                <Chip
                  size="sm"
                  variant="flat"
                  className={`font-semibold border-none ${item.trendType === 'positive'
                    ? 'bg-[#e6f4ea] text-[#137333]'
                    : 'bg-[#f1f3f4] text-[#5f6368]'
                    }`}                 
                >
                  {item.trendType === 'neutral' && '— '}
                  {item.trend}
                </Chip>
              </div>

              <div className="mt-4">
                <span className="text-xs font-bold text-[#626f84] tracking-wider block uppercase">
                  {item.title}
                </span>
                <span className="text-4xl font-bold text-[#091e42] block mt-1">
                  {item.value}
                </span>
              </div>
            </Card.Content>
          </Card>
        ))}
      </div>
      <br />
      <p className='font-bold text-2xl my-2'>Recent Applications</p>
      <Table>
        <Table.Content>
          <Table.Header className={"rounded-none!"}>
            <Table.Column isRowHeader={true} className={"font-bold"}> Applicant </Table.Column>
            <Table.Column isRowHeader={true} className={"font-bold"}> Role Applied </Table.Column>
            <Table.Column isRowHeader={true} className={"font-bold"}> Work Type </Table.Column>
            <Table.Column isRowHeader={true} className={"font-bold"}> Actions </Table.Column>
          </Table.Header>
          <Table.Body>
            {data.reverse().slice(0,5).map((item) => (
              <Table.Row key={item._id || item.role} className="border-b border-divider last:border-none hover:bg-default-50 transition-colors">
                <Table.Cell className="py-4">
                  <div className="flex flex-col">
                    <span className="font-medium text-default-800 capitalize">{item.role_title}</span>
                    <span className="text-xs text-default-400 capitalize">{item.startup || "Business Helper"}</span>
                  </div>
                </Table.Cell>
                <Table.Cell className="py-4">
                  <div className="flex flex-wrap gap-1.5 max-w-md">
                    {item.required_skills?.map((skill, idx) => (
                      <Chip
                        key={idx}
                        size="sm"
                        variant="flat"
                        className="text-default-600 bg-default-100 font-medium"
                      >
                        {skill}
                      </Chip>
                    ))}
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
                {/* <Table.Cell className="py-4 text-default-600 text-sm font-medium">
                  {item.deadline}
                </Table.Cell> */}
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
    </div>
  );
}