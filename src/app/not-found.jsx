"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#070b14] px-6 text-center font-sans antialiased">
      <div className="w-full max-w-md">
        
        {/* Animated Big 404 Header */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-8xl font-black tracking-tight text-orange-400 sm:text-9xl selection:bg-orange-500/20"
        >
          404
        </motion.h1>

        {/* Message */}
        <motion.p 
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.4 }}
          className="mt-6 text-sm font-semibold tracking-wide text-white"
        >
          The assembly path you requested does not exist.
        </motion.p>

        {/* Home Navigation Button */}
        <motion.div 
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="mt-8"
        >
          <Link 
            href="/"
            className="inline-flex items-center gap-2 rounded-lg bg-orange-400/90 px-5 py-2.5 text-xs font-bold text-[#070b14] transition shadow-lg shadow-orange-500/5 hover:bg-orange-400 active:scale-[0.98]"
          >
            <svg className="h-4 w-4 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Back to Home
          </Link>
        </motion.div>

        {/* Footer Brand Info */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.25 }}
          transition={{ delay: 0.45, duration: 0.5 }}
          className="mt-16 flex items-center justify-center gap-2 font-mono text-[10px] font-bold uppercase tracking-widest text-slate-400"
        >
          <span>StartupForge</span>
          <span className="h-3 w-[1px] bg-slate-500" />
          <span>404 Exception</span>
        </motion.div>

      </div>
    </div>
  );
}