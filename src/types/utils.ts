import { StaticImageData } from "next/image";

export type currency = "€" | "$";

export type Product = {
  imgSrc: StaticImageData;
  imgAlt: string;
  name: string;
  mainColor: string;
  amountColors: number;
  id: number;
  price: number;
  unit: currency;
};
