import { Product as ProductT } from "@/types/utils";
import Product from "./Product";

import { drizzle } from "@xata.io/drizzle";
import { eq } from "drizzle-orm";
// Generated with CLI
import { getXataClient } from "@/./xata";

import {
  products as productSchema,
  product_images as productsImagesSchema,
} from "@/schemas/schemas";

const getProducts = async () => {
  const xata = getXataClient();

  const db = drizzle(xata);

  const record = await db
    .select({
      id: productSchema.id,
      name: productSchema.name,
      price: productSchema.price,
      slug: productSchema.slug,
      img: productSchema.mainImg,
      imgAlt: productSchema.imgAlt,
      colorInfo: productSchema.colorInfo,
    })
    .from(productSchema)
    .execute();

  return record;
};

const ProductsLine = async ({ ...props }) => {
  const products: ProductT[] = await getProducts();
  return (
    <div className="flex flex-row flex-nowrap gap-0 overflow-x-scroll">
      {products.map((product) => {
        return <Product key={product.id} productData={product} />;
      })}
    </div>
  );
};

export default ProductsLine;
