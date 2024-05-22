import Hero from "@/components/hero/Hero";
import hero1 from "../../public/hero1.jpg";
import hero2 from "../../public/hero2.webp";
import Link from "next/link";
import ProductsLine from "@/components/productsLine/ProductsLine";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero imgSrc={hero1} altImgSrc="Man posing in front of a motorbike">
        <div className="items-center flex flex-col">
          <h3 className="text-white text-xl font-medium m-0 pb-1">NOW LIVE</h3>
          <h2 className="text-white text-4xl font-extrabold">
            notREPRESENT X METALLICA
          </h2>
        </div>
        <Link
          className="text-white text-base font-medium group relative"
          href="/metallica"
        >
          →{" "}
          <span className="transition-all ease-in-out duration-500 pl-2">
            SHOP NOW
          </span>
          <div className="absolute bottom-0 w-full border-b-[1px] border-white group-hover:animate-button_underline pointer-events-none" />
        </Link>
      </Hero>
      <ProductsLine collection="metallica-collection" />
      <Hero imgSrc={hero2} altImgSrc="Multiple people posing">
        <div className="items-center flex flex-col">
          <h3 className="text-white text-xl font-medium m-0 pb-1">NOW LIVE</h3>
          <h2 className="text-white text-4xl font-extrabold">
            notREPRESENT X METALLICA
          </h2>
        </div>
        <Link
          className="text-white text-base font-medium group relative"
          href="/metallica"
        >
          →{" "}
          <span className="transition-all ease-in-out duration-500 pl-2">
            SHOP NOW
          </span>
          <div className="absolute bottom-0 w-full border-b-[1px] border-white group-hover:animate-button_underline pointer-events-none" />
        </Link>
      </Hero>
      <ProductsLine collection="new-arrivals" />
    </main>
  );
}
