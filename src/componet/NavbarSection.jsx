"use client";

import { Bars } from "@gravity-ui/icons";
import { Button, Dropdown } from "@heroui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavbarSection() {
  let path = usePathname();

  return (
    <header className="w-full bg-white px-6 py-4 shadow-sm border-b border-gray-100">
      <div className="mx-auto flex max-w-7xl items-center justify-between">

        {/* Left Side: Brand and Navigation Links */}
        <div className="flex items-center gap-8">
          <div className="block lg:hidden">
            <Dropdown>
              <Dropdown.Trigger className={"border p-2 rounded-2xl"} >
                <Bars />
              </Dropdown.Trigger>
              <Dropdown.Popover>
                <Dropdown.Menu>
                  <Dropdown.Item href="/">
                    Home
                  </Dropdown.Item>
                  <Dropdown.Item href="/browse">
                    Browse
                  </Dropdown.Item>
                  <Dropdown.Item href="/opportunities">
                    Opportunities
                  </Dropdown.Item>
                  <Dropdown.Item href="/add">
                    Add Opportunities
                  </Dropdown.Item>
                  <Dropdown.Item href="/privacy">
                   Privacy
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown.Popover>
            </Dropdown>
          </div>

          <Link href="/" className="text-2xl font-bold tracking-tight text-slate-950">
            StartupForge
          </Link>

          <nav className="hidden md:hidden items-center gap-6 lg:flex">
            <Link
              href="/"
              className={`text-xs font-semibold ${path === "/" ? "text-indigo-600" : ""} transition hover:text-indigo-700`}
            >
              Home
            </Link>
            <Link
              href="/browse"
              className={`text-xs font-semibold ${path === "/browse" ? "text-indigo-600" : ""} transition hover:text-indigo-700`}
            >
              Browse Startups
            </Link>
            <Link
              href="/opportunities"
              className={`text-xs font-semibold ${path === "/opportunities" ? "text-indigo-600" : ""} transition hover:text-indigo-700`}
            >
              Browse Opportunities
            </Link>
            <Link
              href="/add"
              className={`text-xs font-semibold ${path === "/add" ? "text-indigo-600" : ""} transition hover:text-indigo-700`}
            >
              Add Opportunities
            </Link>
            <Link
              href="/privacy"
              className={`text-xs font-semibold ${path === "/privacy" ? "text-indigo-600" : ""} transition hover:text-indigo-700`}
            >
              Privacy
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