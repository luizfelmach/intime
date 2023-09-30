import { Watch } from "@prisma/client";
import Image from "next/image";
import { Button } from "./ui/button";
import { ShoppingBag } from "lucide-react";

export function WatchCard(watchProps: Watch) {
  const { name, description, images, videos, price } = watchProps;
  return (
    <div className="flex-grow basis-60 max-w-[260px] tablet:max-w-[400px] bg-foreground/10 rounded-lg overflow-hidden hover:-translate-y-1 transition-transform border border-foreground/20 cursor-pointer">
      <div className="flex justify-center pt-1">
        <div className="bg-foreground/10 rounded w-[97%] h-72 flex justify-center">
          <Image
            alt={name}
            height={1000}
            width={1000}
            priority
            className="rounded object-cover aspect-square w-full"
            src="/watch-4.png"
          />
        </div>
      </div>
      <div className="space-x-4 gap-4">
        <h1 className="mx-4 mt-4 text-xl text-ring font-black">{name}</h1>
        <h4 className="mt-4 scroll-m-20  text-foreground/60 text-lg font-extrabold tracking-tight">
          {`R$ ${price.toFixed(2)}`}
        </h4>
        {/* <div className="flex justify-around gap-4 mb-4">
          <Button variant={"secondary"}>Detalhes</Button>
          <Button>
            <ShoppingBag /> Comprar
          </Button>
        </div> */}
      </div>
    </div>
  );
}
