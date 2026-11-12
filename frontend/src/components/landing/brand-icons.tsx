import * as React from "react";

import { IconSvgProps } from "@/types";

const baseProps = {
  "aria-hidden": true,
  fill: "none",
  focusable: false,
  stroke: "currentColor",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  strokeWidth: 1.8,
  viewBox: "0 0 24 24",
};

export const ArrowRightIcon: React.FC<IconSvgProps> = ({
  size = 20,
  ...props
}) => (
  <svg {...baseProps} height={size} width={size} {...props}>
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </svg>
);

export const PhoneIcon: React.FC<IconSvgProps> = ({ size = 20, ...props }) => (
  <svg {...baseProps} height={size} width={size} {...props}>
    <path d="M6.6 3.5h3l1.2 4-2 1.4a15.6 15.6 0 0 0 6.3 6.3l1.4-2 4 1.2v3a2 2 0 0 1-2.2 2A17.6 17.6 0 0 1 4.6 5.7a2 2 0 0 1 2-2.2Z" />
  </svg>
);

export const ClockIcon: React.FC<IconSvgProps> = ({ size = 20, ...props }) => (
  <svg {...baseProps} height={size} width={size} {...props}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 2" />
  </svg>
);

export const MenuIcon: React.FC<IconSvgProps> = ({ size = 24, ...props }) => (
  <svg {...baseProps} height={size} width={size} {...props}>
    <path d="M4 7h16" />
    <path d="M4 12h16" />
    <path d="M4 17h16" />
  </svg>
);

export const CloseIcon: React.FC<IconSvgProps> = ({ size = 24, ...props }) => (
  <svg {...baseProps} height={size} width={size} {...props}>
    <path d="m6 6 12 12" />
    <path d="M18 6 6 18" />
  </svg>
);

export const CheckIcon: React.FC<IconSvgProps> = ({ size = 20, ...props }) => (
  <svg {...baseProps} height={size} width={size} {...props}>
    <path d="m5 12.5 4.2 4L19 7" />
  </svg>
);

export const MapPinIcon: React.FC<IconSvgProps> = ({ size = 20, ...props }) => (
  <svg {...baseProps} height={size} width={size} {...props}>
    <path d="M19 10.2c0 5.2-7 10.3-7 10.3s-7-5.1-7-10.3a7 7 0 1 1 14 0Z" />
    <circle cx="12" cy="10" r="2.4" />
  </svg>
);

export const MailIcon: React.FC<IconSvgProps> = ({ size = 20, ...props }) => (
  <svg {...baseProps} height={size} width={size} {...props}>
    <rect height="14" rx="3" width="18" x="3" y="5" />
    <path d="m4 7 8 6 8-6" />
  </svg>
);

export const StarIcon: React.FC<IconSvgProps> = ({ size = 18, ...props }) => (
  <svg
    aria-hidden
    fill="currentColor"
    focusable={false}
    height={size}
    viewBox="0 0 24 24"
    width={size}
    {...props}
  >
    <path d="m12 2.8 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2L3 9.4l6.2-.9L12 2.8Z" />
  </svg>
);

export const QuoteIcon: React.FC<IconSvgProps> = ({ size = 32, ...props }) => (
  <svg
    aria-hidden
    fill="currentColor"
    focusable={false}
    height={size}
    viewBox="0 0 48 36"
    width={size}
    {...props}
  >
    <path d="M0 36V22.8C0 9.6 7.5 1.7 21.2 0l2.3 5.2c-7.4 2.4-11 6.3-11.2 11.5H21V36H0Zm27 0V22.8C27 9.6 34.5 1.7 48 0l2.3 5.2c-7.4 2.4-11 6.3-11.2 11.5H48V36H27Z" />
  </svg>
);

export const UserIcon: React.FC<IconSvgProps> = ({ size = 24, ...props }) => (
  <svg {...baseProps} height={size} width={size} {...props}>
    <circle cx="12" cy="8" r="3.5" />
    <path d="M5 20c.6-3.5 3.3-5.5 7-5.5s6.4 2 7 5.5" />
  </svg>
);

export const TruckIcon: React.FC<IconSvgProps> = ({ size = 24, ...props }) => (
  <svg {...baseProps} height={size} width={size} {...props}>
    <path d="M3 7h10v9H3z" />
    <path d="M13 10h4l4 4v2h-8" />
    <circle cx="7" cy="18" r="1.7" />
    <circle cx="17" cy="18" r="1.7" />
  </svg>
);

export const SparklesIcon: React.FC<IconSvgProps> = ({
  size = 24,
  ...props
}) => (
  <svg {...baseProps} height={size} width={size} {...props}>
    <path d="M12 3.5c.8 3.8 2.7 5.7 6.5 6.5-3.8.8-5.7 2.7-6.5 6.5-.8-3.8-2.7-5.7-6.5-6.5 3.8-.8 5.7-2.7 6.5-6.5Z" />
    <path d="M19 15.5c.4 1.8 1.2 2.6 3 3-1.8.4-2.6 1.2-3 3-.4-1.8-1.2-2.6-3-3 1.8-.4 2.6-1.2 3-3Z" />
  </svg>
);

export const HomeIcon: React.FC<IconSvgProps> = ({ size = 24, ...props }) => (
  <svg {...baseProps} height={size} width={size} {...props}>
    <path d="m3.5 11 8.5-7 8.5 7" />
    <path d="M5.5 9.5V20h13V9.5" />
    <path d="M10 20v-5h4v5" />
  </svg>
);

export const HeartIcon: React.FC<IconSvgProps> = ({ size = 24, ...props }) => (
  <svg {...baseProps} height={size} width={size} {...props}>
    <path d="M20.8 5.8a5 5 0 0 0-7.1 0L12 7.5l-1.7-1.7a5 5 0 0 0-7.1 7.1L12 21l8.8-8.1a5 5 0 0 0 0-7.1Z" />
  </svg>
);

export const WalletIcon: React.FC<IconSvgProps> = ({ size = 24, ...props }) => (
  <svg {...baseProps} height={size} width={size} {...props}>
    <rect height="14" rx="3" width="18" x="3" y="5" />
    <path d="M3 9h18" />
    <path d="M16 14h2" />
  </svg>
);

export const ShieldIcon: React.FC<IconSvgProps> = ({ size = 24, ...props }) => (
  <svg {...baseProps} height={size} width={size} {...props}>
    <path d="M12 3.5 19 6v5.2c0 4.4-2.8 7.6-7 9.3-4.2-1.7-7-4.9-7-9.3V6l7-2.5Z" />
    <path d="m9 11.8 2 2 4-4" />
  </svg>
);

export const BellIcon: React.FC<IconSvgProps> = ({ size = 24, ...props }) => (
  <svg {...baseProps} height={size} width={size} {...props}>
    <path d="M6.5 10a5.5 5.5 0 0 1 11 0c0 5 2 6 2 6h-15s2-1 2-6Z" />
    <path d="M10 19a2.2 2.2 0 0 0 4 0" />
  </svg>
);

export const ShirtIcon: React.FC<IconSvgProps> = ({ size = 64, ...props }) => (
  <svg
    aria-hidden
    fill="none"
    focusable={false}
    height={size}
    viewBox="0 0 64 64"
    width={size}
    {...props}
  >
    <path
      d="M23 12 12 20l5 9 6-3v25h18V26l6 3 5-9-11-8-4 5h-10l-4-5Z"
      fill="currentColor"
      opacity=".9"
    />
    <path d="m27 17 5 5 5-5" stroke="white" strokeLinejoin="round" />
    <path d="M31 24v25" stroke="white" strokeOpacity=".5" />
  </svg>
);

export const ShortsIcon: React.FC<IconSvgProps> = ({ size = 64, ...props }) => (
  <svg
    aria-hidden
    fill="none"
    focusable={false}
    height={size}
    viewBox="0 0 64 64"
    width={size}
    {...props}
  >
    <path
      d="M18 12h28l2 39H36l-2-16h-4l-2 16H16l2-39Z"
      fill="currentColor"
      opacity=".9"
    />
    <path d="M18 20h28" stroke="white" strokeOpacity=".7" />
    <path d="M31 35h2" stroke="white" />
  </svg>
);

export const KidsWareIcon: React.FC<IconSvgProps> = ({
  size = 64,
  ...props
}) => (
  <svg
    aria-hidden
    fill="none"
    focusable={false}
    height={size}
    viewBox="0 0 64 64"
    width={size}
    {...props}
  >
    <path
      d="M25 12 15 19l4 7 5-2v10c0 11 8 18 8 18s8-7 8-18V24l5 2 4-7-10-7-2 3h-10l-2-3Z"
      fill="currentColor"
      opacity=".9"
    />
    <path d="M32 18v33" stroke="white" strokeOpacity=".5" />
    <path
      d="m32 34 1.5 3 3 .4-2.2 2.1.5 3-2.8-1.5-2.8 1.5.5-3-2.2-2.1 3-.4L32 34Z"
      fill="white"
      opacity=".8"
    />
  </svg>
);

export const TieIcon: React.FC<IconSvgProps> = ({ size = 64, ...props }) => (
  <svg
    aria-hidden
    fill="none"
    focusable={false}
    height={size}
    viewBox="0 0 64 64"
    width={size}
    {...props}
  >
    <path d="m26 10 6-4 6 4-3 7h-6l-3-7Z" fill="currentColor" opacity=".9" />
    <path d="m29 17 3 25 3-25h-6Z" fill="currentColor" opacity=".9" />
    <path d="m32 42-6 12 6 4 6-4-6-12Z" fill="currentColor" opacity=".9" />
  </svg>
);

export const TShirtIcon: React.FC<IconSvgProps> = ({ size = 64, ...props }) => (
  <svg
    aria-hidden
    fill="none"
    focusable={false}
    height={size}
    viewBox="0 0 64 64"
    width={size}
    {...props}
  >
    <path
      d="M24 12 12 19l5 9 6-3v25h18V25l6 3 5-9-12-7-5 4-5-4Z"
      fill="currentColor"
      opacity=".9"
    />
    <path d="M27 16c1 2 3 3 5 3s4-1 5-3" stroke="white" />
    <path d="M32 28v20" stroke="white" strokeOpacity=".45" />
  </svg>
);

export const JeansIcon: React.FC<IconSvgProps> = ({ size = 64, ...props }) => (
  <svg
    aria-hidden
    fill="none"
    focusable={false}
    height={size}
    viewBox="0 0 64 64"
    width={size}
    {...props}
  >
    <path
      d="M20 10h24l1 42H34l-2-25-2 25H19l1-42Z"
      fill="currentColor"
      opacity=".9"
    />
    <path d="M20 19h24" stroke="white" strokeOpacity=".7" />
    <path d="M24 10v9M40 10v9" stroke="white" strokeOpacity=".7" />
    <path d="M23 23h5v5h-5zM36 23h5v5h-5z" fill="white" opacity=".7" />
  </svg>
);

export const PlayStoreIcon: React.FC<IconSvgProps> = ({
  size = 26,
  ...props
}) => (
  <svg
    aria-hidden
    fill="none"
    focusable={false}
    height={size}
    viewBox="0 0 24 24"
    width={size}
    {...props}
  >
    <path d="m4 3 10.4 9L4 21V3Z" fill="#34A853" />
    <path d="m4 3 13 6.4L14.4 12 4 3Z" fill="#4285F4" />
    <path d="m4 21 10.4-9L17 14.6 4 21Z" fill="#EA4335" />
    <path
      d="M14.4 12 17 9.4l3 1.5c.8.4.8 1.4 0 1.8l-3 1.5L14.4 12Z"
      fill="#FBBC04"
    />
  </svg>
);

export const AppStoreIcon: React.FC<IconSvgProps> = ({
  size = 26,
  ...props
}) => (
  <svg
    aria-hidden
    fill="currentColor"
    focusable={false}
    height={size}
    viewBox="0 0 24 24"
    width={size}
    {...props}
  >
    <path d="M16.7 12.8c0-2.1 1.7-3.1 1.8-3.2-1-1.4-2.5-1.6-3-1.6-1.3-.1-2.5.8-3.1.8-.7 0-1.7-.8-2.8-.8-1.4 0-2.8.8-3.5 2.1-1.5 2.6-.4 6.4 1.1 8.5.7 1 1.5 2.2 2.6 2.2 1.1 0 1.5-.7 2.8-.7 1.3 0 1.6.7 2.8.7 1.2 0 1.9-1 2.6-2 .8-1.2 1.2-2.3 1.2-2.4-.1 0-2.5-1-2.5-3.6ZM14.6 6.6c.6-.8 1-1.9.9-3-.9 0-2 .6-2.7 1.4-.6.7-1.1 1.8-.9 2.9 1 .1 2-.5 2.7-1.3Z" />
  </svg>
);

export const FacebookIcon: React.FC<IconSvgProps> = ({
  size = 18,
  ...props
}) => (
  <svg
    aria-hidden
    fill="currentColor"
    focusable={false}
    height={size}
    viewBox="0 0 24 24"
    width={size}
    {...props}
  >
    <path d="M14 8h3V4h-3c-3 0-5 2-5 5v2H6v4h3v7h4v-7h3.5l.5-4H13V9c0-.7.3-1 1-1Z" />
  </svg>
);

export const InstagramIcon: React.FC<IconSvgProps> = ({
  size = 18,
  ...props
}) => (
  <svg {...baseProps} height={size} width={size} {...props}>
    <rect height="16" rx="5" width="16" x="4" y="4" />
    <circle cx="12" cy="12" r="3.2" />
    <path d="M16.8 7.3h.1" />
  </svg>
);

export const TwitterIcon: React.FC<IconSvgProps> = ({
  size = 18,
  ...props
}) => (
  <svg
    aria-hidden
    fill="currentColor"
    focusable={false}
    height={size}
    viewBox="0 0 24 24"
    width={size}
    {...props}
  >
    <path d="M19.6 7.6c0 .2 0 .4 0 .6 0 6-4.6 13-13 13-2.6 0-5-.8-7-2.1.4 0 .7.1 1.1.1 2.1 0 4-.7 5.6-1.9a4.6 4.6 0 0 1-4.3-3.2c.3.1.6.1.9.1.4 0 .8-.1 1.2-.2a4.6 4.6 0 0 1-3.7-4.5V9c.6.3 1.3.5 2 .6A4.6 4.6 0 0 1 4.4 5c0-.5.2-1 .4-1.5a13 13 0 0 0 9.4 4.8 4.6 4.6 0 0 1 7.9-4.2 9 9 0 0 0 2.9-1.1 4.6 4.6 0 0 1-2 2.5c.9-.1 1.8-.4 2.6-.7-.1.1-1 .9-2 1.5-.2.1-.1.1-.2.2Z" />
  </svg>
);
