"use client";

import React, { useState } from "react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { Button, Input } from "@heroui/react";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let { data, error } = await authClient.signIn.email({
      email: formData.email,
      password: formData.password,
      rememberMe: formData.rememberMe,
      callbackURL: "/"
    })
    console.log(data, error)
    // Handle login submission logic here
  };
  const continueWithGoogle = async () => {
    let { data, error } = await authClient.signIn.social({
      provider: "google",
      callbackURL: "/"
    })
    console.log(data, error);

  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50 p-4 font-sans antialiased">
      {/* Login Card Wrapper */}
      <div className="w-full max-w-md rounded-2xl border border-slate-100 bg-white p-8 shadow-sm">

        {/* Header Titles */}
        <div className="mb-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            Welcome Back
          </h2>
          <p className="mt-1.5 text-xs font-medium text-slate-500">
            Access your industrial-modern ecosystem.
          </p>
        </div>

        {/* Google OAuth Button */}
        <Button
          onClick={continueWithGoogle}
          type="button"
          className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 active:scale-[0.99]"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24">
            <path
              fill="#EA4335"
              d="M12.24 10.285V14.4h6.887c-.275 1.565-1.88 4.604-6.887 4.604-4.33 0-7.866-3.577-7.866-8s3.536-8 7.866-8c2.46 0 4.105 1.025 5.047 1.926l3.227-3.107C18.29 1.91 15.54 1 12.24 1 6.13 1 1.15 5.93 1.15 12s4.98 11 11.09 11c6.38 0 10.62-4.43 10.62-10.68 0-.72-.08-1.27-.18-1.725H12.24z"
            />
          </svg>
          Continue with Google
        </Button>

        {/* Separator Divider */}
        <div className="my-6 flex items-center justify-center">
          <div className="h-[1px] flex-1 bg-slate-200"></div>
          <span className="px-3 text-[10px] font-bold tracking-wider text-slate-400 uppercase">
            Or Email
          </span>
          <div className="h-[1px] flex-1 bg-slate-200"></div>
        </div>

        {/* Credentials Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Email Address
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L22 8m-9 11h-3a2 2 0 01-2-2V7a2 2 0 012-2h6a2 2 0 012 2v10a2 2 0 01-2 2z" />
                </svg>
              </span>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="founder@startupforge.com"
                className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                required
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="block text-xs font-bold text-slate-700">
                Password
              </label>
              <Link
                href="/forgot-password"
                className="text-xs font-medium text-slate-400 transition hover:text-slate-600"
              >
                Forgot Password?
              </Link>
            </div>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </span>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-10 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
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
          </div>

          {/* Remember Me Option */}
          <div className="flex items-center pt-1">
            <input
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
              className="h-4 w-4 rounded border-slate-300 text-orange-500 focus:ring-orange-500"
            />
            <label htmlFor="rememberMe" className="ml-2 text-xs font-medium text-slate-500 select-none">
              Remember me for 30 days
            </label>
          </div>

          {/* Submit Action Button */}
          <button
            type="submit"
            className="w-full rounded-xl bg-orange-500 py-3 text-sm font-bold text-white transition hover:bg-orange-600 active:scale-[0.99] shadow-sm shadow-orange-500/10"
          >
            Login to Dashboard
          </button>
        </form>

        {/* Alternative Registration CTA */}
        <div className="mt-6 text-center text-xs font-medium text-slate-500">
          Don't have an account?{" "}
          <Link href="/signup" className="font-bold text-orange-600 transition hover:text-orange-700">
            Sign Up Free
          </Link>
        </div>
      </div>

      {/* Trust and Assurance Badges */}
      <div className="mt-6 flex items-center gap-6 text-[10px] font-bold tracking-wider text-slate-400 uppercase">
        <div className="flex items-center gap-1.5">
          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          Enterprise Secure
        </div>
        <div className="flex items-center gap-1.5">
          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
          </svg>
          Real-Time Sync
        </div>
      </div>
    </div>
  );
}