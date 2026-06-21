import { Button } from "@heroui/react";

export default function CTASection() {
  return (
    <section className="bg-[#f8fafc] py-16 px-6 md:px-12 w-full flex justify-center">
      <div 
        className="max-w-6xl w-full bg-[#060c1a] rounded-[2.5rem] py-20 px-8 md:px-16 text-center relative overflow-hidden shadow-xl flex flex-col items-center justify-center border border-slate-800"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          backgroundPosition: "center"
        }}
      >
        {/* Glow Effect */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none"></div>
        
        {/* Content Container */}
        <div className="relative z-10 max-w-2xl flex flex-col items-center space-y-6">
          
          {/* Main Heading */}
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            Ready to Engineer the Future?
          </h2>
          
          {/* Description Text */}
          <p className="text-slate-400 text-base md:text-lg font-medium max-w-xl leading-relaxed">
            Whether you&apos;re a solo founder or an engineer looking for your next challenge, the Forge is open.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full sm:w-auto">
            <Button
              size="lg"
              className="bg-[#9c460c] hover:bg-[#80390a] text-white font-bold px-8 py-6 rounded-xl w-full sm:w-auto transition-colors duration-200"
            >
              Get Started Today
            </Button>
            <Button
              size="lg"
              variant="bordered"
              className="border-slate-700 hover:border-slate-500 text-white font-bold px-8 py-6 rounded-xl w-full sm:w-auto transition-colors duration-200"
            >
              Request a Demo
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}