"use client";

import React, { useState } from "react";
import { Button, Input, Card, TextField, InputGroup } from "@heroui/react";
import { AwsOpenSearch } from "@dev.icons/react";
import { Magnifier } from "@gravity-ui/icons";

const categories = ["All Concepts", "Fintech", "AI", "Green Tech", "Health"];

const initialConcepts = [
  {
    id: 1,
    title: "NeoLedger Protocol",
    category: "Fintech",
    description: "A decentralized liquidity layer for micro-transactions, optimizing cross-border settlements with near-zero latency.",
    tags: ["#Blockchain", "#Liquidity"]
  },
  {
    id: 2,
    title: "Sentient Flow",
    category: "AI",
    description: "Generative workflow automation that predicts operational bottlenecks before they occur, utilizing localized LLMs for privacy.",
    tags: ["#MachineLearning", "#Automation"]
  },
  {
    id: 3,
    title: "BioGrid Carbon",
    category: "Green Tech",
    description: "Urban carbon capture modules disguised as kinetic architectural art, powering local street lighting via bio-photovoltaics.",
    tags: ["#Sustainability", "#UrbanTech"]
  },
  {
    id: 4,
    title: "HoloTherapy",
    category: "Health",
    description: "Augmented reality physical therapy guides that provide real-time skeletal feedback to reduce post-op recovery cycles.",
    tags: ["#MedTech", "#AR"]
  },
  {
    id: 5,
    title: "Aquifer Intel",
    category: "Green Tech",
    description: "Sensor networks for agricultural water management that reduce consumption by 40% through satellite-synced irrigation.",
    tags: ["#WaterSafety", "#AgTech"]
  },
  {
    id: 6,
    title: "Synthetix HR",
    category: "AI",
    description: "Removing bias from recruitment through anonymized AI skill assessments that focus on cognitive output rather than credentials.",
    tags: ["#HRTech", "#EthicalAI"]
  }
];

export default function ExploreInnovation() {
  const [selectedCategory, setSelectedCategory] = useState("All Concepts");
  const [searchQuery, setSearchQuery] = useState("");
  const [savedItems, setSavedItems] = useState([]);

  const toggleSave = (id) => {
    setSavedItems((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

  const filteredConcepts = initialConcepts.filter((concept) => {
    const matchesCategory = selectedCategory === "All Concepts" || concept.category === selectedCategory;
    const matchesSearch = concept.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      concept.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#fafafa] px-6 py-14 font-sans antialiased">
      <div className="mx-auto max-w-6xl">

        {/* Header Block */}
        <div className="mb-10 max-w-2xl text-left">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Explore Innovation
          </h1>
          <p className="mt-3 text-sm font-medium leading-relaxed text-slate-500">
            Discover the next generation of industry-shifting concepts. From AI-driven analytics to sustainable infrastructure, find the seed of your next venture.
          </p>
        </div>

        {/* Controls Layout Toolbar */}
        <div className="mb-8 flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">

          {/* Custom Category Pill Navigation */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide transition-all duration-200 border ${isActive
                    ? "bg-[#804000] border-[#804000] text-white shadow-sm shadow-[#804000]/10"
                    : "bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900"
                    }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Search Box Element */}
          <div className="w-full sm:max-w-xs">

            <InputGroup fullWidth className={"h-auto p-1"}>
              <InputGroup.Input type="search"
                placeholder="Search concepts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                variant="bordered"
                radius="full"
                isClearable
                onClear={() => setSearchQuery("")}
                classNames={{
                  inputWrapper: "bg-white border-slate-200 hover:border-slate-300 focus-within:!border-[#804000] h-9 min-h-9 shadow-sm",
                  input: "text-xs font-medium text-slate-800 placeholder:text-slate-400",
                }} />

              <InputGroup.Suffix>
                <Magnifier />
              </InputGroup.Suffix>
            </InputGroup>
          </div>
        </div>

        {/* Dynamic Concept Cards Grid Layout */}
        {filteredConcepts.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredConcepts.map((item) => {
              const isSaved = savedItems.includes(item.id);
              return (
                <Card
                  key={item.id}
                  className="border border-slate-200/60 bg-white hover:border-slate-300 transition-all duration-300 group shadow-none"
                  radius="xl"
                >
                  <Card.Content className="p-6 flex flex-col justify-between min-h-[240px]">

                    {/* Top Meta Area */}
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[10px] font-bold tracking-widest text-[#804000] uppercase bg-amber-50/60 border border-amber-100/80 px-2 py-0.5 rounded-md">
                          {item.category}
                        </span>

                        {/* Bookmark Action Button */}
                        <Button
                          variant="outline"
                          onClick={() => toggleSave(item.id)}
                          className={`text-slate-400 hover:text-slate-700 transition active:scale-95 ${isSaved ? "text-[#804000] hover:text-[#804000]" : ""
                            }`}
                          aria-label="Save concept"
                        >
                          <svg
                            className="h-4 w-4"
                            fill={isSaved ? "currentColor" : "none"}
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                          </svg>
                        </Button>
                      </div>

                      {/* Main Typography Title & Body */}
                      <h3 className="text-lg font-bold text-slate-900 tracking-tight group-hover:text-[#804000] transition duration-200">
                        {item.title}
                      </h3>
                      <p className="mt-2.5 text-xs font-medium text-slate-500 leading-relaxed line-clamp-3">
                        {item.description}
                      </p>
                    </div>

                    {/* Bottom Dynamic Tag Badges */}
                    <div className="mt-5 flex flex-wrap gap-2 pt-2 border-t border-slate-100">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-semibold text-slate-400 bg-slate-50 border border-slate-100 px-2 py-0.5 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                  </Card.Content>
                </Card>
              );
            })}
          </div>
        ) : (
          /* Empty Search Fallback State Display */
          <div className="text-center py-20 rounded-2xl border border-dashed border-slate-200 bg-white">
            <p className="text-sm font-semibold text-slate-500">No matching concepts discovered.</p>
            <p className="text-xs text-slate-400 mt-1">Try broadening your active search terms or parameters.</p>
          </div>
        )}

        {/* Global Bottom Load More Trigger CTA */}
        <div className="mt-12 flex justify-center">
          <Button
            variant="bordered"
            radius="full"
            className="border-slate-200 bg-white text-xs font-bold text-slate-700 px-6 hover:bg-slate-50 hover:border-slate-300 min-w-[180px] shadow-sm"
          >
            Explore More Concepts
            <svg className="h-3.5 w-3.5 text-slate-500 animate-bounce mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </Button>
        </div>

      </div>
    </div>
  );
}