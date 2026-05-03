import type { MenuItem } from "../../types";
import menuBg from "../../assets/menuBg.png";
import { Button } from "./Button";

interface MenuCardProps {
  item: MenuItem;
}

export function MenuCard({ item }: MenuCardProps) {
  return (
    <div className="relative h-90 rounded-xl overflow-hidden">

      <img
        src={menuBg}
        alt="Menu background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
        <img
          src={item.image}
          alt={item.name}
          className="w-100 h-60 object-contain drop-shadow-xl"
        />
      </div>


      <div className="absolute bottom-4 left-4 right-4 z-10">

        <div className="flex justify-between items-center mb-2">
          <span className="text-[#FFFFFF] text-2xl font-semibold font-poppins">
            ₦{item.price.toLocaleString()}
          </span>
          <span className=" text-[#F5F5F5] font-poppins">
            {item.plateSize}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <p className="text-[#FFFFFF] text-xl font-poppins leading-tight max-w-[40%]">
            {item.name}
          </p>
          <Button size="sm">Get</Button>
        </div>

      </div>
    </div>
  )
}

