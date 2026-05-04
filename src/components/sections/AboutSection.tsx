import about from "../../assets/about.png";
import { Button } from "../ui/Button";

export function AboutSection() {
  const handleOrderClick = () => {
    const menuSection = document.querySelector("#menu");
    menuSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-150 overflow-hidden" id="about">
      <div className="absolute inset-0">
        <img
          src={about}
          alt="Delicious Jollof Rice"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 h-full flex items-center  mt-8">
        <div className="max-w-lg ml-12 px-8 py-20">
          <div className="flex flex-col gap-10">
            <h1 className="font-display text-[#F5F5F5]  text-5xl font-semibold tracking-widest mb-4">
              About Us
            </h1>

            <h1 className="font-poppins text-2xl text-left  text-[#FFFFFF] leading-tight mb-4">
              At Krislaw Kitchen, we believe great food should be accessible,
              satisfying, and consistent. Whether you're grabbing a quick meal
              or ordering for work, we’re here to serve you meals that truly hit
              the spot.
            </h1>
          </div>

          <div className="opacity-0 animate-[fadeSlideUp_0.6s_ease_0.8s_forwards] mt-4">
            <Button size="lg" onClick={handleOrderClick}>
              Order Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
