"use client";

import { Footer } from "@/components/footer";
import { Loader } from "@/components/loader";
import { Logo } from "@/components/logo";
import { Navbar } from "@/components/navbar";
import { Badge } from "@/components/ui/badge";
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
import { Slider } from "@/components/ui/slider";
import { WatchCard } from "@/components/watch-card";
import { Watch } from "@prisma/client";
import { BadgeX, Filter, X } from "lucide-react";
import { useEffect, useState } from "react";
import * as SliderRadix from "@radix-ui/react-slider";

export default function Store() {
  const [watchs, setWatchs] = useState<Watch[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [brands, setBrands] = useState<string[]>([]);
  const [categoryFilter, setCategoryFilter] = useState<string>("");
  const [brandFilter, setBrandFilter] = useState<string>("");
  const [priceMinFilter, setPriceMinFilter] = useState<number>(140);
  const [priceMaxFilter, setPriceMaxFilter] = useState<number>(10000);
  const [priceDebounce, setPriceDebounce] = useState<number[]>([149, 10000]);
  const [loading, setLoading] = useState<boolean>(true);
  const [fetching, setFetching] = useState<boolean>(false);
  const [pagination, setPagination] = useState<number>(0);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const handleChangeCategoryFilter = (e: string) => {
    setFetching(true);
    setWatchs([]);
    setPagination(0);
    setCategoryFilter(e);
  };

  const handleChangeBrandFilter = (e: string) => {
    setFetching(true);
    setWatchs([]);
    setPagination(0);
    setBrandFilter(e);
  };

  const handleRemoveCategoryFilter = () => {
    setFetching(true);
    setWatchs([]);
    setPagination(0);
    setCategoryFilter("");
  };

  const handleRemoveBrandFilter = () => {
    setFetching(true);
    setWatchs([]);
    setPagination(0);
    setBrandFilter("");
  };

  const handleChangePrice = (e: number[]) => {
    const a = setTimeout(() => {
      console.log("EXECUTOU");
    }, 1000);
  };

  const fetchItems = async () => {
    const res = await fetch(
      `/api/watch?p=${pagination}&category=${categoryFilter}&brand=${brandFilter}`
    );
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await res.json();
    if (data.length !== undefined) {
      if (data.length === 0) {
        setHasMore(false);
      }
      setWatchs((prev) => {
        const newData = [...prev, ...data];
        return newData;
      });
    }
  };

  useEffect(() => {
    const execute = async () => {
      await fetchItems();
      setFetching(false);
    };
    execute();
  }, [pagination, categoryFilter, brandFilter]);

  useEffect(() => {
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
    async function execute() {
      await getDataCategories();
      await getDataBrands();
      setLoading(false);
    }
    execute();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 1 &&
        !fetching
      ) {
        setPagination((prev) => prev + 1);
        setFetching(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log(priceDebounce);
      setPriceMinFilter(priceDebounce[0]);
      setPriceMaxFilter(priceDebounce[1]);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [priceDebounce]);

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
                    <RadioGroup
                      defaultValue={brandFilter}
                      onValueChange={handleChangeBrandFilter}
                    >
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

          <div className="min-h-screen max-w-[1300px] w-[100%] relative mx-auto px-4 py-4 flex justify-end flex-wrap gap-4">
            <div className="w-full h-full grid grid-cols-4 px1050:grid-cols-1 gap-4">
              <nav className="px1050:hidden phone:hidden bg-foreground/5 rounded-xl row-span-2">
                <div className="m-8 space-y-8">
                  <div>
                    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mb-4">
                      Preço
                    </h4>
                    <div className="flex justify-evenly py-2 font-extralight">
                      <span>{`R$ ${priceDebounce[0].toFixed(1)}`}</span>
                      <span>{`R$ ${priceDebounce[1].toFixed(1)}`}</span>
                    </div>
                    <Slider
                      defaultValue={[priceDebounce[0], priceDebounce[1]]}
                      max={10000}
                      onValueChange={(e) => setPriceDebounce(e)}
                    />
                  </div>
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
                    <RadioGroup
                      defaultValue={brandFilter}
                      onValueChange={handleChangeBrandFilter}
                    >
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
                <div className="flex gap-4 pb-5">
                  {categoryFilter !== "" ? (
                    <Badge
                      className="h-10 gap-2"
                      variant="secondary"
                      onClick={handleRemoveCategoryFilter}
                    >
                      {categoryFilter}
                      <X />
                    </Badge>
                  ) : (
                    <></>
                  )}

                  {brandFilter !== "" ? (
                    <Badge
                      className="h-10 gap-2"
                      variant="secondary"
                      onClick={handleRemoveBrandFilter}
                    >
                      {brandFilter}
                      <X />
                    </Badge>
                  ) : (
                    <></>
                  )}
                </div>
                <div className="flex justify-center flex-wrap gap-4">
                  {watchs.map((watch) => {
                    return <WatchCard key={watch.id} {...watch} />;
                  })}
                </div>
                <div className={"flex justify-center"}>
                  <div className={`${fetching ? "visible" : "invisible"}`}>
                    <Logo size={100} disableRealClock />
                  </div>
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
