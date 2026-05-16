"use client";
import { Menu, X } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

interface MenuItem {
  title: string;
  url?: string;
  className?: string;
  links?: {
    label: string;
    description?: string;
    url: string;
    image?: string;
  }[];
}

interface MobileNavigationMenuProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

interface DesktopMenuItemProps {
  item: MenuItem;
  index: number;
}

const LOGO = {
  url: "#",
  src: "",
  alt: "Ekvivalent logo",
  title: "ekvivalent",
};

const NAVIGATION: MenuItem[] = [
  {
    title: "Služby",
    links: [
      {
        label: "Zvýšení hodnoty firmy",
        description: "Strategické poradenství a optimalizace procesů pro růst ziskovosti",
        url: "#sluzby",
        image:
          "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-6jEVl7xPH3E-unsplash.jpg",
      },
      {
        label: "Prodej firmy",
        description: "Komplexní doprovod od valuace až po dokončení transakce",
        url: "#sluzby",
        image:
          "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-gDmVqxZt1hg-unsplash.jpg",
      },
      {
        label: "Koupě firmy",
        description: "Vyhledání příležitostí, due diligence a strukturování transakce",
        url: "#sluzby",
        image:
          "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-9__Q24sJqKg-unsplash.jpg",
      },
      {
        label: "Management Buy-Out",
        description: "Pomoc manažerům s převzetím firmy včetně financování",
        url: "#sluzby",
        image:
          "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-duxeKbu9FDE-unsplash.jpg",
      },
    ],
  },
  {
    title: "Generační obměna",
    url: "#generacni-obmena",
  },
  {
    title: "O nás",
    url: "#o-nas",
  },
  {
    title: "Kariéra",
    url: "#kariera",
  },
  {
    title: "Kontakt",
    url: "#kontakt",
  },
];

const MOBILE_NAVIGATION: MenuItem[] = [
  {
    title: "Služby",
    className: "col-span-2",
    links: [
      {
        label: "Zvýšení hodnoty firmy",
        url: "#sluzby",
      },
      {
        label: "Prodej firmy",
        url: "#sluzby",
      },
      {
        label: "Koupě firmy",
        url: "#sluzby",
      },
      {
        label: "Management Buy-Out",
        url: "#sluzby",
      },
      {
        label: "Generační obměna",
        url: "#generacni-obmena",
      },
    ],
  },
  {
    title: "Společnost",
    className: "",
    links: [
      {
        label: "O nás",
        url: "#o-nas",
      },
      {
        label: "Kariéra",
        url: "#kariera",
      },
      {
        label: "Kontakt",
        url: "#kontakt",
      },
    ],
  },
];

const NAV_BUTTONS: {
  label: string;
  url: string;
  variant:
    | "ghost"
    | "default"
    | "link"
    | "destructive"
    | "outline"
    | "secondary";
}[] = [
  {
    label: "Konzultace",
    url: "#kontakt",
    variant: "default",
  },
];

const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    url: "#",
  },
];

const MOBILE_BREAKPOINT = 1024;

interface Navbar8Props {
  className?: string;
}

const Navbar8 = ({ className }: Navbar8Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > MOBILE_BREAKPOINT) {
        setOpen(false);
      }
    };

    const handleScroll = () => {
      navRef.current?.classList.toggle("bg-background", window.scrollY > 300);
      navRef.current?.classList.toggle(
        "bg-transparent",
        !(window.scrollY > 300),
      );
    };

    handleResize();
    handleScroll();

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMobileMenu = () => {
    const nextOpen = !open;
    setOpen(nextOpen);
  };

  return (
    <section className={cn("", className)}>
      <div
        className="fixed top-0 z-400 w-full bg-transparent transition-colors duration-500"
        ref={navRef}
      >
        <div className="container border-b">
          <div className="flex items-center justify-between gap-3.5 py-5">
            <a
              href={LOGO.url}
              className="flex max-h-8 items-center gap-2 text-lg font-semibold tracking-tighter"
            >
              <span className="font-bold tracking-tight uppercase">{LOGO.title}</span>
            </a>
            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList>
                {NAVIGATION.map((item, index) => (
                  <DesktopMenuItem
                    key={`desktop-link-${index}`}
                    item={item}
                    index={index}
                  />
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            <div className="flex items-center gap-3.5">
              {NAV_BUTTONS.map((button, index) => (
                <Button key={`nav-button-${index}`} variant={button.variant} render={<a href={button.url} />} nativeButton={false}>{button.label}</Button>
              ))}
              <div className="lg:hidden">
                <Button variant="ghost" size="icon" onClick={handleMobileMenu}>
                  <Menu className="size-5.5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MobileNavigationMenu open={open} setOpen={setOpen} />
    </section>
  );
};

const DesktopMenuItem = ({ item, index }: DesktopMenuItemProps) => {
  const [hoveredIdx, setHoveredIdx] = useState(0);

  if (item.links) {
    return (
      <NavigationMenuItem key={`desktop-menu-item-${index}`} value={`${index}`}>
        <NavigationMenuTrigger className="bg-transparent">
          {item.title}
        </NavigationMenuTrigger>
        <NavigationMenuContent className="!rounded-2xl !p-0">
          <div className="grid w-[45.25rem] grid-cols-[22.5rem_1fr] gap-4 p-3">
            <div className="flex flex-col gap-3">
              <div className="relative h-52 overflow-hidden rounded-xl">
                {item.links.map((link, i) => (
                  <img
                    key={i}
                    src={link.image}
                    alt={link.label}
                    className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
                      i === hoveredIdx ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
              </div>
              <div className="relative min-h-[2.5rem] px-1">
                {item.links.map((link, i) => (
                  <p
                    key={i}
                    className={`absolute text-sm leading-snug text-muted-foreground transition-opacity duration-200 ${
                      i === hoveredIdx ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {link.description}
                  </p>
                ))}
              </div>
            </div>
            <div>
              <div className="p-4 leading-normal font-bold">{item.title}</div>
              <ul>
                {item.links.map((link, i) => (
                  <li key={`desktop-nav-sublink-${i}`}>
                    <a
                      href={link.url}
                      className="flex items-center rounded-lg px-4 py-3 hover:bg-muted"
                      onMouseEnter={() => setHoveredIdx(i)}
                      onMouseLeave={() => setHoveredIdx(0)}
                    >
                      <h3 className="leading-normal font-medium">
                        {link.label}
                      </h3>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem
      key={`desktop-menu-item-${index}`}
      value={`${index}`}
      className={`${navigationMenuTriggerStyle()} bg-transparent`}
    >
      <NavigationMenuLink href={item.url}>{item.title}</NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const MobileNavigationMenu = ({ open, setOpen }: MobileNavigationMenuProps) => {
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent
        aria-describedby={undefined}
        side="top"
        className="inset-0 z-600 h-dvh w-full bg-primary text-primary-foreground [&>button]:hidden"
      >
        <div className="flex-1 overflow-y-auto">
          <div className="container pb-12">
            <div className="absolute -m-px h-px w-px overflow-hidden border-0 mask-clip-border p-0 text-nowrap whitespace-nowrap">
              <SheetTitle className="text-primary">
                Mobile Navigation
              </SheetTitle>
            </div>
            <div className="flex justify-end pt-5">
              <SheetClose render={<Button size="icon" className="size-9 rounded-full bg-muted/20 hover:bg-muted/20" />}><X className="size-5.5" /></SheetClose>
            </div>
            <div className="flex h-full flex-col justify-between gap-30 pt-24">
              <div className="grid w-full grid-cols-2 gap-x-4 gap-y-10">
                {MOBILE_NAVIGATION.map((item, index) =>
                  renderMobileMenuItem(item, index, () => setOpen(false)),
                )}
              </div>
              <div className="col-span-2 flex flex-col gap-4">
                <div className="text-xs text-foreground/60 uppercase">
                  SOCIAL
                </div>
                <div className="flex gap-4">
                  {SOCIAL_LINKS.map((link, index) => (
                    <a
                      key={`social-link-${index}`}
                      href={link.url}
                      className="text-primary-foreground"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

const renderMobileMenuItem = (item: MenuItem, index: number, onClose: () => void) => {
  return (
    <div
      className={`flex flex-col gap-4 text-primary-foreground ${item.className}`}
      key={`mobile-menu-item-${index}`}
    >
      <div className="text-xs text-foreground/60 uppercase">{item.title}</div>
      <ul className="flex flex-col gap-3">
        {item.links?.map((link, i) => (
          <li key={`mobile-nav-link-${i}`}>
            <a
              href={link.url}
              onClick={onClose}
              className={`text-primary-foreground ${index === 0 ? "text-2xl" : "text-base"} leading-normal font-medium`}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { Navbar8 };
