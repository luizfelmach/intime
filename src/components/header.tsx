"use client"
import Link from "next/link";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "./ui/navigation-menu";
import { Clock4, Loader } from "lucide-react";

export function Header() {

    return (
        <div className="max-w-screen-xl relative mx-auto px-4">

            <div className="flex justify-between">

                <div className="self-center">
                    <Clock4 className="animate-bounce" />
                </div>


                <div>

                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <Link href="#" legacyBehavior passHref>
                                    <NavigationMenuLink className={`${navigationMenuTriggerStyle()}`}>
                                        Comprar
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem >
                        </NavigationMenuList >
                    </NavigationMenu >

                </div>


            </div>
        </div>
    )
}