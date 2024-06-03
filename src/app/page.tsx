import Hero from "@/components/hero/Hero";
import hero1 from "../../public/hero1.jpg";
import hero2 from "../../public/hero2.webp";
import Link from "next/link";
import ProductsLine from "@/components/productsLine/ProductsLine";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero imgSrc={hero1} altImgSrc="Man posing in front of a motorbike">
        <div className="flex flex-col items-center">
          <h3 className="m-0 pb-1 text-xl font-medium text-white">NOW LIVE</h3>
          <h2 className="text-4xl font-extrabold text-white">
            notREPRESENT X METALLICA
          </h2>
        </div>
        <Link
          className="group relative text-base font-medium text-white"
          href="/metallica"
        >
          →{" "}
          <span className="pl-2 transition-all duration-500 ease-in-out">
            SHOP NOW
          </span>
          <div className="pointer-events-none absolute bottom-0 w-full border-b-[1px] border-white group-hover:animate-button_underline" />
        </Link>
      </Hero>
      <ProductsLine collection="metallica-collection" />

      <Hero imgSrc={hero2} altImgSrc="Multiple people posing">
        <div className="flex flex-col items-center">
          <h3 className="m-0 pb-1 text-xl font-medium text-white">NOW LIVE</h3>
          <h2 className="text-4xl font-extrabold text-white">
            notREPRESENT X METALLICA
          </h2>
        </div>
        <Link
          className="group relative text-base font-medium text-white"
          href="/metallica"
        >
          →{" "}
          <span className="pl-2 transition-all duration-500 ease-in-out">
            SHOP NOW
          </span>
          <div className="pointer-events-none absolute bottom-0 w-full border-b-[1px] border-white group-hover:animate-button_underline" />
        </Link>
      </Hero>
      <ProductsLine collection="new-arrivals" />
    </main>
  );
}
