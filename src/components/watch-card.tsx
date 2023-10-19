import { Watch } from "@prisma/client";
import Image from "next/image";
import { Button } from "./ui/button";
import { ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";

export function WatchCard(watchProps: Watch) {
  const router = useRouter();
  const { id, name, description, images, videos, price } = watchProps;

  const handleClick = () => {
    router.push(`/store/${id}`);
  };
  return (
    <div
      onClick={() => handleClick()}
      className="flex-grow basis-60 max-w-[260px] tablet:max-w-[400px] bg-foreground/10 rounded-lg overflow-hidden hover:bg-foreground/5 transition-colors cursor-pointer pb-8"
    >
      <div className="flex justify-center pt-1">
        <div className="bg-foreground/10 rounded-xl w-[97%] h-72 flex justify-center">
          <Image
            alt={name}
            height={1000}
            width={1000}
            priority
            className="rounded object-cover aspect-square w-full"
            src={images[0]}
          />
        </div>
      </div>
      <div className="space-x-4 gap-4">
        <h1 className="mx-4 mt-4 text-xl font-extrabold max-w-[200px] break-words">
          {name}
        </h1>
        <h4 className="mt-4 scroll-m-20 text-sm text-muted-foreground font-black tracking-tight">
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
