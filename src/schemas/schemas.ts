import { pgTable, text, decimal } from "drizzle-orm/pg-core";

export const products = pgTable("products", {
  id: text("id").primaryKey(),
  name: text("name"),
  price: decimal("price"),
  slug: text("slug"),
  mainImg: text("mainImg"),
  imgAlt: text("imgAlt"),
  colorInfo: text("colorInfo"),
});

export const product_images = pgTable("product_images", {
  id: text("id").primaryKey(),
  product_slug: text("product_slug"),
  img: text("img"),
});
