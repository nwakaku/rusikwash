import { Button, Link } from "@heroui/react";
import { m as motion, useReducedMotion } from "motion/react";

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
      className="pointer-events-none absolute inset-x-0 bottom-0 z-[3] hidden h-[150px] w-full sm:block sm:h-[165px] lg:h-[185px]"
      preserveAspectRatio="none"
      viewBox="0 0 1440 200"
    >
      <path
        d="M0 104C170 145 315 166 480 143s280-84 445-72 307 57 515 26v103H0V104Z"
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
      className="relative isolate w-full overflow-hidden bg-rusikwash-teal px-5 pb-28 pt-10 sm:px-6 lg:h-[550px] lg:px-0 lg:pb-0 lg:pt-0"
      id="home"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={
            shouldReduceMotion ? undefined : { x: [0, 12, 0], y: [0, -8, 0] }
          }
          className="absolute -left-16 top-8 size-52 rounded-full bg-white/10 blur-3xl"
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          animate={
            shouldReduceMotion ? undefined : { x: [0, -10, 0], y: [0, 12, 0] }
          }
          className="absolute -right-16 top-16 size-64 rounded-full bg-white/10 blur-3xl"
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute left-[37%] top-[19%] hidden size-3 rounded-full border-2 border-white/25 lg:block" />
        <div className="absolute left-[47%] top-[64%] hidden size-4 rounded-full border-2 border-white/20 lg:block" />
        <div className="absolute right-[17%] top-[13%] hidden size-2.5 rounded-full bg-white/25 lg:block" />
        <div className="absolute right-[5%] bottom-[19%] hidden size-5 rounded-full border-2 border-white/20 lg:block" />
      </div>

      <div className="relative z-10 h-full w-full">
        <motion.div
          animate={{ opacity: 1, x: 0 }}
          className="relative mx-auto max-w-xl lg:absolute lg:left-[9.26%] lg:top-[11%] lg:mx-0 lg:w-[43%] lg:max-w-none"
          initial={{
            opacity: shouldReduceMotion ? 1 : 0,
            x: shouldReduceMotion ? 0 : -24,
          }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.75,
            ease: "easeOut",
          }}
        >
          <div className="mb-5 inline-flex max-w-full rounded-xl border border-white/10 bg-white/20 px-4 py-2 text-[clamp(0.875rem,3.8vw,1rem)] font-bold leading-tight text-white shadow-sm sm:mb-6 sm:rounded-2xl sm:px-5 sm:py-3">
            Get 10% OFF your first laundry pickup!
          </div>

          <h1 className="text-[clamp(1.875rem,8.6vw,2.375rem)] font-extrabold uppercase leading-[0.94] tracking-[-1.8px] text-white sm:text-[50px] sm:leading-[0.9] lg:text-[clamp(2.35rem,4.1vw,3.5rem)] lg:leading-[0.98] lg:tracking-[-2px]">
            <span className="block whitespace-nowrap">EVERY GARMENT.</span>
            <span className="block whitespace-nowrap">EVERY DETAIL.</span>
            <span className="mt-2 block whitespace-nowrap text-[clamp(1.125rem,4.8vw,1.5rem)] font-normal leading-tight tracking-[-0.5px] sm:mt-3 sm:text-[clamp(1.5rem,4vw,2.25rem)] lg:text-[clamp(1.5rem,2.5vw,2.25rem)] lg:tracking-[0.01em]">
              EXECUTIVELY CARED FOR.
            </span>
          </h1>

          <motion.div
            className="mt-7 w-fit sm:mt-8"
            whileHover={
              shouldReduceMotion ? undefined : { scale: 1.06, rotate: 3 }
            }
            whileTap={shouldReduceMotion ? undefined : { scale: 0.96 }}
          >
            <Button
              aria-label="Schedule a pickup"
              className="flex size-[112px] min-w-[112px] flex-col items-center justify-center rounded-full !bg-rusikwash-orange p-0 text-black shadow-[0_12px_30px_rgba(255,78,0,0.28)] hover:!bg-[#E64600] lg:size-[125px] lg:min-w-[125px]"
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
          className="relative left-1/2 z-10 mt-8 w-[calc(100%+2.5rem)] max-w-[480px] -translate-x-1/2 sm:left-auto sm:mx-auto sm:w-full sm:max-w-[430px] sm:translate-x-0 lg:absolute lg:right-[3%] lg:top-[2%] lg:mt-0 lg:h-[96%] lg:w-[48%] lg:max-w-none"
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
            alt="White embroidered agbada garments"
            className="relative h-auto w-full object-contain object-center drop-shadow-[0_26px_38px_rgba(7,59,76,0.12)] lg:h-full"
            decoding="async"
            src="/RusikAgbada.png"
          />
        </motion.div>

        <HeroWave />

        <Link
          className="absolute -right-px top-[122px] z-30 hidden h-[161px] w-[50px] items-center justify-center rounded-l-2xl !bg-rusikwash-orange text-[11px] font-bold tracking-[0.02em] text-black no-underline hover:!bg-[#E64600] data-[hover=true]:no-underline xl:flex [writing-mode:vertical-rl]"
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
          <Sparkle className="size-3 text-rusikwash-orange" />
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
          <Sparkle className="size-2.5 text-rusikwash-orange/80" />
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
          <Sparkle className="size-3.5 text-rusikwash-orange" />
        </motion.div>
      </div>
    </section>
  );
}
