"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { WatchCard } from "@/components/watch-card";
import { Watch } from "@prisma/client";
import { Filter } from "lucide-react";
import { useEffect, useState } from "react";

export default function Store() {
  const [watchs, setWatchs] = useState<Watch[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [brands, setBrands] = useState<string[]>([]);
  const [categoryFilter, setCategoryFilter] = useState<string>("");
  const [brandFilter, setBrandFilter] = useState<string>("");

  const handleChangeCategoryFilter = (e: string) => {
    if (e === categoryFilter) {
      setCategoryFilter("");
    } else {
      setCategoryFilter(e);
    }
  };

  useEffect(() => {
    async function getDataWatchs() {
      const res = await fetch("/api/watch");
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await res.json();
      if (data.length !== undefined) {
        setWatchs(data);
      }
      return data;
    }
    async function getDataCategories() {
      const res = await fetch("/api/category");
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await res.json();
      if (data.length !== undefined) {
        setCategories(data);
      }
      return data;
    }
    async function getDataBrands() {
      const res = await fetch("/api/brand");
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await res.json();
      if (data.length !== undefined) {
        setBrands(data);
      }
      return data;
    }
    getDataWatchs();
    getDataCategories();
    getDataBrands();
  }, []);

  return (
    <div className="">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" className="gap-2">
            <Filter /> Filtrar
          </Button>
        </SheetTrigger>
        <SheetContent side={"left"} className="max-w-2xl">
          <SheetHeader>
            <SheetTitle>Filtros</SheetTitle>
            <SheetDescription>
              Aprimore seu estilo com nossos filtros exclusivos para relógios.
              Encontre o ajuste perfeito para combinar com qualquer ocasião.
            </SheetDescription>
          </SheetHeader>
          <div className="my-8 space-y-8">
            <div>
              <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mb-4">
                Categorias
              </h4>
              <RadioGroup
                defaultValue={categoryFilter}
                onValueChange={handleChangeCategoryFilter}
              >
                {categories.map((category, index) => {
                  return (
                    <div key={index} className="flex items-center space-x-2">
                      <RadioGroupItem
                        className="w-6 h-6"
                        value={category}
                        id={category}
                      />
                      <Label htmlFor={category}>{category}</Label>
                    </div>
                  );
                })}
              </RadioGroup>
            </div>

            <div>
              <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mb-4">
                Marcas
              </h4>
              <RadioGroup>
                {brands.map((brand, index) => {
                  return (
                    <div key={index} className="flex items-center space-x-2">
                      <RadioGroupItem
                        className="w-6 h-6"
                        value={brand}
                        id={brand}
                      />
                      <Label htmlFor={brand}>{brand}</Label>
                    </div>
                  );
                })}
              </RadioGroup>
            </div>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit">Aplicar</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>

      <div onClick={() => console.log(brands)}>{categoryFilter}</div>
      <div onClick={() => console.log(brands)}>{brandFilter}</div>

      <div className="max-w-[1440px] m-auto flex justify-center flex-wrap gap-4">
        {watchs.map((watch) => {
          return <WatchCard key={watch.id} {...watch} />;
        })}
      </div>
    </div>
  );
}
