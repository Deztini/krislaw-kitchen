export type PlateSize = "Small Plate" | "Big Plate" | "Family Plate"

export interface MenuItem {
  id: string
  name: string
  price: number
  plateSize: PlateSize
  image: string
}