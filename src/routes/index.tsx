import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "../components/layout/Navbar";
import { HeroSection } from "../components/sections/HeroSection";
import { MenuSection } from "../components/sections/MenuSection";
import { AboutSection } from "../components/sections/AboutSection";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <>
    <div className="bg-[#FFFFFF]">
    <Navbar />
    <HeroSection />
    <MenuSection />
    <AboutSection />
    </div>
    </>
  );
}
