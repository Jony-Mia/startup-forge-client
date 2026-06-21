import { Card } from "@heroui/react";
import Image from "next/image";

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
