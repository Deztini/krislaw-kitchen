import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "../components/layout/Navbar";
import { HeroSection } from "../components/sections/HeroSection";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <>
    <Navbar />
    <HeroSection />
    </>
  );
}
