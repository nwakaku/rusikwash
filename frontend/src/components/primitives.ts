import { tv } from "tailwind-variants";

export const title = tv({
  base: "tracking-tight inline font-semibold",
  variants: {
    color: {
      teal: "from-rusikwash-teal to-rusikwash-teal",
      violet: "from-rusikwash-orange to-rusikwash-teal",
      yellow: "from-rusikwash-orange to-rusikwash-teal",
      blue: "from-rusikwash-teal to-rusikwash-orange",
      cyan: "from-rusikwash-teal to-rusikwash-orange",
      green: "from-rusikwash-teal to-rusikwash-orange",
      pink: "from-rusikwash-orange to-rusikwash-teal",
      foreground: "from-rusikwash-black to-rusikwash-teal",
    },
    size: {
      sm: "text-3xl lg:text-4xl",
      md: "text-[2.3rem] lg:text-5xl",
      lg: "text-4xl lg:text-6xl",
    },
    fullWidth: {
      true: "w-full block",
    },
  },
  defaultVariants: {
    color: "teal",
    size: "md",
  },
  compoundVariants: [
    {
      color: [
        "teal",
        "violet",
        "yellow",
        "blue",
        "cyan",
        "green",
        "pink",
        "foreground",
      ],
      class: "bg-clip-text text-transparent bg-gradient-to-b",
    },
  ],
});

export const subtitle = tv({
  base: "w-full md:w-1/2 my-2 text-lg lg:text-xl text-muted block max-w-full",
  variants: {
    fullWidth: {
      true: "!w-full",
    },
  },
  defaultVariants: {
    fullWidth: true,
  },
});
