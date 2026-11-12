import { useState } from "react";
import type { ComponentType } from "react";
import {
  Avatar,
  Button,
  Card,
  CardContent,
  Chip,
  Link,
  IconChevronLeft,
  IconChevronRight,
} from "@heroui/react";
import clsx from "clsx";

import {
  IconKey,
  images,
  priceItems,
  processSteps,
  serviceFeatures,
  testimonials,
} from "@/config/landing";
import {
  ArrowRightIcon,
  AppStoreIcon,
  BellIcon,
  CheckIcon,
  HeartIcon,
  HomeIcon,
  JeansIcon,
  KidsWareIcon,
  MailIcon,
  PhoneIcon,
  PlayStoreIcon,
  QuoteIcon,
  ShieldIcon,
  ShirtIcon,
  ShortsIcon,
  SparklesIcon,
  StarIcon,
  TieIcon,
  TShirtIcon,
  TruckIcon,
  UserIcon,
  WalletIcon,
} from "@/components/landing/brand-icons";
import { LandingHero } from "@/components/landing/hero";
import {
  LaundryMark,
  PhoneMockup,
  VanArt,
  WaveDivider,
} from "@/components/landing/illustrations";
import { SectionHeading } from "@/components/landing/section-heading";
import LandingLayout from "@/layouts/landing";
import { IconSvgProps } from "@/types";

const iconMap: Record<IconKey, ComponentType<IconSvgProps>> = {
  user: UserIcon,
  truck: TruckIcon,
  sparkles: SparklesIcon,
  home: HomeIcon,
  heart: HeartIcon,
  wallet: WalletIcon,
  shield: ShieldIcon,
  bell: BellIcon,
  shirt: ShirtIcon,
  shorts: ShortsIcon,
  kids: KidsWareIcon,
  tie: TieIcon,
  tshirt: TShirtIcon,
  jeans: JeansIcon,
};

function Stars({ className }: { className?: string }) {
  return (
    <span className={clsx("inline-flex items-center gap-1", className)}>
      {Array.from({ length: 5 }).map((_, index) => (
        <StarIcon key={index} className="size-4" />
      ))}
    </span>
  );
}

function ServiceFeature({
  icon,
  title,
  description,
  align,
}: {
  icon: IconKey;
  title: string;
  description: string;
  align: "left" | "right";
}) {
  const Icon = iconMap[icon];

  return (
    <Card
      className={clsx(
        "group border border-transparent bg-transparent p-3 shadow-none transition-colors hover:bg-white/45",
        align === "right" ? "lg:text-right" : "lg:text-left",
      )}
      variant="transparent"
    >
      <CardContent
        className={clsx(
          "flex flex-col gap-3",
          align === "right" ? "lg:items-end" : "lg:items-start",
        )}
      >
        <span className="flex size-16 items-center justify-center rounded-[42%_58%_55%_45%/45%_42%_58%_55%] bg-white text-[#02A2D7] shadow-lg shadow-[#02A2D7]/10 transition-transform group-hover:-translate-y-1">
          <Icon size={28} />
        </span>
        <div>
          <h3 className="text-lg font-semibold tracking-tight text-[#161B1C]">
            {title}
          </h3>
          <p className="mt-2 max-w-xs text-sm leading-6 text-[#537076]">
            {description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

export default function IndexPage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const testimonial = testimonials[activeTestimonial];

  const showPrevious = () => {
    setActiveTestimonial(
      (current) => (current - 1 + testimonials.length) % testimonials.length,
    );
  };

  const showNext = () => {
    setActiveTestimonial((current) => (current + 1) % testimonials.length);
  };

  return (
    <LandingLayout>
      <LandingHero />

      <section className="relative bg-white py-10 sm:py-12" id="how-it-works">
        <div className="mx-auto max-w-[1350px] px-5 sm:px-6 lg:px-8">
          <SectionHeading
            
            subtitle="Get your clothes collected & delivered without lifting a finger. We handle the suds, you get the fresh."
            title="How It Works"
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((step, index) => {
              const Icon = iconMap[step.icon];

              return (
                <Card
                  key={step.title}
                  className="group relative items-center overflow-visible rounded-[30px] border border-[#E5F6FB] bg-white p-7 text-center shadow-[0_22px_45px_-38px_rgba(22,27,28,0.45)] transition duration-300 hover:-translate-y-1.5 hover:border-[#CDEFF8] hover:shadow-[0_26px_50px_-28px_rgba(2,162,215,0.28)]"
                  variant="default"
                >
                  <span className="absolute right-5 top-5 text-xs font-bold text-[#161B1C]/15">
                    0{index + 1}
                  </span>
                  <span className="absolute -right-2 top-12 text-[#FFD21A]">
                    <SparklesIcon className="size-5" />
                  </span>
                  <CardContent className="items-center gap-5">
                    <span className="relative flex size-20 items-center justify-center rounded-[42%_58%_55%_45%/45%_42%_58%_55%] bg-[#E4F8FE] text-[#02A2D7]">
                      <Icon size={32} />
                      <span className="absolute -bottom-1 -right-1 size-4 rounded-full bg-[#FFD21A]" />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold tracking-tight text-[#161B1C]">
                        {step.title}
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-[#667579]">
                        {step.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section
        className="relative overflow-hidden bg-[#D2F4FF] py-24 sm:py-28"
        id="services"
      >
        <WaveDivider className="-top-px h-16 sm:h-20" fill="#ffffff" flip />
        <WaveDivider className="-bottom-px h-16 sm:h-20" fill="#ffffff" />

        <div className="relative mx-auto max-w-[1350px] px-5 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Services"
            subtitle="Trusted Laundry Service"
            title="Care that fits around your life"
          />

          <div className="mt-16 grid items-center gap-8 lg:grid-cols-[1fr_1.1fr_1fr] lg:gap-4">
            <div className="order-2 space-y-2 lg:order-none">
              {serviceFeatures
                .filter((feature) => feature.align === "right")
                .map((feature) => (
                  <ServiceFeature key={feature.title} {...feature} />
                ))}
            </div>

            <div className="order-first relative mx-auto w-full max-w-[430px] lg:order-none">
              <div className="absolute -inset-5 rounded-[46%_54%_58%_42%/45%_45%_55%_55%] bg-white/45" />
              <div className="relative aspect-[4/4.35] overflow-hidden rounded-[46%_54%_52%_48%/42%_44%_56%_58%] border-[9px] border-white bg-white shadow-[0_30px_60px_-35px_rgba(2,162,215,0.65)]">
                <img
                  alt="A laundry basket filled with freshly cleaned clothes"
                  className="h-full w-full object-cover"
                  decoding="async"
                  loading="lazy"
                  src={images.services}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#161B1C]/30 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-5 -right-3 flex size-28 flex-col items-center justify-center rounded-full bg-[#FFD21A] text-center shadow-xl shadow-[#161B1C]/10 sm:-right-6 sm:size-32">
                <span className="text-xl font-bold leading-none text-[#161B1C] sm:text-2xl">
                  20%
                </span>
                <span className="mt-1 max-w-[80px] text-[10px] font-semibold leading-tight text-[#161B1C]/70">
                  off your first order
                </span>
              </div>
              <LaundryMark className="absolute -left-8 top-6 hidden size-20 sm:block" />
            </div>

            <div className="order-3 space-y-2 lg:order-none">
              {serviceFeatures
                .filter((feature) => feature.align === "left")
                .map((feature) => (
                  <ServiceFeature key={feature.title} {...feature} />
                ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-white py-20 sm:py-24" id="price">
        <div className="mx-auto max-w-[1350px] px-5 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Simple pricing"
            subtitle="Our prices are simple and affordable, making them easy on your pocket compared with high street prices."
            title="Our Dry Cleaning & Laundry Prices"
          />

          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {priceItems.map((item) => {
              const Icon = iconMap[item.icon];

              return (
                <Card
                  key={item.name}
                  className={clsx(
                    "group relative items-center gap-4 rounded-[30px] border border-transparent bg-white p-4 text-center shadow-[0_20px_40px_-38px_rgba(22,27,28,0.45)] transition duration-300 hover:-translate-y-1.5 hover:border-[#D2F4FF] hover:bg-[#F8FDFF]",
                    item.featured &&
                      "border-[#F6D6E2] bg-[#FFF7FA] hover:border-[#E982AA]/40 hover:bg-[#FFF7FA]",
                  )}
                  variant="transparent"
                >
                  {item.featured ? (
                    <Chip
                      className="absolute -top-2 left-1/2 -translate-x-1/2 !bg-[#E982AA] px-3 text-[10px] font-bold uppercase tracking-wider !text-white"
                      size="sm"
                      variant="primary"
                    >
                      Popular
                    </Chip>
                  ) : null}
                  <div
                    className={clsx(
                      "mt-2 flex size-24 items-center justify-center rounded-full border-2 border-dashed transition-transform duration-300 group-hover:scale-105 sm:size-28",
                      item.featured
                        ? "border-[#E982AA]/60 bg-[#FCE7EF] text-[#E982AA]"
                        : "border-[#FFEDAD] bg-[#FFFDF5] text-[#02A2D7]",
                    )}
                  >
                    <Icon className="size-14 sm:size-16" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#161B1C]">
                      {item.name}
                    </h3>
                    <p className="mt-1 text-xs font-medium text-[#667579]">
                      {item.price}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 text-center sm:flex-row">
            <p className="text-sm text-[#667579]">
              Need something specific? We clean bedding, curtains, shoes and
              more.
            </p>
            <Link
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#02A2D7] no-underline data-[hover=true]:no-underline"
              href="#contact"
            >
              View full price list
              <ArrowRightIcon className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <section
        className="relative overflow-hidden bg-[#FFEDAD] py-24 sm:py-28"
        id="testimonials"
      >
        <WaveDivider className="-top-px h-16 sm:h-20" fill="#ffffff" flip />
        <WaveDivider className="-bottom-px h-16 sm:h-20" fill="#ffffff" />

        <div className="relative mx-auto max-w-[1350px] px-5 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Real people, fresh clothes"
            subtitle="Trusted Laundry Service"
            title="What Our Clients Say"
          />

          <div className="mx-auto mt-14 max-w-5xl">
            <div className="grid items-center gap-6 lg:grid-cols-[110px_1fr_110px]">
              <div className="hidden justify-end gap-4 lg:flex lg:flex-col">
                {testimonials.slice(0, 2).map((person, index) => (
                  <Button
                    key={person.name}
                    isIconOnly
                    aria-label={`Read testimonial from ${person.name}`}
                    className={clsx(
                      "!h-16 !w-16 overflow-hidden rounded-full border-4 border-white/70 p-0 shadow-lg transition-transform hover:scale-105",
                      activeTestimonial === index &&
                        "border-[#02A2D7] ring-4 ring-[#02A2D7]/20",
                    )}
                    variant="ghost"
                    onPress={() => setActiveTestimonial(index)}
                  >
                    <Avatar className="size-full" size="lg">
                      <Avatar.Image
                        alt={person.name}
                        className="object-cover"
                        src={person.image}
                      />
                      <Avatar.Fallback>
                        {person.name.slice(0, 1)}
                      </Avatar.Fallback>
                    </Avatar>
                  </Button>
                ))}
              </div>

              <Card
                className="relative rounded-[36px] border border-white/70 bg-white/90 p-7 text-center shadow-2xl shadow-[#161B1C]/10 sm:p-10"
                variant="default"
              >
                <QuoteIcon
                  className="mx-auto mb-5 text-[#02A2D7]/20"
                  size={48}
                />
                <Avatar
                  className="mx-auto size-20 shadow-xl ring-4 ring-white"
                  size="lg"
                >
                  <Avatar.Image
                    alt={testimonial.name}
                    className="object-cover"
                    src={testimonial.image}
                  />
                  <Avatar.Fallback>
                    {testimonial.name.slice(0, 1)}
                  </Avatar.Fallback>
                </Avatar>
                <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#2D454A] sm:text-xl sm:leading-9">
                  “{testimonial.quote}”
                </p>
                <div className="mt-6">
                  <p className="text-sm font-bold text-[#161B1C]">
                    {testimonial.name}
                  </p>
                  <p className="mt-1 text-xs text-[#667579]">
                    {testimonial.role}
                  </p>
                </div>
                <Stars className="mt-4 text-[#FFD21A]" />

                <div className="mt-7 flex items-center justify-center gap-3">
                  <Button
                    isIconOnly
                    aria-label="Show previous testimonial"
                    className="size-11 rounded-full border border-[#161B1C]/10 bg-white text-[#161B1C] shadow-sm"
                    variant="outline"
                    onPress={showPrevious}
                  >
                    <IconChevronLeft className="size-5" />
                  </Button>
                  <span className="text-xs font-semibold text-[#667579]">
                    {activeTestimonial + 1} / {testimonials.length}
                  </span>
                  <Button
                    isIconOnly
                    aria-label="Show next testimonial"
                    className="size-11 rounded-full border border-[#161B1C]/10 bg-white text-[#161B1C] shadow-sm"
                    variant="outline"
                    onPress={showNext}
                  >
                    <IconChevronRight className="size-5" />
                  </Button>
                </div>
              </Card>

              <div className="hidden gap-4 lg:flex lg:flex-col">
                {testimonials.slice(2).map((person, index) => (
                  <Button
                    key={person.name}
                    isIconOnly
                    aria-label={`Read testimonial from ${person.name}`}
                    className={clsx(
                      "!h-16 !w-16 overflow-hidden rounded-full border-4 border-white/70 p-0 shadow-lg transition-transform hover:scale-105",
                      activeTestimonial === index + 2 &&
                        "border-[#02A2D7] ring-4 ring-[#02A2D7]/20",
                    )}
                    variant="ghost"
                    onPress={() => setActiveTestimonial(index + 2)}
                  >
                    <Avatar className="size-full" size="lg">
                      <Avatar.Image
                        alt={person.name}
                        className="object-cover"
                        src={person.image}
                      />
                      <Avatar.Fallback>
                        {person.name.slice(0, 1)}
                      </Avatar.Fallback>
                    </Avatar>
                  </Button>
                ))}
              </div>
            </div>

            <div className="mt-7 flex items-center justify-center gap-3 lg:hidden">
              {testimonials.map((person, index) => (
                <Button
                  key={person.name}
                  isIconOnly
                  aria-label={`Read testimonial from ${person.name}`}
                  className={clsx(
                    "!h-12 !w-12 overflow-hidden rounded-full border-2 border-white p-0 shadow-md",
                    activeTestimonial === index &&
                      "border-[#02A2D7] ring-2 ring-[#02A2D7]/20",
                  )}
                  variant="ghost"
                  onPress={() => setActiveTestimonial(index)}
                >
                  <Avatar className="size-full" size="sm">
                    <Avatar.Image
                      alt={person.name}
                      className="object-cover"
                      src={person.image}
                    />
                    <Avatar.Fallback>{person.name.slice(0, 1)}</Avatar.Fallback>
                  </Avatar>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative overflow-hidden bg-white py-20 sm:py-24"
        id="delivery"
      >
        <div className="pointer-events-none absolute right-0 top-10 hidden size-40 rounded-full bg-[#D2F4FF]/50 blur-2xl lg:block" />
        <div className="mx-auto grid max-w-[1350px] items-center gap-12 px-5 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div>
            <span className="relative flex size-20 items-center justify-center rounded-full bg-[#E9F9F0] text-[#1BAA72] shadow-lg shadow-[#1BAA72]/10">
              <PhoneIcon size={34} />
              <span className="absolute -right-1 top-1 flex size-6 items-center justify-center rounded-full bg-[#FFD21A] text-[#161B1C]">
                <SparklesIcon size={12} />
              </span>
            </span>
            <h2 className="mt-7 max-w-2xl text-3xl font-bold leading-tight tracking-tight text-[#161B1C] sm:text-4xl lg:text-[2.7rem]">
              Quality Service with Free Collection &amp; Delivery
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-[#667579]">
              Choose a pickup window that works for you. We collect, clean and
              return everything to your door, with no hidden collection or
              delivery fees.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                className="inline-flex items-center gap-3 rounded-full bg-[#FFD21A] px-5 py-3 text-sm font-bold text-[#161B1C] no-underline shadow-lg shadow-[#FFD21A]/25 transition-colors hover:bg-[#F5C400] data-[hover=true]:no-underline"
                href="tel:18007654321"
              >
                <PhoneIcon className="size-4" />1 (800) 765-43-21
              </Link>
              <Link
                className="inline-flex items-center gap-2 rounded-full border border-[#161B1C]/10 bg-[#F7FDFF] px-5 py-3 text-sm font-semibold text-[#161B1C] no-underline transition-colors hover:bg-[#D2F4FF] data-[hover=true]:no-underline"
                href="#contact"
              >
                Book a collection
                <ArrowRightIcon className="size-4" />
              </Link>
            </div>
            <div className="mt-8 grid max-w-lg gap-3 sm:grid-cols-2">
              {[
                "Free pickup & delivery",
                "Gentle fabric care",
                "24-hour turnaround",
                "Live order updates",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm text-[#4E666B]"
                >
                  <span className="flex size-5 items-center justify-center rounded-full bg-[#D2F4FF] text-[#02A2D7]">
                    <CheckIcon className="size-3" />
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[48%_52%_55%_45%/45%_45%_55%_55%] bg-[#F4FBFD]" />
            <VanArt className="relative mx-auto w-full max-w-[560px] -rotate-3" />
            <div className="absolute -right-2 -top-3 flex items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-xl">
              <span className="flex size-9 items-center justify-center rounded-full bg-[#E9F9F0] text-[#1BAA72]">
                <CheckIcon size={18} />
              </span>
              <div>
                <p className="text-xs font-bold text-[#161B1C]">On the way</p>
                <p className="mt-0.5 text-[10px] text-[#667579]">
                  Arriving in 20 min
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pb-24 pt-4 sm:pb-28" id="app">
        <div className="mx-auto max-w-[1350px] px-5 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[40px] bg-[#02A2D7] px-6 py-12 sm:px-10 lg:px-16 lg:py-16">
            <div className="pointer-events-none absolute -right-20 -top-24 size-80 rounded-full bg-white/10" />
            <div className="pointer-events-none absolute -bottom-32 left-1/3 size-72 rounded-full bg-[#0091C1]/40" />
            <div className="pointer-events-none absolute right-1/4 top-10 size-4 rounded-full bg-[#FFD21A]" />
            <div className="pointer-events-none absolute bottom-16 right-12 size-7 rounded-full bg-[#FFEDAD]/80" />

            <div className="relative grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
              <PhoneMockup />

              <div>
                <Chip
                  className="mb-5 border border-white/15 !bg-white/15 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] !text-white"
                  size="lg"
                  variant="soft"
                >
                  For homes &amp; businesses
                </Chip>
                <p className="font-script text-2xl font-bold text-[#FFD21A] sm:text-3xl">
                  Tap · Clean · Deliver
                </p>
                <h2 className="mt-3 max-w-xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
                  Laundry service for your business!
                </h2>
                <p className="mt-5 max-w-xl text-base leading-7 text-white/75">
                  Manage pickups, track orders and pay in seconds with the
                  RusikWash app. Perfect for busy homes, cafes, salons and
                  boutique hotels.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button
                    className="h-14 justify-start gap-3 rounded-2xl !bg-white px-5 text-left !text-[#161B1C] shadow-lg shadow-[#161B1C]/10 hover:!bg-[#F7FDFF]"
                    onPress={() =>
                      window.open(
                        "https://play.google.com",
                        "_blank",
                        "noopener,noreferrer",
                      )
                    }
                  >
                    <PlayStoreIcon className="size-6" />
                    <span className="flex flex-col">
                      <span className="text-[9px] font-medium uppercase tracking-wider text-[#667579]">
                        Get it on
                      </span>
                      <span className="text-sm font-bold">Google Play</span>
                    </span>
                  </Button>
                  <Button
                    className="h-14 justify-start gap-3 rounded-2xl !bg-[#161B1C] px-5 text-left !text-white shadow-lg shadow-[#161B1C]/20 hover:!bg-[#223033]"
                    onPress={() =>
                      window.open(
                        "https://www.apple.com/app-store/",
                        "_blank",
                        "noopener,noreferrer",
                      )
                    }
                  >
                    <AppStoreIcon className="size-6" />
                    <span className="flex flex-col">
                      <span className="text-[9px] font-medium uppercase tracking-wider text-white/60">
                        Download on the
                      </span>
                      <span className="text-sm font-bold">App Store</span>
                    </span>
                  </Button>
                </div>

                <div className="mt-7 flex items-center gap-4 text-xs text-white/60">
                  <span className="flex items-center gap-1.5">
                    <StarIcon className="size-3.5 text-[#FFD21A]" />
                    4.9 app rating
                  </span>
                  <span className="h-3 w-px bg-white/20" />
                  <span className="flex items-center gap-1.5">
                    <MailIcon className="size-3.5 text-[#FFD21A]" />
                    Weekly business plans
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </LandingLayout>
  );
}
