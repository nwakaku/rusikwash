import { Avatar, Button, Link } from "@heroui/react";
import { m as motion, useReducedMotion } from "motion/react";

import { testimonials } from "@/config/landing";

const heroCustomers = testimonials.slice(0, 3);

function Sparkle({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 1.5c.7 5.7 4.8 9.8 10.5 10.5-5.7.7-9.8 4.8-10.5 10.5-.7-5.7-4.8-9.8-10.5-10.5C7.2 11.3 11.3 7.2 12 1.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

function HeroWave() {
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute inset-x-0 bottom-0 z-[3] h-[150px] w-full sm:h-[165px] lg:h-[185px]"
      preserveAspectRatio="none"
      viewBox="0 0 1440 200"
    >
      {/* light blue curl */}
      <path
        d="M-40 100 Q80 20 200 100 T440 100 T680 100 T920 100 T1160 100 T1400 100 T1640 100"
        fill="none"
        stroke="#A9E8F5"
        strokeLinecap="round"
        strokeWidth="10"
      />
      {/* white fill, opposite phase so the two curls interlock */}
      <path
        d="M-40 120 Q80 200 200 120 T440 120 T680 120 T920 120 T1160 120 T1400 120 T1640 120 V200 H-40 Z"
        fill="#ffffff"
      />
    </svg>
  );
}

export function LandingHero() {
  const shouldReduceMotion = useReducedMotion();
  const scrollToPickup = () => {
    document.getElementById("how-it-works")?.scrollIntoView({
      behavior: shouldReduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <section
      className="relative isolate w-full overflow-hidden bg-[#CCF3FC] px-5 pb-28 pt-10 sm:px-6 lg:h-[550px] lg:px-0 lg:pb-0 lg:pt-0"
      id="home"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={
            shouldReduceMotion ? undefined : { x: [0, 12, 0], y: [0, -8, 0] }
          }
          className="absolute -left-16 top-8 size-52 rounded-full bg-white/35 blur-3xl"
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          animate={
            shouldReduceMotion ? undefined : { x: [0, -10, 0], y: [0, 12, 0] }
          }
          className="absolute -right-16 top-16 size-64 rounded-full bg-white/25 blur-3xl"
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute left-[37%] top-[19%] hidden size-3 rounded-full border-2 border-[#02A2D7]/45 lg:block" />
        <div className="absolute left-[47%] top-[64%] hidden size-4 rounded-full border-2 border-[#02A2D7]/35 lg:block" />
        <div className="absolute right-[17%] top-[13%] hidden size-2.5 rounded-full bg-[#02A2D7]/35 lg:block" />
        <div className="absolute right-[5%] bottom-[19%] hidden size-5 rounded-full border-2 border-[#02A2D7]/30 lg:block" />
      </div>

      <div className="relative z-10 h-full w-full">
        <motion.div
          animate={{ opacity: 1, x: 0 }}
          className="relative mx-auto max-w-xl lg:absolute lg:left-[9.26%] lg:top-[11%] lg:mx-0 lg:w-[40%] lg:max-w-none"
          initial={{
            opacity: shouldReduceMotion ? 1 : 0,
            x: shouldReduceMotion ? 0 : -24,
          }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.75,
            ease: "easeOut",
          }}
        >
          <h1 className="text-[clamp(1.75rem,8vw,3.125rem)] font-extrabold leading-[0.94] tracking-[-1.8px] text-black sm:text-[50px] sm:leading-[0.88] lg:text-[59px] lg:leading-[0.85] lg:tracking-[-2.5px]">
            Where every fabric
            <br />
            enjoys a <span className="text-[#FFD21A]">gentle</span>,
            <br />
            refreshing breeze
          </h1>

          <p className="mt-5 max-w-[390px] text-xs leading-4 text-[#3E5B61] sm:mt-6">
            Fresh, professionally cared-for laundry, collected and delivered on
            a schedule that works for you.
          </p>

          <motion.div
            className="mt-8 w-fit lg:absolute lg:left-[390px] lg:top-[150px] lg:mt-0"
            whileHover={
              shouldReduceMotion ? undefined : { scale: 1.06, rotate: 3 }
            }
            whileTap={shouldReduceMotion ? undefined : { scale: 0.96 }}
          >
            <Button
              aria-label="Schedule a pickup"
              className="flex size-[112px] min-w-[112px] flex-col items-center justify-center rounded-full !bg-[#FFD21A] p-0 text-[#161B1C] shadow-[0_12px_30px_rgba(255,210,26,0.28)] hover:!bg-[#F5C400] lg:size-[125px] lg:min-w-[125px]"
              onPress={scrollToPickup}
            >
              <span className="block w-[76px] rotate-[9deg] text-center text-xs font-bold uppercase leading-[1.3] tracking-[0.08em] underline underline-offset-[3px]">
                <img
                  alt="Pickup basket"
                  className="mx-auto mb-1 size-15"
                  src="/basket.png"
                />
              </span>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="relative mx-auto mt-8 w-full max-w-[430px] lg:absolute lg:right-[3%] lg:top-[2%] lg:mt-0 lg:h-[96%] lg:w-[48%] lg:max-w-none"
          initial={{
            opacity: shouldReduceMotion ? 1 : 0,
            y: shouldReduceMotion ? 0 : 28,
            scale: shouldReduceMotion ? 1 : 0.97,
          }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.9,
            delay: shouldReduceMotion ? 0 : 0.12,
            ease: "easeOut",
          }}
        >
          <div className="absolute inset-x-12 bottom-10 top-16 rounded-[50%] bg-white/25 blur-3xl" />
          <motion.img
            alt="Woman holding a basket of freshly cleaned laundry"
            className="relative h-auto w-full object-contain object-center drop-shadow-[0_26px_38px_rgba(22,27,28,0.12)] lg:h-full"
            decoding="async"
            src="/woman-model.png"
          />
        </motion.div>

        <HeroWave />

        <motion.div
          animate={{ opacity: 1, x: 0 }}
          className="absolute -bottom-2 -left-[50%] z-[4] w-[100%] sm:-left-[40%] sm:w-[80%] lg:-bottom-6 lg:-left-[24%] lg:w-[48%]"
          initial={{
            opacity: shouldReduceMotion ? 1 : 0,
            x: shouldReduceMotion ? 0 : -42,
          }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.8,
            delay: shouldReduceMotion ? 0 : 0.25,
            ease: "easeOut",
          }}
        >
          <div className="relative">
            <img
              alt="RusikWash delivery van"
              className="h-auto w-full -scale-x-100 object-contain drop-shadow-2xl"
              decoding="async"
              src="/hero-delivery-van.png"
            />
            <div className="absolute left-[23%] top-[39%] flex h-[22%] w-[34%] items-center justify-center rounded-[4px] bg-[#05AFC2] text-[clamp(7px,0.8vw,11px)] font-bold tracking-tight text-white">
              rusikwash
            </div>
          </div>
        </motion.div>

        <motion.div
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="relative z-20 mx-auto -mt-6 flex w-max items-center gap-3 rounded-full bg-white/95 py-2 pl-2 pr-5 shadow-xl shadow-[#161B1C]/10 backdrop-blur sm:absolute sm:left-[52%] sm:top-[64%] sm:mx-0 lg:left-[53.7%] lg:top-[67%]"
          initial={{
            opacity: shouldReduceMotion ? 1 : 0,
            y: shouldReduceMotion ? 0 : 12,
            scale: shouldReduceMotion ? 1 : 0.96,
          }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.5,
            delay: shouldReduceMotion ? 0 : 0.45,
          }}
        >
          <div className="flex items-center">
            <div className="flex -space-x-3">
              {heroCustomers.map((customer) => (
                <Avatar
                  key={customer.name}
                  className="size-10 shrink-0 border-2 border-white"
                  size="sm"
                >
                  <Avatar.Image alt={customer.name} src={customer.image} />
                  <Avatar.Fallback>{customer.name.slice(0, 1)}</Avatar.Fallback>
                </Avatar>
              ))}
            </div>
            <span className="-ml-3 flex size-10 shrink-0 items-center justify-center rounded-full border-2 border-white bg-[#FFD21A] text-[10px] font-bold text-[#161B1C]">
              +30K
            </span>
          </div>

          <span className="whitespace-nowrap text-[10px] font-bold uppercase leading-[1.2] tracking-[0.08em] text-[#161B1C]">
            Happy
            <br />
            customers
          </span>
        </motion.div>

        <Link
          className="absolute -right-px top-[122px] z-30 hidden h-[161px] w-[50px] items-center justify-center rounded-l-2xl !bg-[#FFD21A] text-[11px] font-bold tracking-[0.02em] text-[#161B1C] no-underline hover:!bg-[#F5C400] data-[hover=true]:no-underline xl:flex [writing-mode:vertical-rl]"
          href="tel:18007654321"
        >
          1 (800) 765-43-21
        </Link>

        <motion.div
          animate={
            shouldReduceMotion
              ? undefined
              : { opacity: [0.45, 1, 0.45], scale: [0.9, 1.15, 0.9] }
          }
          className="absolute left-[42%] top-[34%] z-20 hidden lg:block"
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <Sparkle className="size-3 text-[#FFD21A]" />
        </motion.div>
        <motion.div
          animate={
            shouldReduceMotion
              ? undefined
              : { opacity: [0.4, 1, 0.4], scale: [0.9, 1.2, 0.9] }
          }
          className="absolute left-[47%] top-[68%] z-20 hidden lg:block"
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <Sparkle className="size-2.5 text-[#FFD21A]/80" />
        </motion.div>
        <motion.div
          animate={
            shouldReduceMotion
              ? undefined
              : { opacity: [0.5, 1, 0.5], scale: [0.9, 1.12, 0.9] }
          }
          className="absolute right-[7%] top-[10%] z-20 hidden lg:block"
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Sparkle className="size-3.5 text-[#FFD21A]" />
        </motion.div>
      </div>
    </section>
  );
}
