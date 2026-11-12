import { useState } from "react";
import { Button, Link } from "@heroui/react";

import { navLinks } from "@/config/landing";
import {
  ArrowRightIcon,
  CloseIcon,
  MenuIcon,
  PhoneIcon,
  UserIcon,
} from "@/components/landing/brand-icons";

export function LandingNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      aria-label="Main navigation"
      className="sticky top-0 z-50 border-b border-white/40 bg-[#D2F4FF] backdrop-blur-xl"
    >
      <header className="mx-auto flex h-20 max-w-[1350px] items-center justify-between gap-4 px-5 sm:px-6 lg:px-8">
        <Link
          aria-label="RusikWash home"
          className="shrink-0 no-underline outline-none data-[hover=true]:no-underline"
          href="#home"
        >
          <img
            alt="RusikWash logo"
            className="h-20 w-auto"
            src="/RusikWash.svg"
          />
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map((item) => (
            <li key={item.label}>
              <Link
                className="text-sm font-medium text-[#294044]/80 no-underline transition-colors hover:text-[#02A2D7] data-[hover=true]:text-[#02A2D7]"
                href={item.href}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 sm:flex">
          <Button
            className="hidden h-10 rounded-full !bg-[#FFD21A] px-5 text-xs font-bold !text-[#161B1C] shadow-lg shadow-[#FFD21A]/30 hover:!bg-[#F5C400] xl:flex"
            size="sm"
            onPress={() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Schedule pickup
            <ArrowRightIcon className="size-4" />
          </Button>
        </div>

        <Button
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="text-[#161B1C] sm:hidden"
          isIconOnly
          variant="ghost"
          onPress={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </Button>
      </header>

      {isMenuOpen ? (
        <div
          className="border-t border-white/50 bg-[#E6F9FF] px-5 pb-6 pt-3 sm:hidden"
          id="mobile-navigation"
        >
          <ul className="flex flex-col">
            {navLinks.map((item) => (
              <li key={item.label}>
                <Link
                  className="flex w-full items-center justify-between rounded-xl px-2 py-3 text-sm font-medium text-[#294044] no-underline data-[hover=true]:bg-white/60 data-[hover=true]:no-underline"
                  href={item.href}
                  onPress={() => setIsMenuOpen(false)}
                >
                  {item.label}
                  <ArrowRightIcon className="size-4 text-[#02A2D7]" />
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex items-center gap-3">
            <Link
              className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#02A2D7] px-4 py-3 text-sm font-semibold text-white no-underline data-[hover=true]:no-underline"
              href="tel:18007654321"
            >
              <PhoneIcon className="size-4" />1 (800) 765-43-21
            </Link>
            <Link
              className="flex items-center justify-center gap-2 rounded-full border border-[#161B1C]/10 bg-white px-4 py-3 text-sm font-semibold text-[#161B1C] no-underline data-[hover=true]:no-underline"
              href="#contact"
              onPress={() => setIsMenuOpen(false)}
            >
              <UserIcon className="size-4 text-[#02A2D7]" />
              Login
            </Link>
          </div>
        </div>
      ) : null}
    </nav>
  );
}
