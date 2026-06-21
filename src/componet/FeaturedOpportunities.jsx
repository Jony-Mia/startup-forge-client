import { Card, Chip } from "@heroui/react";


const opportunities = [
  {
    id: 1,
    title: "Lead Machine Learning Engineer",
    company: "CyberFabric AI",
    location: "Fully Remote",
    tags: ["PyTorch", "Kubernetes"],
    deadline: "Apply by Oct 24",
    compensation: "Equity: 1.5% - 2.5%",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    ),
  },
  {
    id: 2,
    title: "Senior Product Designer",
    company: "EcoPath Systems",
    location: "Austin, TX",
    tags: ["Figma", "Systems Thinking"],
    deadline: "Apply by Oct 30",
    compensation: "Salary: $140k - $170k",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
        <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
        <path d="M2 2l7.586 7.586"></path>
        <circle cx="11" cy="11" r="2"></circle>
      </svg>
    ),
  }
];

export default function FeaturedOpportunities() {
  return (
    <section className="bg-[#0b1121] py-16 px-6 md:px-12 w-full flex justify-center font-sans">
      <div className="max-w-5xl w-full flex flex-col space-y-8">

        {/* Section Header */}
        <div className="flex flex-col space-y-2">
          <h2 className="text-3xl font-bold text-white tracking-tight">Featured Opportunities</h2>
          <p className="text-slate-400 text-base">Join the engine room of the next big thing.</p>
        </div>

        {/* Opportunities List */}
        <div className="flex flex-col space-y-4">
          {opportunities.map((job) => (
            <Card
              key={job.id}
              className="bg-[#161e2e] border border-slate-700/50 rounded-xl hover:border-slate-600 transition-colors duration-200"
              shadow="none"
            >
              <Card.Content className="p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">

                {/* Left Side: Icon and Details */}
                <div className="flex items-center gap-5">
                  <div className="min-w-12 w-12 h-12 bg-[#c2561a] rounded-lg flex items-center justify-center shadow-sm">
                    {job.icon}
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-lg font-bold text-white">{job.title}</h3>
                    <p className="text-sm text-slate-400 mt-0.5">
                      {job.company} &bull; {job.location}
                    </p>
                  </div>
                </div>

                {/* Right Side: Tags and Compensation */}
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {job.tags.map((tag, index) => (
                      <Chip
                        key={index}
                        size="sm"
                        className="bg-[#1f2937] text-slate-300 font-medium px-2 py-4"
                        radius="sm"
                      >
                        {tag}
                      </Chip>
                    ))}
                  </div>

                  {/* Deadline & Compensation */}
                  <div className="flex flex-col md:text-right">
                    <span className="text-[#e87a3e] font-bold text-sm">{job.deadline}</span>
                    <span className="text-slate-400 text-xs mt-1">{job.compensation}</span>
                  </div>
                </div>

              </Card.Content>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}

