import { Button } from "@heroui/react";
import Link from "next/link";

export function FooterSection() {
  return (
    <footer className="bg-[#eef1f6] py-8 px-6 md:px-12 w-full flex justify-center border-t border-slate-200/60 font-sans">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        
        {/* Left Column: Brand & Copyright */}
        <div className="flex flex-col space-y-1">
          <h2 className="text-xl font-bold text-slate-900 tracking-tight">
            StartupForge
          </h2>
          <p className="text-sm text-slate-600 font-medium">
            &copy; 2024 StartupForge. Engineering the future.
          </p>
        </div>

        {/* Right Column: Navigation Links & Action Buttons */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-6 lg:gap-12 w-full lg:w-auto justify-between lg:justify-end">
          
          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-semibold text-slate-600">
            <Link href="#" className="hover:text-slate-900 transition-colors duration-150">
              About Us
            </Link>
            <Link href="#" className="hover:text-slate-900 transition-colors duration-150">
              Contact Support
            </Link>
            <Link href="#" className="hover:text-slate-900 transition-colors duration-150">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-slate-900 transition-colors duration-150">
              Terms of Service
            </Link>
          </nav>

          {/* Utility Icon Buttons */}
          <div className="flex items-center gap-3">
            <Button
              isIconOnly
              radius="full"
              variant="flat"
              className="bg-slate-200 hover:bg-slate-300 text-slate-600 min-w-10 w-10 h-10 transition-colors duration-150"
              aria-label="Select Language"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
            </Button>
            
            <Button
              isIconOnly
              radius="full"
              variant="flat"
              className="bg-slate-200 hover:bg-slate-300 text-slate-600 min-w-10 w-10 h-10 transition-colors duration-150"
              aria-label="Share Page"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="18" cy="5" r="3"></circle>
                <circle cx="6" cy="12" r="3"></circle>
                <circle cx="18" cy="19" r="3"></circle>
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
              </svg>
            </Button>
          </div>

        </div>

      </div>
    </footer>
  );
}