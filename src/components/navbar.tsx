"use client";
import Link from "next/link";
import { Clock4, ShoppingCart } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import Image from "next/image";
import { Logo } from "./logo";

export function Navbar() {
  return (
    <header className=" bg-background/70 p-3 backdrop-blur-2xl fixed top-0 left-0 right-0 z-10">
      <nav className="max-w-[1300px] w-[100%] relative mx-auto px-4">
        <div className="flex justify-between h-10">
          <div className="self-center">
            <Logo size={90} subTitleHidden />
          </div>
          <div>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link
                    href="https://api.whatsapp.com/send/?phone=5527997847096&text=&text=Ol%C3%A1,%20quero%20conhecer%20os%20rel%C3%B3gios!"
                    legacyBehavior
                    passHref
                    target="_blank"
                  >
                    <NavigationMenuLink
                      className={`${navigationMenuTriggerStyle()}`}
                    >
                      <ShoppingCart />
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </nav>
    </header>
  );
}
