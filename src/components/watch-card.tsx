import { Watch } from "@prisma/client";
import Image from "next/image";
import { Button } from "./ui/button";
import { ShoppingBag } from "lucide-react";

export function WatchCard(watchProps: Watch) {
  const { name, description, images, videos, price } = watchProps;
  return (
    <div className="w-72 tablet:w-full bg-foreground/10 rounded-lg overflow-hidden">
      <div className="flex justify-center w-full h-56">
        <Image
          alt={name}
          height={100}
          width={1000}
          priority
          className="rounded object-cover"
          src="https://lh3.googleusercontent.com/drive-viewer/AK7aPaCaX6xe2_KiCOA-6_g_FI-BEoDv9ufvOun1et0CztVtUZPORTa86bkZRl0m7rz2TlJOWiJpOuJqLLvM0U542Ix2v9p8yQ=s1600"
        />
      </div>
      <div className="space-x-4 gap-4">
        <h1 className="mx-4 text-2xl font-extrabold">{name}</h1>
        <h1>{price}</h1>
        <div className="flex justify-around gap-4 mb-4">
          <Button variant={"secondary"}>Detalhes</Button>
          <Button>
            <ShoppingBag /> Comprar
          </Button>
        </div>
      </div>
    </div>
  );
}
