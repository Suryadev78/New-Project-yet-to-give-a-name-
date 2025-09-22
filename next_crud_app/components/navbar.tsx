"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Button2 } from "@/components/ui/8bit/button";
import { ModeToggle } from "@/components/modtoggle";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/8bit/navigation-menu";

interface Item {
  title: string;
  href: string;
}

const items: Item[] = [
  { title: "Home", href: "/" },
  { title: "Add-Product", href: "/add-product" },
  { title: "Products", href: "/products" }
];

export function Navbar() {
  const router = useRouter();

  const handleNavigation = (href: string) => {
    router.push(href);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <div>
        <Image
          className="rounded-2xl cursor-pointer"
          src="/logo.png"
          alt="Logo"
          width={50}
          height={50}
          onClick={() => handleNavigation("/")}
        />
      </div>

      {/* Nav + Toggle */}
      <div className="flex gap-6 items-center">
        {items.map((item) => (
          <NavigationMenu key={item.title}>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Button 
                  className="cursor-pointer"
                  onClick={() => handleNavigation(item.href)}
                >
                  {item.title}
                </Button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        ))}
        <Button2 onClick={() => handleNavigation("/handler/login")} className="cursor-pointer">Sign In</Button2>
        <Button2 onClick={() => handleNavigation("/handler/signup")} className="cursor-pointer">Sign Up</Button2>
        <ModeToggle />
      </div>
    </div>
  );
}