"use client";

import Link from "next/link";

export default function NavbarSection() {
  return (
    <header className="w-full bg-white px-6 py-4 shadow-sm border-b border-gray-100">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        
        {/* Left Side: Brand and Navigation Links */}
        <div className="flex items-center gap-8">
          <Link href="/" className="text-2xl font-bold tracking-tight text-slate-950">
            StartupForge
          </Link>
          
          <nav className="hidden items-center gap-6 md:flex">
            <Link 
              href="/" 
              className="text-xs font-semibold text-indigo-600 transition hover:text-indigo-700"
            >
              Home
            </Link>
            <Link 
              href="/startups" 
              className="text-xs font-semibold text-slate-600 transition hover:text-slate-900"
            >
              Browse Startups
            </Link>
            <Link 
              href="/opportunities" 
              className="text-xs font-semibold text-slate-600 transition hover:text-slate-900"
            >
              Browse Opportunities
            </Link>
          </nav>
        </div>

        {/* Right Side: Authentication Buttons */}
        <div className="flex items-center gap-4">
          <Link 
            href="/login" 
            className="text-xs font-bold text-orange-600 transition hover:text-orange-700"
          >
            Login
          </Link>
          <Link 
            href="/signup" 
            className="rounded-lg bg-orange-500 px-4 py-2 text-xs font-bold text-white transition hover:bg-orange-600 active:scale-[0.98]"
          >
            Sign Up
          </Link>
        </div>

      </div>
    </header>
  );
}