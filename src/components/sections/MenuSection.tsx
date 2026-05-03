import { menuItems } from "../../data/MenuItems";
import { MenuCard } from "../ui/MenuCard";

export function MenuSection() {
  return (
    <section className="mt-30 px-8 mb-18" id="menu">
      <div className="flex flex-col justify-center items-center gap-6">
        <h1 className="font-display text-[#111111] text-6xl">Our Menu</h1>
        <p className="font-poppins font-semibold text-[#1E1E1E] text-2xl">
          Delicious Meals made fresh for you
        </p>
      </div>

      <div className="flex justify-center my-10 ">
        <hr className="border-[#D9D9D9]  w-[85%]" />
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {menuItems.map((item) => (
          <MenuCard item={item} />
        ))}
      </div>
    </section>
  );
}
