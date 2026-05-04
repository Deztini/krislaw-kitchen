import type { MenuItem } from "../types";
import basmati from "../assets/basmati-rice.png";
import familyJollof from "../assets/jollof-family.png";
import jollof from "../assets/jollof-img.png"

export const menuItems: MenuItem[] = [
  {
    id: "1",
    name: "Jollof Rice and Chicken",
    price: 2000,
    plateSize: "Big Plate",
    image: jollof,
  },
  {
    id: "2",
    name: "Jollof Rice and Chicken",
    price: 1500,
    plateSize: "Small Plate",
    image: jollof,
  },
  {
    id: "3",
    name: "Jollof Rice and Chicken",
    price: 2000,
    plateSize: "Big Plate",
    image: jollof,
  },
  {
    id: "4",
    name: "Jollof Rice and Chicken",
    price: 6000,
    plateSize: "Family Plate",
    image: familyJollof,
  },
  {
    id: "5",
    name: "Jollof Rice and Chicken",
    price: 6000,
    plateSize: "Family Plate",
    image: familyJollof,
  },
  {
    id: "6",
    name: "Basmati Jollof Rice",
    price: 2000,
    plateSize: "Big Plate",
    image: basmati,
  },
];
