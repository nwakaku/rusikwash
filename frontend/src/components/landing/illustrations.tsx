import type { ProcessIllustrationKey } from "@/config/landing";

import { Card, CardContent } from "@heroui/react";
import clsx from "clsx";

import { images } from "@/config/landing";
import { CheckIcon, StarIcon } from "@/components/landing/brand-icons";

export function ProcessIllustration({
  variant,
}: {
  variant: ProcessIllustrationKey;
}) {
  return (
    <svg
      aria-hidden
      className="size-full"
      fill="none"
      focusable="false"
      viewBox="0 0 120 120"
    >
      <circle cx="60" cy="60" fill="#073B4C" opacity=".06" r="58" />
      <g
        stroke="#073B4C"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.5"
      >
        {variant === "account" ? (
          <>
            <path
              d="M37 30h36a6 6 0 0 1 6 6v52H41a7 7 0 0 1-7-7V36a6 6 0 0 1 3-6Z"
              fill="#fff"
            />
            <path d="M46 42h19M46 49h13" stroke="#073B4C" strokeOpacity=".25" />
            <circle cx="58" cy="62" fill="#FF4E00" r="8" />
            <path d="M43 83c1.7-7.5 7-11 15-11s13.3 3.5 15 11" fill="#FF4E00" />
            <path d="m75 34 3 3 6-7" stroke="#FF4E00" strokeWidth="3" />
          </>
        ) : null}
        {variant === "pickup" ? (
          <>
            <path d="M24 49h48v28H24z" fill="#fff" />
            <path d="M72 57h14l12 13v7H72z" fill="#073B4C" />
            <path d="M80 61v9h12" />
            <circle cx="40" cy="80" fill="#000000" r="7" />
            <circle cx="82" cy="80" fill="#000000" r="7" />
            <path d="M43 39h21M48 33h12" stroke="#073B4C" />
            <path d="m30 43 6-7" stroke="#FF4E00" strokeWidth="4" />
          </>
        ) : null}
        {variant === "wash" ? (
          <>
            <rect fill="#fff" height="52" rx="8" width="52" x="34" y="34" />
            <path d="M35 47h50" />
            <circle cx="60" cy="65" fill="#073B4C" r="15" />
            <circle cx="60" cy="65" r="9" stroke="#fff" />
            <circle cx="75" cy="41" fill="#FF4E00" r="2" stroke="none" />
            <circle cx="67" cy="41" fill="#FF4E00" r="2" stroke="none" />
            <path d="M55 64c2-3 6-3 8 0s1 6-2 7" stroke="#fff" />
            <path
              d="m89 29 2 5 5 2-5 2-2 5-2-5-5-2 5-2 2-5Z"
              fill="#FF4E00"
              stroke="none"
            />
          </>
        ) : null}
        {variant === "delivery" ? (
          <>
            <path d="m29 55 31-25 31 25v31H29z" fill="#fff" />
            <path d="M51 86V65h18v21" fill="#073B4C" />
            <path d="M40 58h12v11H40z" fill="#FFFFFF" />
            <path d="M68 58h12v11H68z" fill="#FFFFFF" />
            <path d="M48 78h24" stroke="#FF4E00" strokeWidth="4" />
            <path d="m75 82 4 4 9-10" stroke="#FF4E00" strokeWidth="3" />
          </>
        ) : null}
      </g>
      <circle cx="24" cy="35" fill="#FF4E00" r="4" />
      <circle cx="94" cy="87" fill="#FF4E00" r="3" />
    </svg>
  );
}

export function RusikWashMark({
  className,
  dark = false,
}: {
  className?: string;
  dark?: boolean;
}) {
  return (
    <span className={clsx("flex items-center gap-2", className)}>
      <span className="relative flex size-10 shrink-0 items-center justify-center rounded-full bg-rusikwash-teal text-white shadow-lg shadow-rusikwash-teal/25">
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
        <span className="absolute -right-1 -top-1 size-3 rounded-full bg-rusikwash-orange" />
      </span>
      <span
        className={clsx(
          "font-script text-3xl font-bold leading-none tracking-tight",
          dark ? "text-white" : "text-black",
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
        fill="#000000"
        opacity=".12"
        rx="142"
        ry="17"
      />
      <path
        d="M48 50h176c13 0 24 5 33 15l35 40v30c0 8-7 15-15 15H49c-9 0-16-7-16-16V66c0-9 7-16 15-16Z"
        fill="white"
        stroke="#000000"
        strokeOpacity=".08"
        strokeWidth="2"
      />
      <path d="M224 50h3c13 0 24 5 33 15l30 35h-66V50Z" fill="#073B4C" />
      <path
        d="M239 60h2c8 0 14 3 19 8l18 22h-39V60Z"
        fill="#ffffff"
        opacity=".75"
      />
      <path d="M64 61h95v38H64c-5 0-9-4-9-9V70c0-5 4-9 9-9Z" fill="#073B4C" />
      <path
        d="M79 69h64"
        opacity=".9"
        stroke="white"
        strokeLinecap="round"
        strokeWidth="5"
      />
      <path
        d="M33 111c25-11 45-11 70 0s45 11 70 0 45-11 70 0 45 11 70 0 45-11 71 0v20H33v-20Z"
        fill="#073B4C"
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
        fill="#000000"
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
      <circle cx="101" cy="151" fill="#000000" r="21" />
      <circle cx="101" cy="151" fill="#FFFFFF" r="9" />
      <circle cx="253" cy="151" fill="#000000" r="21" />
      <circle cx="253" cy="151" fill="#FFFFFF" r="9" />
      <path
        d="M310 103h16"
        stroke="#FF4E00"
        strokeLinecap="round"
        strokeWidth="5"
      />
      <path
        d="M318 88h12M321 118h9"
        stroke="#073B4C"
        strokeLinecap="round"
        strokeOpacity=".5"
        strokeWidth="4"
      />
      <path
        d="m292 139 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2-4.5-4.4 6.2-.9 2.8-5.7Z"
        fill="#FF4E00"
        opacity=".9"
      />
    </svg>
  );
}

export function LaundryMark({ className }: { className?: string }) {
  return (
    <svg aria-hidden className={className} fill="none" viewBox="0 0 120 120">
      <circle cx="60" cy="60" fill="#073B4C" opacity=".06" r="54" />
      <path
        d="M28 56c13-7 23-7 36 0s23 7 36 0"
        stroke="#073B4C"
        strokeLinecap="round"
        strokeWidth="8"
      />
      <path
        d="M32 73c11-6 20-6 32 0s21 6 32 0"
        stroke="#073B4C"
        strokeLinecap="round"
        strokeOpacity=".45"
        strokeWidth="6"
      />
      <circle cx="42" cy="35" fill="#FF4E00" r="6" />
      <circle cx="62" cy="28" fill="#FF4E00" opacity=".7" r="4" />
      <path
        d="m82 34 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2-4.5-4.4 6.2-.9L82 34Z"
        fill="#FF4E00"
      />
    </svg>
  );
}

export function HeroArt() {
  return (
    <div className="relative mx-auto w-full max-w-[570px]">
      <div className="absolute -inset-7 rounded-[48%_52%_60%_40%/44%_45%_55%_56%] bg-white/45" />
      <div className="absolute -left-10 top-14 size-24 rounded-full bg-rusikwash-orange/10 blur-sm" />
      <div className="absolute -right-8 bottom-24 size-16 rounded-full bg-rusikwash-orange/80" />

      <div className="relative aspect-[4/5] overflow-hidden rounded-[48%_52%_58%_42%/42%_44%_56%_58%] border-[10px] border-white bg-rusikwash-teal shadow-[0_35px_70px_-35px_rgba(7,59,76,0.32)]">
        <img
          alt="A bright, neatly arranged laundry room"
          className="h-full w-full object-cover"
          decoding="async"
          src={images.hero}
        />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

        <Card
          className="absolute bottom-7 left-6 right-6 border border-white/70 bg-white/92 shadow-xl backdrop-blur-md"
          variant="default"
        >
          <CardContent className="flex items-center gap-3 p-4">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-rusikwash-teal/10 text-rusikwash-teal">
              <CheckIcon size={22} />
            </span>
            <div>
              <p className="text-sm font-semibold text-black">
                Pickup &amp; delivery included
              </p>
              <p className="text-xs text-black/60">
                Fresh clothes back in as little as 24 hours
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="absolute -right-5 top-7 flex items-center gap-2 rounded-2xl bg-white px-3 py-2.5 shadow-xl">
        <span className="flex size-8 items-center justify-center rounded-full bg-rusikwash-orange text-black">
          <StarIcon size={16} />
        </span>
        <div>
          <p className="text-sm font-bold leading-none text-black">4.9</p>
          <p className="mt-1 text-[10px] leading-none text-black/60">
            2,400+ reviews
          </p>
        </div>
      </div>

      <div className="absolute -left-7 top-1/2 hidden size-14 items-center justify-center rounded-full bg-rusikwash-orange text-black shadow-xl sm:flex">
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
      <div className="relative rounded-[44px] border-[7px] border-rusikwash-teal bg-rusikwash-teal p-2 shadow-2xl">
        <div className="overflow-hidden rounded-[36px] bg-white">
          <div className="flex items-center justify-between px-4 pb-2 pt-3">
            <span className="font-script text-xl font-bold text-black">
              rusikwash
            </span>
            <span className="flex size-6 items-center justify-center rounded-full bg-rusikwash-teal/10 text-rusikwash-teal">
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
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
              <p className="absolute bottom-3 left-3 max-w-[140px] text-sm font-semibold leading-tight text-white">
                Fresh clothes, zero effort.
              </p>
            </div>
          </div>
          <div className="p-3">
            <div className="flex items-center justify-between rounded-xl bg-rusikwash-orange/10 px-3 py-2">
              <span className="text-[10px] font-semibold text-black">
                Schedule a pickup
              </span>
              <span className="flex size-5 items-center justify-center rounded-full bg-rusikwash-orange text-black">
                <span className="text-[10px] font-bold">+</span>
              </span>
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2">
              {["Wash", "Dry", "Fold"].map((item) => (
                <div
                  key={item}
                  className="rounded-xl bg-rusikwash-teal/5 px-2 py-3 text-center text-[9px] font-medium text-black/70"
                >
                  <span className="mx-auto mb-1 block size-5 rounded-full bg-rusikwash-teal/10" />
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-3 flex items-center gap-2 rounded-xl bg-rusikwash-teal/5 p-2">
              <span className="size-8 rounded-full bg-rusikwash-orange/10" />
              <div className="space-y-1">
                <span className="block h-1.5 w-20 rounded-full bg-rusikwash-teal/10" />
                <span className="block h-1.5 w-14 rounded-full bg-rusikwash-teal/5" />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-around border-t border-rusikwash-teal/10 px-4 py-2 text-[8px] text-black/50">
            <span className="text-rusikwash-teal">Home</span>
            <span>Orders</span>
            <span>Account</span>
          </div>
        </div>
      </div>
    </div>
  );
}
