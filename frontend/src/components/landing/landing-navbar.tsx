import { useState } from "react";
import { Button, Link } from "@heroui/react";
import { AnimatePresence, m as motion, useReducedMotion } from "motion/react";

import { navLinks } from "@/config/landing";
import {
  ArrowRightIcon,
  CloseIcon,
  MenuIcon,
  PhoneIcon,
} from "@/components/landing/brand-icons";

export function LandingNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.nav
      animate={{ opacity: 1, y: 0 }}
      aria-label="Main navigation"
      className="sticky top-0 z-50 border-b border-white/10 bg-rusikwash-teal text-white backdrop-blur-xl"
      initial={{
        opacity: shouldReduceMotion ? 1 : 0,
        y: shouldReduceMotion ? 0 : -14,
      }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.45,
        ease: "easeOut",
      }}
    >
      <header className="mx-auto flex h-20 max-w-[1350px] items-center justify-between gap-4 px-5 sm:px-6 lg:px-8">
        <Link
          aria-label="RusikWash home"
          className="shrink-0 no-underline outline-none data-[hover=true]:no-underline"
          href="#home"
        >
          <img
            alt="RusikWash logo"
            className="h-20 w-auto brightness-0 invert"
            src="/RusikWash.svg"
          />
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map((item) => (
            <li key={item.label}>
              <Link
                className="text-sm font-medium text-white/85 no-underline decoration-rusikwash-orange decoration-2 underline-offset-8 transition-colors hover:text-white hover:underline data-[hover=true]:text-white"
                href={item.href}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 sm:flex">
          <Button
            className="hidden h-10 rounded-full !bg-rusikwash-orange px-5 text-xs font-bold !text-black shadow-lg shadow-rusikwash-orange/20 hover:!bg-[#E64600] xl:flex"
            size="sm"
            onPress={() => {
              document.getElementById("contact")?.scrollIntoView({
                behavior: shouldReduceMotion ? "auto" : "smooth",
              });
            }}
          >
            Schedule pickup
            <ArrowRightIcon className="size-4" />
          </Button>
        </div>

        <Button
          isIconOnly
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="text-white sm:hidden"
          variant="ghost"
          onPress={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </Button>
      </header>

      <AnimatePresence initial={false}>
        {isMenuOpen ? (
          <motion.div
            animate={{ opacity: 1, height: "auto" }}
            className="overflow-hidden border-t border-white/10 bg-rusikwash-teal px-5 pb-6 pt-3 sm:hidden"
            exit={{ opacity: 0, height: 0 }}
            id="mobile-navigation"
            initial={{ opacity: 0, height: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.22,
              ease: "easeOut",
            }}
          >
            <ul className="flex flex-col">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    className="flex w-full items-center justify-between rounded-xl px-2 py-3 text-sm font-medium text-white no-underline data-[hover=true]:bg-white/10 data-[hover=true]:no-underline"
                    href={item.href}
                    onPress={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                    <ArrowRightIcon className="size-4 text-rusikwash-orange" />
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex items-center gap-3">
              <Link
                className="flex flex-1 items-center justify-center gap-2 rounded-full bg-rusikwash-orange px-4 py-3 text-sm font-semibold text-black no-underline data-[hover=true]:no-underline"
                href="tel:18007654321"
              >
                <PhoneIcon className="size-4" />1 (800) 765-43-21
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.nav>
  );
}
