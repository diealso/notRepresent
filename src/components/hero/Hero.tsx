import { cn } from "@/lib/utils";
import Image from "next/image";
import { HTMLAttributes } from "react";

interface IHero extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
  altImgSrc: string;
}

const Hero = ({ imgSrc, altImgSrc, className, children, ...props }: IHero) => {
  return (
    <div className="relative">
      <div className={cn("h-dvh isolate", className)}>
        <div className="absolute z-0 top-0 left-0 h-dvh overflow-hidden">
          <picture className="w-full h-dvh overflow-hidden pointer-events-none object-cover">
            <Image src={imgSrc} alt={altImgSrc} />
          </picture>
        </div>
        <div className="h-dvh grid align-bottom relative z-10">
          <div className="flex flex-col gap-4 items-center justify-end pb-20">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
