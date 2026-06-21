"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function InternalErrorPage() {
  const handleRetry = () => {
    window.location.reload();
  };

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans antialiased">
      
      {/* Main Error Content Section */}
      <div className="flex flex-1 flex-col items-center justify-center px-6 py-16 text-center">
        <div className="w-full max-w-xl">
          
          {/* Logo Branding */}
          <motion.h1 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-2xl font-bold tracking-tight text-slate-900"
          >
            StartupForge
          </motion.h1>

          {/* Warning Icon Graphic */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.4, type: "spring", stiffness: 100 }}
            className="mx-auto my-6 flex h-14 w-14 items-center justify-center text-orange-600"
          >
            <svg className="h-12 w-12 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
            </svg>
          </motion.div>

          {/* Header Description */}
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl"
          >
            System Level Anomaly
          </motion.h2>

          {/* Context Messages */}
          <motion.div 
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="mt-4 space-y-1 text-sm font-medium leading-relaxed text-slate-500"
          >
            <p>A technical glitch has interrupted our engineering workflow.</p>
            <p>We've logged the incident and our team is already troubleshooting the circuit.</p>
          </motion.div>

          {/* Diagnostic Error Code Badge */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="mt-6"
          >
            <span className="inline-flex items-center rounded-md bg-orange-50 px-3 py-1.5 text-xs font-bold text-orange-700 border border-orange-100/60 font-mono tracking-wide">
              Error Code: <span className="ml-1 text-orange-600">SF-500-INTERNAL_SERVER_STALL</span>
            </span>
          </motion.div>

          {/* Dynamic Action Buttons Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <button
              onClick={handleRetry}
              type="button"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-2.5 text-xs font-bold text-white transition hover:bg-orange-600 active:scale-[0.99] sm:w-auto shadow-sm shadow-orange-500/10"
            >
              <svg className="h-3.5 w-3.5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
              </svg>
              Retry Operation
            </button>

            <Link
              href="/support"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#0e172c] px-5 py-2.5 text-xs font-bold text-white transition hover:bg-slate-800 active:scale-[0.99] sm:w-auto"
            >
              <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M21.393 12.112c-.395-.36-.922-.562-1.481-.562h-.425v-1.125c0-3.324-2.511-6.195-5.83-6.411A6.377 6.377 0 006.75 10.388v1.162h-.425c-.56 0-1.086.202-1.481.562A2.057 2.057 0 004.25 13.5v2.25c0 .546.216 1.06.6 1.425.394.36.921.563 1.48.563h1.42c1.103 0 2-.897 2-2V13.5c0-1.103-.897-2-2-2h-.5v-1.112c0-2.619 2.13-4.75 4.75-4.75s4.75 2.131 4.75 4.75v1.112h-.5c-1.103 0-2 .897-2 2v2.238c0 1.103.897 2 2 2h1.42c.56 0 1.086-.203 1.48-.563.385-.365.6-.879.6-1.425v-2.25a2.057 2.057 0 00-.594-1.388z" />
              </svg>
              Contact Support
            </Link>
          </motion.div>

        </div>
      </div>
    </div>
  );
}