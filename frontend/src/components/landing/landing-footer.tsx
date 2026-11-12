import { Button, Input, Link, Separator, TextField } from "@heroui/react";

import { navLinks } from "@/config/landing";
import {
  ArrowRightIcon,
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  TwitterIcon,
} from "@/components/landing/brand-icons";
import { RusikWashMark } from "@/components/landing/illustrations";

const accountLinks = [
  { label: "Store", href: "#price" },
  { label: "Edit Details", href: "#contact" },
  { label: "My Cart", href: "#price" },
  { label: "My Account", href: "#contact" },
  { label: "My Orders", href: "#delivery" },
];

const socialLinks = [
  { label: "Facebook", href: "https://facebook.com", Icon: FacebookIcon },
  { label: "Instagram", href: "https://instagram.com", Icon: InstagramIcon },
  { label: "Twitter", href: "https://twitter.com", Icon: TwitterIcon },
];

export function LandingFooter() {
  return (
    <>
      <div aria-hidden className="bg-white">
        <svg
          className="block h-12 w-full text-[#161B1C] sm:h-16"
          preserveAspectRatio="none"
          viewBox="0 0 1440 80"
        >
          <path
            d="M0 42c92-14 158 14 248 20 88 6 152-24 240-30 90-6 154 28 242 36 88 8 152-10 240-20 88-10 160 6 250 20 74 11 148 9 220-4v16H0V42Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <footer className="bg-[#161B1C] text-white" id="contact">
        <div className="mx-auto max-w-[1350px] px-5 pb-10 pt-12 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-8 border-b border-white/10 pb-10 lg:flex-row lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#FFD21A]">
                Stay in the loop
              </p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                Newsletter Subscribe
              </h2>
              <p className="mt-2 max-w-lg text-sm leading-6 text-white/55">
                Laundry tips, seasonal offers and the occasional fresh idea,
                delivered to your inbox.
              </p>
            </div>

            <form
              className="flex w-full max-w-xl flex-col gap-3 sm:flex-row"
              onSubmit={(event) => event.preventDefault()}
            >
              <TextField
                aria-label="Email address"
                className="flex-1"
                type="email"
              >
                <Input
                  className="h-12 rounded-full border-white/15 !bg-white/10 px-5 text-sm text-white placeholder:text-white/40"
                  placeholder="Enter your email address"
                />
              </TextField>
              <Button
                className="h-12 shrink-0 rounded-full !bg-[#FFD21A] px-6 text-xs font-bold !text-[#161B1C] shadow-lg shadow-[#FFD21A]/15 hover:!bg-[#F5C400]"
                type="submit"
              >
                Subscribe now
                <ArrowRightIcon className="size-4" />
              </Button>
            </form>
          </div>

          <div className="grid gap-10 py-12 md:grid-cols-2 xl:grid-cols-[1.4fr_1fr_0.8fr_0.8fr]">
            <div>
              <RusikWashMark dark />
              <p className="mt-5 max-w-sm text-sm leading-6 text-white/55">
                RusikWash makes laundry day feel lighter. We collect, clean and
                deliver your clothes with care, so you can spend your time on
                the things that matter.
              </p>
              <Link
                className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#FFD21A] no-underline data-[hover=true]:no-underline"
                href="#how-it-works"
              >
                Read more
                <ArrowRightIcon className="size-4" />
              </Link>
              <div className="mt-6 flex items-center gap-3">
                {socialLinks.map(({ label, href, Icon }) => (
                  <Link
                    key={label}
                    aria-label={label}
                    className="flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 no-underline transition-colors hover:bg-[#02A2D7] hover:text-white data-[hover=true]:no-underline"
                    href={href}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Icon className="size-4" />
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white">Get in touch</h3>
              <ul className="mt-5 space-y-4 text-sm text-white/55">
                <li className="flex gap-3">
                  <MapPinIcon className="mt-0.5 size-4 shrink-0 text-[#FFD21A]" />
                  <span>
                    25 Breeze Avenue, Suite 12
                    <br />
                    Brooklyn, NY 11201
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <MailIcon className="size-4 shrink-0 text-[#FFD21A]" />
                  <Link
                    className="text-white/55 no-underline hover:text-white data-[hover=true]:no-underline"
                    href="mailto:hello@rusikwash.com"
                  >
                    hello@rusikwash.com
                  </Link>
                </li>
                <li className="flex items-center gap-3">
                  <PhoneIcon className="size-4 shrink-0 text-[#FFD21A]" />
                  <Link
                    className="text-white/55 no-underline hover:text-white data-[hover=true]:no-underline"
                    href="tel:18007654321"
                  >
                    1 (800) 765-43-21
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white">My Account</h3>
              <ul className="mt-5 space-y-3">
                {accountLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      className="text-sm text-white/55 no-underline transition-colors hover:text-[#FFD21A] data-[hover=true]:no-underline"
                      href={item.href}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white">Site Map</h3>
              <ul className="mt-5 space-y-3">
                {navLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      className="text-sm text-white/55 no-underline transition-colors hover:text-[#FFD21A] data-[hover=true]:no-underline"
                      href={item.href}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Separator className="bg-white/10" />
          <div className="flex flex-col items-center justify-between gap-3 pt-6 text-xs text-white/40 sm:flex-row">
            <p>Copyright © 2023 RusikWash. All Right Reserved</p>
            <div className="flex items-center gap-5">
              <Link
                className="text-white/40 no-underline hover:text-white data-[hover=true]:no-underline"
                href="#home"
              >
                Privacy Policy
              </Link>
              <Link
                className="text-white/40 no-underline hover:text-white data-[hover=true]:no-underline"
                href="#home"
              >
                Terms &amp; Conditions
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
