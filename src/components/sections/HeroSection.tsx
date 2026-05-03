import { Button } from "../ui/Button";
import hero from "../../assets/HeroImg.png";

export function HeroSection() {
  const handleOrderClick = () => {
    const menuSection = document.querySelector("#menu");
    menuSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full h-screen min-h-150 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={hero}
          alt="Delicious Jollof Rice"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 h-full flex items-center mt-8">
        <div className="max-w-6xl mx-auto  w-full">
          <div className="max-w-xl">
            <p className="font-poppins text-[#FFFBF6] text-2xl font-medium tracking-widest mb-4 opacity-0 animate-[fadeSlideUp_0.6s_ease_0.2s_forwards]">
              Your Go-To Spot for Tasty Foods
            </p>

            <h1
              className="font-display italic text-[#F5F5F5] leading-tight mb-4 opacity-0 animate-[fadeSlideUp_0.6s_ease_0.4s_forwards]"
              style={{ fontSize: "clamp(2rem, 6vw, 5rem)" }}
            >
              KrisLaw Kitchen
            </h1>

            <p
              className="font-display italic text-[#F5F5F5] mb-8 opacity-0 animate-[fadeSlideUp_0.6s_ease_0.6s_forwards]"
              style={{ fontSize: "clamp(1.5rem, 2.5vw, 1.8rem)" }}
            >
              The Taste You Trust
            </p>

            <div className="opacity-0 animate-[fadeSlideUp_0.6s_ease_0.8s_forwards]">
              <Button size="lg" onClick={handleOrderClick}>
                Order Now
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-60">
        <span className="font-sans text-white text-xs tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-px h-8 bg-white/50 animate-pulse" />
      </div>
    </section>
  );
}
