"use client";
import { Google, GoogleIcon } from "@dev.icons/react";
import Image from "next/image";
import React, { useState } from "react";
import RegistrationImage from "@/assets/undraw_content-team_1p7b.png"
import { ArrowRight, Persons, Thunderbolt } from "@gravity-ui/icons";
import { Description, Radio, RadioGroup } from "@heroui/react";
export default function SignUpPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here

  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 p-4 font-sans antialiased selection:bg-indigo-500 selection:text-white">
      <div className="flex w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-xl">

        {/* Left Side: Branding Panel */}
        <div className="relative hidden w-1/2 flex-col justify-between bg-[#0e172c] p-12 text-white lg:flex">
          <div className="space-y-8">
            <h1 className="text-4xl font-bold leading-tight tracking-tight">
              Build the future with us.
            </h1>
            <p className="text-sm font-medium text-slate-400">
              Join a curated ecosystem of visionaries and high-performance builders. Your next big leap starts here.
            </p>

            <div className="mt-12 space-y-4">

              <div  >
                <Image src={RegistrationImage} alt="registration" className="rounded-3xl" />

              </div>

              <p className="italic text-xs text-slate-400 tracking-wide">"Forge your legacy."</p>
            </div>

            <div className="space-y-6 pt-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-800/80 border border-slate-700/50">

                  <Thunderbolt className="h-5 w-5 text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-base font-semibold">Launch faster</h3>
                  <p className="text-xs text-slate-400 mt-0.5">Verified founders get access to exclusive resource pools.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-800/80 border border-slate-700/50">

                  <Persons className="h-5 w-5 text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-base font-semibold">Global Network</h3>
                  <p className="text-xs text-slate-400 mt-0.5">Connect with expert collaborators across 40+ industries.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form Panel */}
        <div className="w-full p-8 sm:p-12 lg:w-1/2 bg-white">

          {/* Stepper Header */}
          <div className="mb-8 flex items-center justify-between text-xs font-semibold text-slate-500">
            <div className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#0e172c] text-[10px] text-white">1</span>
              <span className="text-slate-900">Identity</span>
            </div>
            <div className="h-[1px] flex-1 bg-slate-200 mx-4"></div>
            <div className="flex items-center gap-2 opacity-60">
              <span className="flex h-5 w-5 items-center justify-center rounded-full border border-slate-400 text-[10px]">2</span>
              <span>Role</span>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-2xl font-bold text-slate-900">Create Account</h2>
            <p className="text-xs text-slate-500 mt-1">Step 1: The essentials</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full rounded-lg border border-slate-200 bg-slate-50/50 px-3.5 py-2 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">Work Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@startup.com"
                className="w-full rounded-lg border border-slate-200 bg-slate-50/50 px-3.5 py-2 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">Select your Type</label>
              <RadioGroup defaultValue={"founder"}>
                <Radio value="founder" >
                  <Radio.Content>
                    <Radio.Control>
                      <Radio.Indicator />
                    </Radio.Control>
                    Founder
                  </Radio.Content>
                </Radio>

                <Radio value="collaborator">
                  <Radio.Content>
                    <Radio.Control>
                      <Radio.Indicator />

                    </Radio.Control>
                    Collaborator
                  </Radio.Content>
                </Radio>
              </RadioGroup>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full rounded-lg border border-slate-200 bg-slate-50/50 px-3.5 py-2 pr-10 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </button>
              </div>

              {/* Password Requirements UI */}
              <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-slate-500">
                <span className="flex items-center gap-1">
                  <svg className="h-3.5 w-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  8+ characters
                </span>
                <span className="flex items-center gap-1">
                  <svg className="h-3.5 w-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Upper & Lower case
                </span>
              </div>
            </div>

            {/* Profile Avatar Upload */}
            {/* <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">Profile Avatar</label>
              <div className="group relative flex flex-col items-center justify-center rounded-xl border border-dashed border-slate-300 bg-slate-50/30 px-6 py-5 text-center transition hover:bg-slate-50">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 group-hover:scale-105 transition duration-200">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="mt-2 text-xs font-semibold text-slate-700">Click to upload</p>
                <p className="mt-0.5 text-[10px] text-slate-400">PNG, JPG up to 5MB</p>
                <input type="file" accept="image/*" className="absolute inset-0 cursor-pointer opacity-0" />
              </div>
            </div> */}

            {/* Submit Button */}
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#0e172c] py-3 text-sm font-semibold text-white transition hover:bg-slate-800 active:scale-[0.99]"
            >
              Continue to Role
              <ArrowRight />
            </button>
          </form>

          {/* Separator Divider */}

        {/* Google OAuth Button */}
        <div>
          <div className="my-6 flex items-center justify-center">
            <div className="h-[1px] flex-1 bg-slate-200"></div>
            <span className="px-3 text-[10px] font-bold tracking-wider text-slate-400 uppercase">
              Or Email
            </span>
            <div className="h-[1px] flex-1 bg-slate-200"></div>
          </div>
        </div>
          <button
            type="button"
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 active:scale-[0.99]"
          >
            <GoogleIcon size={20} />
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
}