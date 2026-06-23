"use client";

import React, { useState } from "react";
import { Input, TextArea as Textarea, Select, Button, Card } from "@heroui/react";

const industries = [
  { key: "fintech", label: "Fintech" },
  { key: "ai", label: "Artificial Intelligence" },
  { key: "greentech", label: "Green Tech" },
  { key: "health", label: "Health & MedTech" },
  { key: "saas", label: "SaaS & Enterprise" }
];

const teamSizes = ["Solo Founder", "2-5 Members", "6-10 Members", "10+ Members"];

export default function ForgeYourIdea() {
  const [targetIndustry, setTargetIndustry] = useState(new Set([]));
  const [currentTeamSize, setCurrentTeamSize] = useState("Solo Founder");
  const [formData, setFormData] = useState({
    ideaTitle: "",
    problemStatement: "",
    solutionOverview: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Concept validation submission logic goes here
  };

  return (
    <div className="min-h-screen bg-[#fafafa] px-4 py-12 font-sans antialiased sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl">
        
        {/* Step Header Block */}
        <div className="mb-6 flex items-end justify-between">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-950">
              Forge Your Idea
            </h1>
            <p className="mt-1.5 text-xs font-semibold text-slate-500">
              Complete the details below to validate your vision.
            </p>
          </div>
          <div className="text-right">
            <span className="text-[10px] font-black tracking-widest text-[#9e4a00] uppercase">
              Step 1 of 1
            </span>
          </div>
        </div>

        {/* Form Visual Progress Indicator Segment */}
        <div className="mb-10 h-1 w-full rounded-full bg-slate-200/70">
          <div className="h-1 w-1/4 rounded-full bg-orange-500"></div>
        </div>

        {/* Main Workspace Card Container */}
        <Card className="border border-slate-200/60 bg-white shadow-sm" radius="2xl">
          <Card.Content className="p-6 sm:p-10">
            
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Idea Title Field */}
              <Input
                type="text"
                name="ideaTitle"
                label="Idea Title"
                labelPlacement="outside"
                placeholder="Give your vision a compelling name."
                value={formData.ideaTitle}
                onChange={handleInputChange}
                variant="underlined"
                isRequired
                classNames={{
                  label: "text-xs font-bold text-slate-500 pb-1",
                  input: "text-sm font-medium text-slate-900 placeholder:text-slate-300 pb-2",
                }}
              />

              {/* Target Industry Dropdown Field */}
              <div className="flex flex-col gap-1.5">
                <span className="text-[10px] font-black tracking-wider text-slate-400 uppercase">
                  Target Industry
                </span>
                <Select
                  aria-label="Select an industry"
                  placeholder="Select an industry"
                  selectedKeys={targetIndustry}
                  onSelectionChange={setTargetIndustry}
                  variant="bordered"
                  radius="md"
                  isRequired
                  classNames={{
                    trigger: "border-slate-200 bg-[#f3f6fc]/50 hover:border-slate-300 data-[open=true]:border-orange-500 shadow-none h-11 min-h-11",
                    value: "text-xs font-medium text-slate-700 placeholder:text-slate-400",
                  }}
                >
                  {industries.map((industry) => (
                    <Select.Item key={industry.key} className="text-xs font-medium text-slate-800">
                      {industry.label}
                    </Select.Item>
                  ))}
                </Select>
              </div>

              {/* Problem Statement Area Field */}
              <Textarea
                name="problemStatement"
                label="Problem Statement"
                labelPlacement="outside"
                placeholder="What friction are you solving in the market?"
                value={formData.problemStatement}
                onChange={handleInputChange}
                variant="underlined"
                isRequired
                minRows={2}
                classNames={{
                  label: "text-xs font-bold text-slate-500 pb-1",
                  input: "text-sm font-medium text-slate-900 placeholder:text-slate-300 pb-2 leading-relaxed",
                }}
              />

              {/* Solution Overview Area Field */}
              <Textarea
                name="solutionOverview"
                label="Solution Overview"
                labelPlacement="outside"
                placeholder="How does your product address the problem?"
                value={formData.solutionOverview}
                onChange={handleInputChange}
                variant="underlined"
                isRequired
                minRows={2}
                classNames={{
                  label: "text-xs font-bold text-slate-500 pb-1",
                  input: "text-sm font-medium text-slate-900 placeholder:text-slate-300 pb-2 leading-relaxed",
                }}
              />

              {/* Team Size Custom Multi-Selector Container */}
              <div className="flex flex-col gap-2.5">
                <span className="text-[10px] font-black tracking-wider text-slate-400 uppercase">
                  Current Team Size
                </span>
                <div className="flex flex-wrap gap-2">
                  {teamSizes.map((size) => {
                    const isSelected = currentTeamSize === size;
                    return (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setCurrentTeamSize(size)}
                        className={`rounded-full px-4 py-2 text-xs font-semibold tracking-wide border transition-all duration-200 ${
                          isSelected
                            ? "bg-[#9e4a00]/5 border-[#9e4a00] text-[#9e4a00]"
                            : "bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900"
                        }`}
                      >
                        {size}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Submission Action Button Wrapper */}
              <div className="pt-4">
                <Button
                  type="submit"
                  className="w-full bg-[#9e4a00] hover:bg-[#853e00] text-white font-bold text-sm h-12 shadow-sm"
                  radius="lg"
                  endContent={
                    <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.63 8.41a14.93 14.93 0 00-3.07 10.76m12-14.37a1 1 0 11-1.41-1.41 1 1 0 011.41 1.41z" />
                    </svg>
                  }
                >
                  Submit Idea
                </Button>
              </div>

              {/* Interactive Agreement Footer Statement */}
              <p className="text-center text-[10px] font-bold text-slate-400">
                By submitting, you agree to our Terms of Innovation and Privacy Policy.
              </p>

            </form>

          </Card.Content>
        </Card>

      </div>
    </div>
  );
}
