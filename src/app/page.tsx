import Hero from "@/components/hero/Hero";
import Hero2 from "@/components/hero/Hero2";
import hero1 from "../../public/hero1.jpg";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero imgSrc={hero1} altImgSrc="Man posing in front of a motorbike">
        <div className="items-center flex flex-col">
          <h3 className="text-white text-xl font-medium m-0 p-0">NOW LIVE</h3>
          <h2 className="text-white text-4xl font-extrabold">
            notREPRESENT X METALLICA
          </h2>
        </div>
        <Link
          className="text-white text-base font-medium underline underline-offset-8"
          href="/metallica"
        >
          → SHOP NOW
        </Link>
      </Hero>
      <Hero2 imgSrc={hero1} altImgSrc="Man posing in front of a motorbike">
        <div className="items-center flex flex-col">
          <h3 className="text-white text-xl font-medium m-0 p-0">NOW LIVE</h3>
          <h2 className="text-white text-4xl font-extrabold">
            notREPRESENT X METALLICA
          </h2>
        </div>
        <Link
          className="text-white text-base font-medium underline underline-offset-8"
          href="/metallica"
        >
          → SHOP NOW
        </Link>
      </Hero2>
    </main>
  );
}
