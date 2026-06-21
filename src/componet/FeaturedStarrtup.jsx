import { Card, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import BioPlant from "@/assets/unnamed.png"
import manufecture from "@/assets/manufecture.png"
import Hero_Image from "@/assets/Gemini_Generated_Image_7ewk357ewk357ewk.png"


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