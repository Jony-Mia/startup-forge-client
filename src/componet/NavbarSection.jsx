"use client";

import { authClient, useSession } from "@/lib/auth-client";
import { Bars } from "@gravity-ui/icons";
import { Button, Dropdown } from "@heroui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Avatar from "@/assets/avatar_male.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import Logo from "@/assets/FullLogo_Transparent.png"
export default function NavbarSection() {
  let [userData, setUserData] = useState(null);
  let path = usePathname();
  let { data } = useSession()
  let user = data?.user;

  useEffect(() => {
    setUserData(user)
  }, [user])
  let logout = async () => await authClient.signOut();

  return (
    <header className="w-full bg-white px-6 py-4 shadow-sm border-b border-gray-100">
      <div className="mx-auto flex max-w-7xl items-center justify-between">

        {/* Left Side: Brand and Navigation Links */}
        <div className="flex items-center gap-8">
          <div className="flex items-center lg:hidden">
            <div>
              <Dropdown>
                <Dropdown.Trigger className={"border h-auto p-2 rounded-2xl"} >
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
                    {
                      userData && (
                        <Dropdown.Item href="/dashboard" >
                          Dashboard
                        </Dropdown.Item>
                      )
                    }
                  </Dropdown.Menu>
                </Dropdown.Popover>
              </Dropdown>
            </div>

            <Link href="/" className="text-2xl font-bold tracking-tight text-slate-950">
              <Image width="80" height="80" src={Logo} alt="startup forge" />
            </Link>
          </div>



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
            {
              userData && (
                <Link
                  href="/add"
                  className={`text-xs font-semibold ${path === "/add" ? "text-indigo-600" : ""} transition hover:text-indigo-700`}
                >
                  Add Opportunities
                </Link>
              )
            }
            <Link
              href="/privacy"
              className={`text-xs font-semibold ${path === "/privacy" ? "text-indigo-600" : ""} transition hover:text-indigo-700`}
            >
              Privacy
            </Link>
          </nav>
        </div>

        {/* Right Side: Authentication Buttons */}
        {
          userData ?
            <Dropdown>
              <Dropdown.Trigger>
                <div className="flex gap-3 items-center">
                  <div>
                    {userData?.image ?
                      <img src={userData.image} className="rounded-full " alt="user profile image" width="40" height="40" /> :
                      <Image src={Avatar} alt="user profile avatar" width="50" />

                    }
                  </div>
                  <div className="flex flex-col">
                    <span>{userData.name}</span>
                    <small>{userData.email}</small>
                  </div>
                </div>
              </Dropdown.Trigger>
              <Dropdown.Popover>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={logout} >
                    Log out
                  </Dropdown.Item>
                  <Dropdown.Item href="/dashboard">
                    Dashboard
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown.Popover>
            </Dropdown>

            :
            <div className="flex items-center gap-4">
              <Link
                href="/login"
                className="text-xs font-bold text-orange-600 transition hover:text-orange-700"
              >
                <Button className="hidden lg:block" variant="outline">
                  Login
                </Button>
              </Link>
              <Link href="/signup" >
                <Button variant="ghost" className="bg-orange-500 px-4 py-2 text-white">
                  Sign Up
                </Button>
              </Link>
            </div>
        }
      </div>
    </header>
  );
}