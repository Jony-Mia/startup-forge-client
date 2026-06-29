import { Button } from "@heroui/react";
import Link from "next/link";

export function FooterSection() {
  // return (
  //   <footer className="bg-[#eef1f6] py-8 px-6 md:px-12 w-full flex justify-center border-t border-slate-200/60 font-sans">
  //     <div className="max-w-7xl w-full flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        
  //       {/* Left Column: Brand & Copyright */}
  //       <div className="flex flex-col space-y-1">
  //         <h2 className="text-xl font-bold text-slate-900 tracking-tight">
  //           StartupForge
  //         </h2>
  //         <p className="text-sm text-slate-600 font-medium">
  //           &copy; 2024 StartupForge. Engineering the future.
  //         </p>
  //       </div>

  //       {/* Right Column: Navigation Links & Action Buttons */}
  //       <div className="flex flex-col sm:flex-row sm:items-center gap-6 lg:gap-12 w-full lg:w-auto justify-between lg:justify-end">
          
  //         {/* Navigation Links */}
  //         <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-semibold text-slate-600">
  //           <Link href="#" className="hover:text-slate-900 transition-colors duration-150">
  //             About Us
  //           </Link>
  //           <Link href="#" className="hover:text-slate-900 transition-colors duration-150">
  //             Contact Support
  //           </Link>
  //           <Link href="#" className="hover:text-slate-900 transition-colors duration-150">
  //             Privacy Policy
  //           </Link>
  //           <Link href="#" className="hover:text-slate-900 transition-colors duration-150">
  //             Terms of Service
  //           </Link>
  //         </nav>

  //         {/* Utility Icon Buttons */}
  //         <div className="flex items-center gap-3">
  //           <Button
  //             isIconOnly
  //             radius="full"
  //             variant="flat"
  //             className="bg-slate-200 hover:bg-slate-300 text-slate-600 min-w-10 w-10 h-10 transition-colors duration-150"
  //             aria-label="Select Language"
  //           >
  //             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  //               <circle cx="12" cy="12" r="10"></circle>
  //               <line x1="2" y1="12" x2="22" y2="12"></line>
  //               <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
  //             </svg>
  //           </Button>
            
  //           <Button
  //             isIconOnly
  //             radius="full"
  //             variant="flat"
  //             className="bg-slate-200 hover:bg-slate-300 text-slate-600 min-w-10 w-10 h-10 transition-colors duration-150"
  //             aria-label="Share Page"
  //           >
  //             <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
  //               <circle cx="18" cy="5" r="3"></circle>
  //               <circle cx="6" cy="12" r="3"></circle>
  //               <circle cx="18" cy="19" r="3"></circle>
  //               <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
  //               <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
  //             </svg>
  //           </Button>
  //         </div>

  //       </div>

  //     </div>
  //   </footer>
  // );

  return (
    <footer className="bg-[#e6ecf8] text-[#2d3748] px-6 py-12 md:px-16 lg:px-24 font-sans rounded-b-2xl">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 pb-8">
        
        {/* Brand Information Column */}
        <div className="md:col-span-6 flex flex-col space-y-4">
          <h2 className="text-3xl font-bold text-[#a04000]">
            StartupForge
          </h2>
          <p className="text-gray-600 max-w-sm text-base leading-relaxed">
            Engineering the future through premium collaboration and industrial innovation.
          </p>
        </div>

        {/* Links Columns Container */}
        <div className="md:col-span-6 grid grid-cols-3 gap-4">
          
          {/* Platform Column */}
          <div className="flex flex-col space-y-3">
            <h3 className="font-bold text-gray-900 text-sm tracking-wider">Platform</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/" className="hover:text-gray-900 transition-colors">Home</Link></li>
              <li><Link href="/browse" className="hover:text-gray-900 transition-colors">Browse Startups</Link></li>
              <li><Link href="/opportunities" className="hover:text-gray-900 transition-colors">Opportunities</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="flex flex-col space-y-3">
            <h3 className="font-bold text-gray-900 text-sm tracking-wider">Company</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/about" className="hover:text-gray-900 transition-colors">About Us</Link></li>
              <li><Link href="/support" className="hover:text-gray-900 transition-colors">Contact Support</Link></li>
              <li><Link href="/privacy" className="hover:text-gray-900 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Social Column */}
          <div className="flex flex-col space-y-3">
            <h3 className="font-bold text-gray-900 text-sm tracking-wider">Social</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">Twitter</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">LinkedIn</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">Instagram</a></li>
            </ul>
          </div>

        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 max-w-7xl mx-auto my-4"></div>

      {/* Footer Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-4 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 space-y-4 md:space-y-0">
        <div>
          &copy; 2024 StartupForge. Engineering the future.
        </div>
        <div className="flex space-x-6">
          <Link href="/terms" className="hover:text-gray-900 transition-colors">Terms of Service</Link>
          <Link href="/cookies" className="hover:text-gray-900 transition-colors">Cookie Policy</Link>
        </div>
      </div>
    </footer>
    
  );
}