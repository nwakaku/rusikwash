export type IconKey =
  | "user"
  | "truck"
  | "sparkles"
  | "home"
  | "heart"
  | "wallet"
  | "shield"
  | "bell"
  | "shirt"
  | "shorts"
  | "kids"
  | "tie"
  | "tshirt"
  | "jeans";

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#how-it-works" },
  { label: "Services", href: "#services" },
  { label: "Price", href: "#price" },
  { label: "FAQ", href: "#delivery" },
  { label: "Contact Us", href: "#contact" },
];

export const processSteps: {
  icon: IconKey;
  title: string;
  description: string;
}[] = [
  {
    icon: "user",
    title: "Sign up",
    description:
      "Create your free RusikWash account in under a minute and tell us your laundry preferences.",
  },
  {
    icon: "truck",
    title: "Zero Pickup Cost",
    description:
      "Book a collection window and our friendly driver comes straight to your door.",
  },
  {
    icon: "sparkles",
    title: "Spotless Clean",
    description:
      "Every item is washed, dried, folded and checked by our laundry specialists.",
  },
  {
    icon: "home",
    title: "No Delivery Charges",
    description:
      "Fresh clothes arrive back at your door, beautifully folded and ready to wear.",
  },
];

export const serviceFeatures: {
  icon: IconKey;
  title: string;
  description: string;
  align: "left" | "right";
}[] = [
  {
    icon: "heart",
    title: "Personalised Experience",
    description:
      "Choose your detergent, folding style and fabric care for every single order.",
    align: "right",
  },
  {
    icon: "wallet",
    title: "Affordable Pricing",
    description:
      "Clear, upfront prices with no hidden fees and free collection every time.",
    align: "right",
  },
  {
    icon: "shield",
    title: "Quality",
    description:
      "Gentle cleaning and careful handling keep colours bright and fabrics feeling new.",
    align: "left",
  },
  {
    icon: "bell",
    title: "Instant Order Updates",
    description:
      "Track every step from pickup to delivery with helpful notifications.",
    align: "left",
  },
];

export const priceItems: {
  icon: IconKey;
  name: string;
  price: string;
  featured?: boolean;
}[] = [
  { icon: "shirt", name: "Shirts", price: "From $4.99" },
  { icon: "shorts", name: "Shorts", price: "From $6.99" },
  { icon: "kids", name: "Kids Ware", price: "$7.99", featured: true },
  { icon: "tie", name: "Tie", price: "From $3.99" },
  { icon: "tshirt", name: "T-Shirts", price: "From $4.49" },
  { icon: "jeans", name: "Jeans", price: "From $8.99" },
];

export const testimonials = [
  {
    name: "Aida Bugg",
    role: "Busy parent, Brooklyn",
    quote:
      "I used to dread laundry day. Now RusikWash picks up, cleans and returns everything looking brand new. It honestly feels like a small luxury.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Marcus Chen",
    role: "Founder, Studio North",
    quote:
      "The collection window is always on time and our team's shirts come back crisp. RusikWash quietly makes the whole office run smoother.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Sofia Reyes",
    role: "Interior designer",
    quote:
      "They treat every fabric like it belongs to them. My delicate pieces have never looked better, and the folded delivery is a joy.",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Daniel Brooks",
    role: "Restaurant owner",
    quote:
      "From table linens to uniforms, RusikWash handles our weekly volume without a single missed pickup. Reliable every single week.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Maya Patel",
    role: "Yoga teacher",
    quote:
      "My studio towels and activewear come back soft and fresh. The app updates make it effortless to plan around my classes.",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=300&q=80",
  },
];

export const images = {
  hero: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&w=1000&q=85",
  services:
    "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&w=900&q=85",
  app: "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?auto=format&fit=crop&w=700&q=85",
};
