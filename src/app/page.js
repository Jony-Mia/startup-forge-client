import Image from "next/image";
import { Button, Chip, Progress, Card, ProgressBar } from "@heroui/react";
import Hero_Image from "@/assets/Gemini_Generated_Image_7ewk357ewk357ewk.png"
import BioPlant from "@/assets/unnamed.png"
import manufecture from "@/assets/manufecture.png"
import Link from "next/link";

export default function Home() {
  return (
    <>
    
      <section className="bg-[#fafaf9] min-h-screen flex items-center justify-center p-6 md:p-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Content Column */}
          <div className="flex flex-col items-start space-y-6">
            <Chip
              size="sm"
              className="bg-[#fcebe0] text-[#b35e22] font-semibold tracking-wider uppercase px-2 py-4"
              radius="full"
            >
              Launchpad V2.0
            </Chip>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1]">
              Build Your Dream <span className="text-[#a8551c]">Startup Team</span>
            </h1>

            <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
              Forge the future of industry with a world-class team. Connect with elite founders, specialized engineers, and visionary investors in our industrial-grade digital ecosystem.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                className="bg-[#a8551c] text-white font-semibold rounded-md px-8 shadow-md hover:bg-[#8f4716]"
              >
                Launch Startup
              </Button>
              <Button
                size="lg"
                variant="bordered"
                className="border-2 border-slate-900 text-slate-900 font-semibold rounded-md px-8 hover:bg-slate-100"
              >
                Explore Roles
              </Button>
            </div>
          </div>

          {/* Right Visual Column */}
          <div className="relative w-full h-[450px] md:h-[550px] rounded-2xl overflow-hidden shadow-2xl">
            {/* Background Image Container */}
            <Image
              src={Hero_Image}
              alt="Industrial high-tech office space"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

            {/* Floating Glassmorphism Card */}
            <Card
              className="absolute bottom-6 left-6 right-6 bg-white/80 backdrop-blur-md border-none shadow-xl rounded-xl"
              shadow="none"
            >
              <Card.Content className="p-5">
                <div className="flex justify-between items-start mb-6">

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#fe7e2a] rounded-full flex items-center justify-center text-white shadow-inner">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-slate-900 font-bold text-base">CyberFabric AI</h3>
                      <p className="text-slate-500 text-xs font-medium">Industrial Automation</p>
                    </div>
                  </div>

                  <Chip
                    size="sm"
                    className="bg-[#dcfce7] text-[#16a34a] font-bold text-[10px] tracking-wide"
                    radius="sm"
                  >
                    ACTIVE FORGE
                  </Chip>
                </div>

                <div className="space-y-2">
                  <ProgressBar
                    value={75}
                    size="md"

                    aria-label="Team Forge Progress"
                  >
                    <ProgressBar />
                    <ProgressBar.Track>
                      <ProgressBar.Fill></ProgressBar.Fill>
                    </ProgressBar.Track>
                  </ProgressBar>
                  <p className="text-slate-600 text-xs font-semibold">Team Forge: 75% Complete</p>
                </div>
              </Card.Content>
            </Card>

          </div>
        </div>
      </section>

      <StatisticsSection />
      <FeaturedStartups />
      <FeaturedOpportunities />
      <CTASection/>
      <FooterSection/>
    </>
  );
}


export  function NavbarSection() {
  return (
    <section className="bg-white py-16 lg:py-24 px-6 md:px-12 w-full flex justify-center overflow-hidden font-sans">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Content */}
        <div className="lg:col-span-5 flex flex-col space-y-6">
          <div>
            <span className="inline-block bg-[#fcece3] text-[#964c1e] font-bold text-xs tracking-wider uppercase px-3 py-1.5 rounded-md">
              Launchpad V2.0
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Build Your Dream <span className="text-[#964c1e]">Startup Team</span>
          </h1>
          
          <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-xl">
            Forge the future of industry with a world-class team. Connect with elite founders, 
            specialized engineers, and visionary investors in our industrial-grade digital ecosystem.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2 w-full sm:w-auto">
            <Link
              href="#"
              className="bg-[#964c1e] hover:bg-[#7a3d18] text-white font-bold px-8 py-4 rounded-xl w-full sm:w-auto text-center shadow-md transition-colors duration-200"
            >
              Launch Startup
            </Link>
            <Link
              href="#"
              className="border-2 border-slate-900 hover:bg-slate-50 text-slate-900 font-bold px-8 py-4 rounded-xl w-full sm:w-auto text-center transition-colors duration-200"
            >
              Explore Roles
            </Link>
          </div>
        </div>

        {/* Right Column: Visual Graphic and Preview Card */}
        <div className="lg:col-span-7 relative w-full h-[28rem] sm:h-[32rem] md:h-[36rem] rounded-[2rem] overflow-hidden shadow-2xl">
          {/* Main Workspace Image Asset */}
          <Image
            src="/hero-forge.jpg"
            alt="CyberFabric AI Workplace"
            fill
            priority
            className="object-cover"
          />
          
          {/* Status Overlay Card */}
          <div className="absolute bottom-6 left-6 right-6 bg-[#e2e8f0]/90 backdrop-blur-md rounded-2xl p-5 md:p-6 border border-white/20 shadow-xl flex flex-col space-y-4">
            
            {/* Top Container: Details and Badge */}
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                {/* Custom Branded Icon Container */}
                <div className="w-12 h-12 bg-[#ff6b00] rounded-xl flex items-center justify-center text-white shrink-0 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4.5 16.5c-1.5 1.26-2.5 3.19-2.5 5.5h20c0-2.31-1-4.24-2.5-5.5"></path>
                    <path d="M12 2C6.5 2 2 6.5 2 12c0 3.58 2.5 6.58 6 7l4-4 4 4c3.5-0.42 6-3.42 6-7 0-5.5-4.5-10-10-10z"></path>
                    <circle cx="12" cy="10" r="2"></circle>
                  </svg>
                </div>
                {/* Card Titles */}
                <div>
                  <h4 className="text-base font-bold text-slate-900">CyberFabric AI</h4>
                  <p className="text-xs font-semibold text-slate-500">Industrial Automation</p>
                </div>
              </div>
              
              {/* Mini Status Pill */}
              <span className="bg-[#d1fae5] text-[#065f46] font-bold text-[10px] sm:text-xs tracking-wider px-3 py-1.5 rounded-full uppercase">
                Active Forge
              </span>
            </div>

            {/* Bottom Container: Progress Indicator */}
            <div className="flex flex-col space-y-2">
              <div className="w-full bg-slate-300/60 h-2.5 rounded-full overflow-hidden">
                <div className="bg-[#964c1e] h-full w-[75%] rounded-full"></div>
              </div>
              <span className="text-xs font-bold text-slate-600">
                Team Forge: 75% Complete
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

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

export function StatisticsSection() {
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

const startups = [
  {
    id: 1,
    name: "EcoPath Systems",
    founder: "Elena Vance",
    teamSize: "12 members",
    category: "Logistics",
    image: BioPlant,
  },
  {
    id: 2,
    name: "ForgeGrid Dynamics",
    founder: "Marcus Thorne",
    teamSize: "8 members",
    category: "Manufacturing",
    image: manufecture
  },
  {
    id: 3,
    name: "BioSynthetix",
    founder: "Dr. Sarah Chen",
    teamSize: "24 members",
    category: "Biotech",
    image: Hero_Image
  }
];

export function FeaturedStartups() {
  return (
    <section className="bg-[#f9fafc] py-16 px-6 md:px-12 flex justify-center w-full">
      <div className="max-w-7xl w-full flex flex-col space-y-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between space-y-4 md:space-y-0">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Featured Startups</h2>
            <p className="text-slate-600 text-base">Emerging ventures ready for industrial-scale growth.</p>
          </div>
          <Link
            href="#"
            className="flex items-center text-[#964c1e] font-semibold hover:text-[#7a3d18] transition-colors"
          >
            View All
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

        {/* Startups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {startups.map((startup) => (
            <Card
              key={startup.id}
              className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
              shadow="none"
            >
              {/* Card Image Container */}
              <div className="relative w-full h-56">
                <Image
                  src={startup.image}
                  alt={startup.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Chip
                    className="bg-white/90 backdrop-blur-sm text-slate-800 font-semibold text-xs px-3 shadow-sm"
                    radius="full"
                  >
                    {startup.category}
                  </Chip>
                </div>
              </div>

              {/* Card Content */}
              <Card.Content className="px-6 py-5">
                <h3 className="text-xl font-bold text-slate-900 mb-1">{startup.name}</h3>
                <p className="text-sm text-slate-500">Founder: {startup.founder}</p>
              </Card.Content>

              {/* Divider */}
              <div className="px-6">
                <div className="h-px w-full bg-slate-100"></div>
              </div>

              {/* Card Footer */}
              <Card.Footer className="px-6 py-4 flex justify-between items-center bg-white">
                <div className="flex items-center text-slate-600 space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#964c1e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span className="text-xs font-medium">Team: {startup.teamSize}</span>
                </div>
                <Link
                  href="#"
                  className="text-sm font-bold text-slate-800 hover:text-[#964c1e] transition-colors"
                >
                  View Profile
                </Link>
              </Card.Footer>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}


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

export function FeaturedOpportunities() {
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



export  function SuccessStories() {
  return (
    <section className="bg-[#f8fafc] py-20 px-6 md:px-12 w-full flex flex-col items-center">
      <div className="max-w-7xl w-full flex flex-col">
        
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] text-center mb-12">
          Success Stories
        </h2>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-stretch">
          
          {/* Left Testimonial Card */}
          <Card 
            className="lg:col-span-3 bg-white border border-slate-200 rounded-2xl relative p-3 md:p-6"
            shadow="none"
          >
            <Card.Content className="flex flex-col justify-between h-full space-y-8 relative overflow-hidden">
              {/* Large Decorative Quote Mark */}
              <div className="absolute top-0 left-2 text-[#fcece3] text-7xl font-serif select-none pointer-events-none leading-none">
                “
              </div>
              
              {/* Testimonial Quote */}
              <p className="text-xl md:text-2xl font-medium text-[#0f172a] leading-relaxed pt-6 relative z-10">
                &ldquo;StartupForge didn&apos;t just help me find a job; it helped me find a mission. I met the founders of QuantumLink here, and 18 months later, we&apos;ve secured our Series A.&rdquo;
              </p>
              
              {/* User Profile Info */}
              <div className="flex items-center gap-4 pt-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#ff6b00]">
                  {/* Replace with your local asset path */}
                  <Image 
                    src="/avatar-jameson.jpg" 
                    alt="Jameson Wright"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#0f172a]">Jameson Wright</h4>
                  <p className="text-xs font-medium text-slate-500">CTO, QuantumLink</p>
                </div>
              </div>
            </Card.Content>
          </Card>

          {/* Right Metrics Column */}
          <div className="lg:col-span-2 flex flex-col gap-6 justify-between">
            
            {/* Growth Stat Card */}
            <Card className="bg-[#ff6b00] text-white rounded-2xl border-none p-2 h-full flex justify-center" shadow="none">
              <Card.Content className="flex flex-row items-center gap-5 p-6">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                    <polyline points="17 6 23 6 23 12"></polyline>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight">150% Average Growth</h3>
                  <p className="text-white/80 text-sm font-medium mt-0.5">Teams scale significantly faster.</p>
                </div>
              </Card.Content>
            </Card>

            {/* Validation Stat Card */}
            <Card className="bg-[#0b1329] text-white rounded-2xl border-none p-2 h-full flex justify-center" shadow="none">
              <Card.Content className="flex flex-row items-center gap-5 p-6">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 8l3 4.5H9L12 8z"></path>
                    <path d="M12 12v4"></path>
                    <path d="M9 16h6"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Elite Validation</h3>
                  <p className="text-slate-400 text-sm font-medium mt-0.5">94% reach their next funding milestone.</p>
                </div>
              </Card.Content>
            </Card>

          </div>

        </div>
      </div>
    </section>
  );
}


export function CTASection() {
  return (
    <section className="bg-[#f8fafc] py-16 px-6 md:px-12 w-full flex justify-center">
      <div 
        className="max-w-6xl w-full bg-[#060c1a] rounded-[2.5rem] py-20 px-8 md:px-16 text-center relative overflow-hidden shadow-xl flex flex-col items-center justify-center border border-slate-800"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          backgroundPosition: "center"
        }}
      >
        {/* Glow Effect */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none"></div>
        
        {/* Content Container */}
        <div className="relative z-10 max-w-2xl flex flex-col items-center space-y-6">
          
          {/* Main Heading */}
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            Ready to Engineer the Future?
          </h2>
          
          {/* Description Text */}
          <p className="text-slate-400 text-base md:text-lg font-medium max-w-xl leading-relaxed">
            Whether you&apos;re a solo founder or an engineer looking for your next challenge, the Forge is open.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full sm:w-auto">
            <Button
              size="lg"
              className="bg-[#9c460c] hover:bg-[#80390a] text-white font-bold px-8 py-6 rounded-xl w-full sm:w-auto transition-colors duration-200"
            >
              Get Started Today
            </Button>
            <Button
              size="lg"
              variant="bordered"
              className="border-slate-700 hover:border-slate-500 text-white font-bold px-8 py-6 rounded-xl w-full sm:w-auto transition-colors duration-200"
            >
              Request a Demo
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}

export function FooterSection() {
  return (
    <footer className="bg-[#eef1f6] py-8 px-6 md:px-12 w-full flex justify-center border-t border-slate-200/60 font-sans">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        
        {/* Left Column: Brand & Copyright */}
        <div className="flex flex-col space-y-1">
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">
            StartupForge
          </h2>
          <p className="text-sm text-slate-600 font-medium">
            &copy; 2024 StartupForge. Engineering the future.
          </p>
        </div>

        {/* Right Column: Navigation Links & Action Buttons */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-6 lg:gap-12 w-full lg:w-auto justify-between lg:justify-end">
          
          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-semibold text-slate-600">
            <Link href="#" className="hover:text-slate-900 transition-colors duration-150">
              About Us
            </Link>
            <Link href="#" className="hover:text-slate-900 transition-colors duration-150">
              Contact Support
            </Link>
            <Link href="#" className="hover:text-slate-900 transition-colors duration-150">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-slate-900 transition-colors duration-150">
              Terms of Service
            </Link>
          </nav>

          {/* Utility Icon Buttons */}
          <div className="flex items-center gap-3">
            <Button
              isIconOnly
              radius="full"
              variant="flat"
              className="bg-slate-200 hover:bg-slate-300 text-slate-600 min-w-10 w-10 h-10 transition-colors duration-150"
              aria-label="Select Language"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
            </Button>
            
            <Button
              isIconOnly
              radius="full"
              variant="flat"
              className="bg-slate-200 hover:bg-slate-300 text-slate-600 min-w-10 w-10 h-10 transition-colors duration-150"
              aria-label="Share Page"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="18" cy="5" r="3"></circle>
                <circle cx="6" cy="12" r="3"></circle>
                <circle cx="18" cy="19" r="3"></circle>
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
              </svg>
            </Button>
          </div>

        </div>

      </div>
    </footer>
  );
}