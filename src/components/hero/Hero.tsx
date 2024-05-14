import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import { HTMLAttributes } from "react";

interface IHero extends HTMLAttributes<HTMLDivElement> {
  imgSrc: StaticImageData;
  altImgSrc: string;
}

const Hero = ({ imgSrc, altImgSrc, className, children, ...props }: IHero) => {
  return (
    <div className={cn("h-dvh w-full relative isolate", className)}>
      <div className="absolute top-0 left-0 w-full h-full object-cover lg:absolute lg:top-0 lg:left-0 lg:w-full lg:h-full lg:object-cover">
        <picture className="block object-cover h-full w-full overflow-hidden">
          <Image
            className="block object-cover h-full w-full loading-lazy"
            src={imgSrc}
            alt={altImgSrc}
          />
        </picture>
      </div>
      <div className="h-dvh grid align-bottom relative z-10">
        <div className="flex flex-col gap-4 items-center justify-end pb-20">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Hero;
