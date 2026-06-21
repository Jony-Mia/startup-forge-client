"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const loadingStatuses = [
  "Mounting virtual volumes...",
  "Allocating thread pools...",
  "Resolving cloud dependencies...",
  "Tempering global variables...",
  "Initializing developer console..."
];

export default function DeveloperConsoleLoading() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    if (currentIndex >= loadingStatuses.length) return;

    const timer = setTimeout(() => {
      // Add the current message to the historical terminal logs below the line
      if (currentIndex > 0) {
        setHistory((prev) => [...prev, loadingStatuses[currentIndex - 1]]);
      }
      setCurrentIndex((prev) => prev + 1);
    }, 1200);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#070b14] p-6 font-mono text-slate-300 selection:bg-orange-500/30">
      <div className="w-full max-w-md text-center">
        
        {/* Animated Brand Tool Icon */}
        <div className="relative mx-auto mb-8 flex h-24 w-24 items-center justify-center">
          <motion.div 
            className="absolute inset-0 rounded-2xl border border-orange-500/20 bg-orange-500/5"
            animate={{ rotate: 12 }}
            transition={{ duration: 0.5 }}
          />
          <motion.div 
            className="absolute inset-0 rounded-2xl border border-orange-500/10 bg-transparent"
            animate={{ rotate: -8 }}
            transition={{ duration: 0.5 }}
          />
          <div className="relative text-orange-500">
            <svg className="h-10 w-10 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A1.5 1.5 0 0019.4 18.85l-5.83-5.83M11.42 15.17l2.43-2.43M11.42 15.17L3 6.75A1.5 1.5 0 015.15 4.6l8.42 8.42m0 0l2.43-2.43m-2.43 2.43l-.52.52M13.85 10.74L21 3.6m0 0l-1.44 5.76M21 3.6L15.24 5" />
            </svg>
          </div>
        </div>

        {/* Branding Headers */}
        <h1 className="text-3xl font-bold tracking-tight text-white font-sans">
          StartupForge
        </h1>
        <p className="mt-2 text-[10px] font-black tracking-[0.25em] text-orange-500 uppercase">
          Developer Console
        </p>

        {/* Dynamic Status Display Section */}
        <div className="mt-10 min-h-[40px]">
          <AnimatePresence mode="wait">
            {currentIndex < loadingStatuses.length ? (
              <motion.p
                key={currentIndex}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="italic text-sm text-slate-100 tracking-wide"
              >
                {loadingStatuses[currentIndex]}
              </motion.p>
            ) : (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-sm font-bold text-emerald-400 tracking-wide"
              >
                Console environment ready.
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Clean Accent Divider Line */}
        <div className="relative my-4 h-[2px] w-full bg-slate-800/80">
          <motion.div 
            className="absolute inset-y-0 left-0 bg-orange-500"
            initial={{ width: "0%" }}
            animate={{ width: `${(currentIndex / loadingStatuses.length) * 100}%` }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </div>

        {/* Historical Console Output Logs */}
        <div className="mx-auto max-w-xs rounded-xl bg-slate-900/40 border border-slate-900/60 p-4 text-left min-h-[120px]">
          <div className="space-y-2 text-xs text-slate-600">
            {history.map((log, index) => (
              <div key={index} className="flex items-start gap-2">
                <span className="text-orange-500/70 select-none font-bold">&gt;</span>
                <span>{log}</span>
              </div>
            ))}
            
            {/* Active loading item template structure in log window */}
            {currentIndex < loadingStatuses.length && (
              <div className="flex items-center gap-2 text-slate-400 font-medium">
                <span className="text-orange-500 font-bold animate-pulse">&gt;</span>
                <span>{loadingStatuses[currentIndex]}</span>
                <span className="inline-block h-3 w-1.5 bg-slate-400 animate-[blink_1s_infinite]" />
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}