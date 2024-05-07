import { Product as ProductT } from "@/types/utils";
import Product from "./Product";

const getProducts = () => {
  const products = fetch();
  return products;
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
