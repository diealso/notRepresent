import { pgTable, text, decimal, date, integer } from "drizzle-orm/pg-core";

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

export const products_sizes = pgTable("products_sizes", {
  id: text("id").primaryKey(),
  product_slug: text("product_slug"),
  size_name: text("size_name"),
  quantity: integer("quantity"),
  initial_quantity: integer("initial_quantity"),
});

export const sizes = pgTable("sizes", {
  id: text("id").primaryKey(),
  name: text("name"),
});

export const collections = pgTable("collections", {
  id: text("id").primaryKey(),
  slug: text("slug"),
});

export const collections_products = pgTable("collections_products", {
  id: text("id").primaryKey(),
  product_slug: text("product_slug"),
  collection_slug: text("collection_slug"),
});

export const users = pgTable("users", {
  id: text("id").primaryKey(),
  role: text("role"),
  email: text("email"),
  lastLogin: date("lastLogin"),
  loginId: text("loginId"),
});
