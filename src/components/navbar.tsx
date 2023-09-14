"use client";
import Link from "next/link";
import { Clock4 } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";

export function Navbar() {
  return (
    <header className=" bg-background/90 backdrop-blur-3xl fixed top-0 left-0 right-0 z-10">
      <nav className="max-w-[1300px] w-[100%] relative mx-auto px-4">
        <div className="flex justify-between">
          <div className="self-center">
            <Clock4 />
          </div>
          <div>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="#" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`${navigationMenuTriggerStyle()}`}
                    >
                      Comprar
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
