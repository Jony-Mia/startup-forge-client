import Hero from "../componet/Hero";
import FeaturedOpportunities from "@/componet/FeaturedOpportunities";
import { FeaturedStartups } from "@/componet/FeaturedStarrtup";
import StatisticsSection from "@/componet/StatisticsSection";
import CTASection from "@/componet/CTASection";

export default function Home() {
  
  return (
    <>
      <Hero />
      <StatisticsSection />
      <FeaturedStartups />
      <FeaturedOpportunities />
      <CTASection />

    </>
  );
}