import NoracParallax from "@/components/norac-parallax";
import { Nav } from "@/components/nav";
import VisionSection from "@/components/sections/vision-section";
import MilestonesSection from "@/components/sections/milestones-section";
import PortfolioSection from "@/components/sections/portfolio-section";
import { FeaturedListingsSection } from "@/components/sections/featured-listings-section";
import ContactSection from "@/components/sections/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen text-foreground overflow-x-hidden bg-background transition-colors duration-500">
      <Nav />
      {/* Hero Section */}
      <NoracParallax />

      {/* Real Estate Featured Listings (Moved up) */}
      <FeaturedListingsSection />

      {/* Vision Section (Parallax Scroll) */}
      <VisionSection />

      {/* Milestones & Leadership */}
      <MilestonesSection />

      {/* Premium Real Estate Listings */}
      <PortfolioSection />

      {/* Contact & Global Offices */}
      <ContactSection />

      <Footer />
    </main>
  );
}
