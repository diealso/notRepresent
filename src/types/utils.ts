import { StaticImageData } from "next/image";

export type currency = "€" | "$";

export type Product = {
  id: string;
  name: string | null;
  price: string | null;
  slug: string | null;
  img: string | null;
  imgAlt: string | null;
  colorInfo: string | null;
};
