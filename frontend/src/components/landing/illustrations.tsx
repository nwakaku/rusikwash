import { Card, CardContent } from "@heroui/react";
import clsx from "clsx";

import { images } from "@/config/landing";
import { CheckIcon, StarIcon } from "@/components/landing/brand-icons";

export function RusikWashMark({
  className,
  dark = false,
}: {
  className?: string;
  dark?: boolean;
}) {
  return (
    <span className={clsx("flex items-center gap-2", className)}>
      <span className="relative flex size-10 shrink-0 items-center justify-center rounded-full bg-[#02A2D7] text-white shadow-lg shadow-[#02A2D7]/25">
        <svg aria-hidden className="size-6" fill="none" viewBox="0 0 24 24">
          <path
            d="M7.5 14.5c1-1 2-1 3 0s2 1 3 0 2-1 3 0"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="1.8"
          />
          <circle cx="9" cy="8.5" fill="currentColor" r="1.7" />
          <circle cx="15" cy="7" fill="currentColor" opacity=".7" r="1.2" />
        </svg>
        <span className="absolute -right-1 -top-1 size-3 rounded-full bg-[#FFD21A]" />
      </span>
      <span
        className={clsx(
          "font-script text-3xl font-bold leading-none tracking-tight",
          dark ? "text-white" : "text-[#161B1C]",
        )}
      >
        rusikwash
      </span>
    </span>
  );
}

export function WaveDivider({
  className,
  fill = "#ffffff",
  flip = false,
}: {
  className?: string;
  fill?: string;
  flip?: boolean;
}) {
  return (
    <svg
      aria-hidden
      className={clsx(
        "pointer-events-none absolute inset-x-0 w-full",
        flip && "rotate-180",
        className,
      )}
      preserveAspectRatio="none"
      viewBox="0 0 1440 120"
    >
      <path
        d="M0 40c92-12 150 18 236 24 84 6 148-24 233-30 89-6 152 26 239 36 88 10 157-8 240-20 89-13 166 1 252 16 79 13 140 11 240-10v64H0V40Z"
        fill={fill}
      />
    </svg>
  );
}

export function VanArt({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      className={clsx("drop-shadow-2xl", className)}
      fill="none"
      viewBox="0 0 340 190"
    >
      <ellipse
        cx="170"
        cy="166"
        fill="#161B1C"
        opacity=".12"
        rx="142"
        ry="17"
      />
      <path
        d="M48 50h176c13 0 24 5 33 15l35 40v30c0 8-7 15-15 15H49c-9 0-16-7-16-16V66c0-9 7-16 15-16Z"
        fill="white"
        stroke="#161B1C"
        strokeOpacity=".08"
        strokeWidth="2"
      />
      <path d="M224 50h3c13 0 24 5 33 15l30 35h-66V50Z" fill="#D2F4FF" />
      <path
        d="M239 60h2c8 0 14 3 19 8l18 22h-39V60Z"
        fill="#ffffff"
        opacity=".75"
      />
      <path d="M64 61h95v38H64c-5 0-9-4-9-9V70c0-5 4-9 9-9Z" fill="#D2F4FF" />
      <path
        d="M79 69h64"
        stroke="white"
        strokeLinecap="round"
        strokeWidth="5"
        opacity=".9"
      />
      <path
        d="M33 111c25-11 45-11 70 0s45 11 70 0 45-11 70 0 45 11 70 0 45-11 71 0v20H33v-20Z"
        fill="#02A2D7"
      />
      <text
        fill="white"
        fontFamily="Nunito, sans-serif"
        fontSize="22"
        fontWeight="700"
        x="65"
        y="105"
      >
        rusikwash
      </text>
      <text
        fill="#161B1C"
        fontFamily="Nunito, sans-serif"
        fontSize="7"
        fontWeight="600"
        letterSpacing="3"
        opacity=".55"
        x="68"
        y="142"
      >
        LAUNDRY &amp; DRY CLEANING
      </text>
      <circle cx="101" cy="151" fill="#161B1C" r="21" />
      <circle cx="101" cy="151" fill="#F7FDFF" r="9" />
      <circle cx="253" cy="151" fill="#161B1C" r="21" />
      <circle cx="253" cy="151" fill="#F7FDFF" r="9" />
      <path
        d="M310 103h16"
        stroke="#FFD21A"
        strokeLinecap="round"
        strokeWidth="5"
      />
      <path
        d="M318 88h12M321 118h9"
        stroke="#02A2D7"
        strokeLinecap="round"
        strokeOpacity=".5"
        strokeWidth="4"
      />
      <path
        d="m292 139 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2-4.5-4.4 6.2-.9 2.8-5.7Z"
        fill="#FFD21A"
        opacity=".9"
      />
    </svg>
  );
}

export function LaundryMark({ className }: { className?: string }) {
  return (
    <svg aria-hidden className={className} fill="none" viewBox="0 0 120 120">
      <circle cx="60" cy="60" fill="#D2F4FF" r="54" />
      <path
        d="M28 56c13-7 23-7 36 0s23 7 36 0"
        stroke="#02A2D7"
        strokeLinecap="round"
        strokeWidth="8"
      />
      <path
        d="M32 73c11-6 20-6 32 0s21 6 32 0"
        stroke="#02A2D7"
        strokeLinecap="round"
        strokeOpacity=".45"
        strokeWidth="6"
      />
      <circle cx="42" cy="35" fill="#FFD21A" r="6" />
      <circle cx="62" cy="28" fill="#FFD21A" opacity=".7" r="4" />
      <path
        d="m82 34 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2-4.5-4.4 6.2-.9L82 34Z"
        fill="#E982AA"
      />
    </svg>
  );
}

export function HeroArt() {
  return (
    <div className="relative mx-auto w-full max-w-[570px]">
      <div className="absolute -inset-7 rounded-[48%_52%_60%_40%/44%_45%_55%_56%] bg-white/45" />
      <div className="absolute -left-10 top-14 size-24 rounded-full bg-[#FFEDAD] blur-sm" />
      <div className="absolute -right-8 bottom-24 size-16 rounded-full bg-[#FFD21A]/80" />

      <div className="relative aspect-[4/5] overflow-hidden rounded-[48%_52%_58%_42%/42%_44%_56%_58%] border-[10px] border-white bg-[#BEEBF8] shadow-[0_35px_70px_-35px_rgba(2,162,215,0.55)]">
        <img
          alt="A bright, neatly arranged laundry room"
          className="h-full w-full object-cover"
          decoding="async"
          src={images.hero}
        />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#161B1C]/55 via-[#161B1C]/10 to-transparent" />

        <Card
          className="absolute bottom-7 left-6 right-6 border border-white/70 bg-white/92 shadow-xl backdrop-blur-md"
          variant="default"
        >
          <CardContent className="flex items-center gap-3 p-4">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#D2F4FF] text-[#02A2D7]">
              <CheckIcon size={22} />
            </span>
            <div>
              <p className="text-sm font-semibold text-[#161B1C]">
                Pickup &amp; delivery included
              </p>
              <p className="text-xs text-[#667579]">
                Fresh clothes back in as little as 24 hours
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="absolute -right-5 top-7 flex items-center gap-2 rounded-2xl bg-white px-3 py-2.5 shadow-xl">
        <span className="flex size-8 items-center justify-center rounded-full bg-[#FFD21A] text-[#161B1C]">
          <StarIcon size={16} />
        </span>
        <div>
          <p className="text-sm font-bold leading-none text-[#161B1C]">4.9</p>
          <p className="mt-1 text-[10px] leading-none text-[#667579]">
            2,400+ reviews
          </p>
        </div>
      </div>

      <div className="absolute -left-7 top-1/2 hidden size-14 items-center justify-center rounded-full bg-[#02A2D7] text-white shadow-xl sm:flex">
        <span className="text-xs font-bold">24h</span>
      </div>

      <VanArt className="absolute -bottom-12 -left-16 w-64 sm:w-72" />
    </div>
  );
}

export function PhoneMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[280px]">
      <div className="absolute -inset-6 rounded-[48px] bg-white/10 blur-xl" />
      <div className="relative rounded-[44px] border-[7px] border-[#161B1C] bg-[#161B1C] p-2 shadow-2xl">
        <div className="overflow-hidden rounded-[36px] bg-white">
          <div className="flex items-center justify-between px-4 pb-2 pt-3">
            <span className="font-script text-xl font-bold text-[#161B1C]">
              rusikwash
            </span>
            <span className="flex size-6 items-center justify-center rounded-full bg-[#D2F4FF] text-[#02A2D7]">
              <span className="text-[9px] font-bold">24</span>
            </span>
          </div>
          <div className="mx-3 overflow-hidden rounded-2xl">
            <div className="relative h-32">
              <img
                alt="Freshly cleaned laundry ready for delivery"
                className="h-full w-full object-cover"
                decoding="async"
                loading="lazy"
                src={images.app}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#161B1C]/60 to-transparent" />
              <p className="absolute bottom-3 left-3 max-w-[140px] text-sm font-semibold leading-tight text-white">
                Fresh clothes, zero effort.
              </p>
            </div>
          </div>
          <div className="p-3">
            <div className="flex items-center justify-between rounded-xl bg-[#FFF7D9] px-3 py-2">
              <span className="text-[10px] font-semibold text-[#161B1C]">
                Schedule a pickup
              </span>
              <span className="flex size-5 items-center justify-center rounded-full bg-[#FFD21A] text-[#161B1C]">
                <span className="text-[10px] font-bold">+</span>
              </span>
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2">
              {["Wash", "Dry", "Fold"].map((item) => (
                <div
                  key={item}
                  className="rounded-xl bg-[#F5FAFB] px-2 py-3 text-center text-[9px] font-medium text-[#4A5A5E]"
                >
                  <span className="mx-auto mb-1 block size-5 rounded-full bg-[#D2F4FF]" />
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-3 flex items-center gap-2 rounded-xl bg-[#F5FAFB] p-2">
              <span className="size-8 rounded-full bg-[#FFEDAD]" />
              <div className="space-y-1">
                <span className="block h-1.5 w-20 rounded-full bg-[#D2F4FF]" />
                <span className="block h-1.5 w-14 rounded-full bg-[#EAF7FA]" />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-around border-t border-[#F0F5F6] px-4 py-2 text-[8px] text-[#8A999C]">
            <span className="text-[#02A2D7]">Home</span>
            <span>Orders</span>
            <span>Account</span>
          </div>
        </div>
      </div>
    </div>
  );
}
