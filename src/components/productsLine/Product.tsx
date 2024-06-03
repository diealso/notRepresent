import { Product as ProductT } from "@/types/utils";
import Image from "next/image";

const Product = ({ productData }: { productData: ProductT }) => {
  return (
    <div className="flex min-w-[20%] max-w-[20%] flex-1 flex-col">
      <Image
        className="pointer-events-none w-full"
        width={200}
        height={200}
        src={`/products/${productData.slug}/${productData.img}`}
        alt={productData.imgAlt!}
      />
      <div className="flex flex-col items-center justify-center py-4 align-middle">
        <span className="text-center uppercase">{productData.name}</span>
        <div className="flex flex-col items-center justify-center gap-1 pt-3 align-middle">
          <span className="text-gray-500">{productData.colorInfo}</span>
          <span className="text-gray-500">{productData.price} €</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
