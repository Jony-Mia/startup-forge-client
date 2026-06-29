import React from 'react';
import Hero_Image from "@/assets/Gemini_Generated_Image_7ewk357ewk357ewk.png"
import { Button, Card, Chip, ProgressBar } from '@heroui/react';
import Image from 'next/image';

const Hero = () => {
 
  
    return (
        <div>
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
                        <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent"></div>
            
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
        </div>
    );
};

export default Hero;