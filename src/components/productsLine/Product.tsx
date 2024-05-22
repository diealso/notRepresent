import { Product as ProductT } from "@/types/utils";
import Image from "next/image";

const Product = ({ productData }: { productData: ProductT }) => {
  return (
    <div className="flex flex-col flex-1 min-w-[20%] max-w-[20%]">
      <Image
        className="w-full pointer-events-none"
        width={200}
        height={200}
        src={`/products/${productData.slug}/${productData.img}`}
        alt={productData.imgAlt!}
      />
      <div className="flex flex-col align-middle justify-center items-center py-4">
        <span className="text-center uppercase">{productData.name}</span>
        <div className="pt-3 gap-1 flex flex-col align-middle justify-center items-center">
          <span className="text-gray-500">{productData.colorInfo}</span>
          <span className="text-gray-500">{productData.price} €</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
