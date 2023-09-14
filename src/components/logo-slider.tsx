import Image from "next/image";
import Marquee from "react-fast-marquee";

const logos = [
  { id: 1, src: "/brand/invicta.png", alt: "Logo 1" },
  { id: 2, src: "/brand/tagheuer.png", alt: "Logo 2" },
  { id: 3, src: "/brand/rolex.png", alt: "Logo 2" },
  { id: 4, src: "/brand/gucci.png", alt: "Logo 2" },
  { id: 5, src: "/brand/ea.png", alt: "Logo 2" },
];

type directionType = "left" | "right" | "up" | "down";

export function LogoSlider({ direction }: { direction: directionType }) {
  return (
    <Marquee speed={50} direction={direction} style={{ width: "100%" }}>
      {logos.map((logo) => (
        <div
          key={logo.id}
          className="bg-secondary/5 h-64 w-56 rounded-lg flex justify-center mt-16 self-center mx-5"
        >
          <Image
            className="object-contain"
            src={logo.src}
            alt={logo.alt}
            width={200}
            height={200}
            priority
          />
        </div>
      ))}
    </Marquee>
  );
}
