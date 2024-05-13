import { Product as ProductT } from "@/types/utils";
import Image from "next/image";

const Product = ({ productData }: { productData: ProductT }) => {
  return (
    <div className="flex flex-col flex-1">
      <Image
        className="w-full"
        width={200}
        height={200}
        src={`/products/${productData.slug}/${productData.img}`}
        alt={productData.imgAlt!}
      />
      <span>{productData.name}</span>
      <span>{productData.colorInfo}</span>
      <span>{productData.price}</span>
    </div>
  );
};

export default Product;
