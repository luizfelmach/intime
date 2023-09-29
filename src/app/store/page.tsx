"use client";

import { Footer } from "@/components/footer";
import { Loader } from "@/components/loader";
import { Logo } from "@/components/logo";
import { Navbar } from "@/components/navbar";
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
  const [loading, setLoading] = useState<boolean>(true);
  const [fetching, setFetching] = useState<boolean>(false);

  const handleChangeCategoryFilter = (e: string) => {
    if (e === categoryFilter) {
      setCategoryFilter("");
    } else {
      setCategoryFilter(e);
    }
  };

  const fetchMoreItems = () => {
    setFetching(true);
    setTimeout(() => {
      setFetching(false);
    }, 1000);
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
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 1 &&
        !fetching
      ) {
        fetchMoreItems();
      }
    };

    window.addEventListener("scroll", handleScroll);

    async function getAll() {
      await getDataWatchs();
      await getDataCategories();
      await getDataBrands();
      setLoading(false);
    }
    getAll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="">
      {loading ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          <Navbar />
          <div className="invisible px1050:visible self-stretch max-w-[1300px] w-[100%] relative mx-auto pt-20 px-4">
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
                    Aprimore seu estilo com nossos filtros exclusivos para
                    relógios. Encontre o ajuste perfeito para combinar com
                    qualquer ocasião.
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
                          <div
                            key={index}
                            className="flex items-center space-x-2"
                          >
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
                          <div
                            key={index}
                            className="flex items-center space-x-2"
                          >
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
          </div>

          <div className="max-w-[1300px] w-[100%] relative mx-auto px-4 py-4 flex justify-end flex-wrap gap-4">
            <div className="w-full h-full grid grid-cols-4 px1050:grid-cols-1 gap-4">
              <nav className="px1050:hidden phone:hidden bg-foreground/5 rounded-xl h-1/4">
                <div className="m-8 space-y-8">
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
                          <div
                            key={index}
                            className="flex items-center space-x-2"
                          >
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
                          <div
                            key={index}
                            className="flex items-center space-x-2"
                          >
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
              </nav>
              <div className="col-span-3">
                <div className="flex justify-center flex-wrap gap-4">
                  {watchs.map((watch) => {
                    return <WatchCard key={watch.id} {...watch} />;
                  })}
                  {fetching ? (
                    <>
                      <div>
                        <Logo size={100} disableRealClock />
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </>
      )}
    </div>
  );
}
