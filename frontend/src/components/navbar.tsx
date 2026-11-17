"use client";

import { useState } from "react";
import { Button, Kbd, Link, TextField, InputGroup } from "@heroui/react";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
  HeartFilledIcon,
  SearchIcon,
  Logo,
} from "@/components/icons";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const searchInput = (
    <TextField aria-label="Search" type="search">
      <InputGroup>
        <InputGroup.Prefix>
          <SearchIcon className="text-base text-muted pointer-events-none flex-shrink-0" />
        </InputGroup.Prefix>
        <InputGroup.Input className="text-sm" placeholder="Search..." />
        <InputGroup.Suffix>
          <Kbd className="hidden lg:inline-flex">
            <Kbd.Abbr keyValue="command" />
            <Kbd.Content>K</Kbd.Content>
          </Kbd>
        </InputGroup.Suffix>
      </InputGroup>
    </TextField>
  );

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-white/10 bg-rusikwash-teal text-white backdrop-blur-lg">
      <header className="mx-auto flex h-16 max-w-[1280px] items-center justify-between gap-4 px-6">
        <div className="flex items-center gap-4">
          <a className="flex items-center gap-1" href="/">
            <Logo className="text-rusikwash-orange" />
            <p className="font-bold text-white">RusikWash</p>
          </a>
          <ul className="hidden lg:flex gap-4 ml-2">
            {siteConfig.navItems.map((item) => (
              <li key={item.href}>
                <a
                  className={clsx(
                    "text-white/85 transition-colors hover:text-white",
                    "data-[active=true]:font-medium data-[active=true]:underline data-[active=true]:decoration-rusikwash-orange data-[active=true]:decoration-2",
                  )}
                  href={item.href}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden sm:flex items-center gap-2">
          <Link
            aria-label="Twitter"
            href={siteConfig.links.twitter}
            rel="noopener noreferrer"
            target="_blank"
          >
            <TwitterIcon className="text-white/75" />
          </Link>
          <Link
            aria-label="Discord"
            href={siteConfig.links.discord}
            rel="noopener noreferrer"
            target="_blank"
          >
            <DiscordIcon className="text-white/75" />
          </Link>
          <Link
            aria-label="Github"
            href={siteConfig.links.github}
            rel="noopener noreferrer"
            target="_blank"
          >
            <GithubIcon className="text-white/75" />
          </Link>
          <ThemeSwitch className="text-white" />
          <div className="hidden lg:flex">{searchInput}</div>
          <div className="hidden md:flex">
            <Button
              className="text-sm font-normal text-white hover:bg-white/10"
              variant="tertiary"
              onPress={() => window.open(siteConfig.links.sponsor, "_blank")}
            >
              <HeartFilledIcon className="text-rusikwash-orange" />
              Sponsor
            </Button>
          </div>
        </div>

        <div className="flex sm:hidden items-center gap-2">
          <Link
            aria-label="Github"
            href={siteConfig.links.github}
            rel="noopener noreferrer"
            target="_blank"
          >
            <GithubIcon className="text-white/75" />
          </Link>
          <ThemeSwitch className="text-white" />
          <button
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
            className="p-2 text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  d="M6 18L18 6M6 6l12 12"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              ) : (
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              )}
            </svg>
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <div className="border-t border-white/10 bg-rusikwash-teal sm:hidden">
          <div className="p-4">{searchInput}</div>
          <ul className="flex flex-col gap-2 px-4 pb-4">
            {siteConfig.navMenuItems.map((item, index) => (
              <li key={`${item.label}-${index}`}>
                <Link
                  className={clsx(
                    "block rounded-lg px-3 py-2 text-lg no-underline transition-colors hover:bg-white/10",
                    index === 2
                      ? "bg-rusikwash-orange font-semibold text-black"
                      : "text-white",
                  )}
                  href="#"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};
