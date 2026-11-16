import { LazyMotion, domAnimation } from "motion/react";

import { LandingFooter } from "@/components/landing/landing-footer";
import { LandingNavbar } from "@/components/landing/landing-navbar";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LazyMotion features={domAnimation}>
      <div className="min-h-screen bg-white font-sans text-[#161B1C]">
        <LandingNavbar />
        <main>{children}</main>
        <LandingFooter />
      </div>
    </LazyMotion>
  );
}
