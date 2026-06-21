import { Card } from "@heroui/react";

const stats = [
  {
    id: 1,
    title: "TOTAL TEAMS",
    value: "1,240",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#964c1e]">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
  },
  {
    id: 2,
    title: "JOBS FILLED",
    value: "4.8k",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#964c1e]">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
      </svg>
    ),
  },
  {
    id: 3,
    title: "CAPITAL RAISED",
    value: "$850M",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#964c1e]">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
        <path d="M12 18V6"></path>
      </svg>
    ),
  },
  {
    id: 4,
    title: "COUNTRIES",
    value: "32",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#964c1e]">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        <path d="M2 12h20"></path>
      </svg>
    ),
  }
];

export default function StatisticsSection() {
  return (
    <section className="bg-[#f4f5f7] py-16 px-6 md:px-12 w-full flex justify-center">
      <div className="max-w-7xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card
            key={stat.id}
            className="bg-white border border-slate-200 rounded-xl shadow-sm"
            shadow="none"
          >
            <Card.Content className="flex flex-col items-center justify-center p-8 text-center space-y-4">
              <div className="mb-2">
                {stat.icon}
              </div>

              <div className="flex flex-col items-center space-y-1">
                <h3 className="text-3xl font-bold text-[#0b1b2b] tracking-tight">
                  {stat.value}
                </h3>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
                  {stat.title}
                </p>
              </div>
            </Card.Content>
          </Card>
        ))}
      </div>
    </section>
  );
}