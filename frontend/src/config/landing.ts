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

export type ProcessIllustrationKey = "account" | "pickup" | "wash" | "delivery";

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
  illustration: ProcessIllustrationKey;
  title: string;
  description: string;
}[] = [
  {
    icon: "user",
    illustration: "account",
    title: "Sign up",
    description:
      "Create your free RusikWash account in under a minute and tell us your laundry preferences.",
  },
  {
    icon: "truck",
    illustration: "pickup",
    title: "Zero Pickup Cost",
    description:
      "Book a collection window and our friendly driver comes straight to your door.",
  },
  {
    icon: "sparkles",
    illustration: "wash",
    title: "Spotless Clean",
    description:
      "Every item is washed, dried, folded and checked by our laundry specialists.",
  },
  {
    icon: "home",
    illustration: "delivery",
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
  image: string;
  featured?: boolean;
}[] = [
  {
    icon: "shirt",
    name: "Shirts",
    image:
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=400&q=85",
  },
  {
    icon: "shorts",
    name: "Shorts",
    image:
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=400&q=85",
  },
  {
    icon: "kids",
    name: "Kids Wear",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1503919005314-30d93d07d823?auto=format&fit=crop&w=400&q=85",
  },
  {
    icon: "tie",
    name: "Tie",
    image:
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=400&q=85",
  },
  {
    icon: "tshirt",
    name: "T-Shirts",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=400&q=85",
  },
  {
    icon: "jeans",
    name: "Jeans",
    image:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=400&q=85",
  },
];

export const testimonials = [
  {
    name: "Aida Bugg",
    role: "Busy parent, Brooklyn",
    quote:
      "I used to dread laundry day. Now RusikWash picks up, cleans and returns everything looking brand new. It honestly feels like a small luxury.",
    image:
      "https://images.pexels.com/photos/36338866/pexels-photo-36338866.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "Marcus Chen",
    role: "Founder, Studio North",
    quote:
      "The collection window is always on time and our team's shirts come back crisp. RusikWash quietly makes the whole office run smoother.",
    image:
      "https://images.pexels.com/photos/13801809/pexels-photo-13801809.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "Sofia Reyes",
    role: "Interior designer",
    quote:
      "They treat every fabric like it belongs to them. My delicate pieces have never looked better, and the folded delivery is a joy.",
    image:
      "https://images.pexels.com/photos/2520446/pexels-photo-2520446.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "Daniel Brooks",
    role: "Restaurant owner",
    quote:
      "From table linens to uniforms, RusikWash handles our weekly volume without a single missed pickup. Reliable every single week.",
    image:
      "https://images.pexels.com/photos/34630594/pexels-photo-34630594.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "Maya Patel",
    role: "Yoga teacher",
    quote:
      "My studio towels and activewear come back soft and fresh. The app updates make it effortless to plan around my classes.",
    image:
      "https://images.pexels.com/photos/7552695/pexels-photo-7552695.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
];

export const images = {
  hero: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&w=1000&q=85",
  services:
    "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&w=900&q=85",
  app: "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?auto=format&fit=crop&w=700&q=85",
};
