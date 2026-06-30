import { GetRoute } from '@/api/actionRoutes';
import { FileText, Rocket,PersonGear } from '@gravity-ui/icons';
import { Card, Button, Chip } from '@heroui/react';

 export default async function FounderOverview() {
  let data = await GetRoute();
  console.log();
  
  const metrics = [
    {
      title: 'TOTAL OPPORTUNITIES',
      value: data.length,
      trend: '+12%',
      trendType: 'positive',
      icon: <Rocket/>
    },
    {
      title: 'TOTAL APPLICATIONS',
      value: '148',
      trend: '+5%',
      trendType: 'positive',
      icon: <FileText/>
    },
    {
      title: 'ACCEPTED MEMBERS',
      value: '52',
      trend: 'Stable',
      trendType: 'neutral',
      icon: <PersonGear/>
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
        <Button
          className="bg-[#ff6b00] text-white font-medium px-5 h-11 rounded-xl shadow-sm hover:bg-[#e05e00] transition-colors self-start sm:self-center"
          
        >
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
                  className={`font-semibold border-none ${
                    item.trendType === 'positive'
                      ? 'bg-[#e6f4ea] text-[#137333]'
                      : 'bg-[#f1f3f4] text-[#5f6368]'
                  }`}
                  startContent={
                    item.trendType === 'positive' && (
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="mr-0.5">
                        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                        <polyline points="17 6 23 6 23 12" />
                      </svg>
                    )
                  }
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
    </div>
  );
}