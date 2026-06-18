import logo from "./assets/sagar-logo.png";
import heroPoultry from "./assets/hero-poultry.png";
import aboutCollage from "./assets/about-collage.png";
import farmStory from "./assets/farm-story.png";
import broilerFeed from "./assets/product-broiler.png";
import premiumFeed from "./assets/product-premium.png";
import pigFeed from "./assets/product-pig.png";
import fishFeed from "./assets/product-fish.png";
import duckFeed from "./assets/product-duck.png";
import cattleFeed from "./assets/product-cattle.png";

export const assets = {
  logo,
  heroPoultry,
  aboutCollage,
  farmStory,
};

export const navLinks = [
  ["Home", "/"],
  ["About Us", "/about"],
  ["Products", "/products"],
  ["Network", "/network"],
  ["Contact", "/contact"],
];

export const quickLinks = [
  ["About Us", "/about"],
  ["Products", "/products"],
  ["Distribution Network", "/network"],
  ["Farmer Support", "/farmer-support"],
  ["Collaborations", "/collaborations"],
  ["Social Responsibility", "/social-responsibility"],
  ["Contact", "/contact"],
];

export const stats = [
  ["100 Tons", "Daily Production"],
  ["320 +", "Dealers"],
  ["1500 +", "Sub-dealers"],
  ["2200 +", "Farmer Networks"],
];

export const achievements = [
  ...stats,
  ["30+", "Direct Staff"],
  ["155 +", "Employment Opportunities"],
];

export const whyChoose = [
  ["Quality-Focused Production", "Scientifically balanced formulations using carefully selected raw materials for optimal nutrition."],
  ["Nationwide Distribution", "Extensive network of dealers and regional depots ensuring accessibility across Nepal."],
  ["Technical Support", "Regular training and field visits by veterinarians and technical experts."],
  ["Social Responsibility", "Active participation in community development and agricultural support programs."],
];

export const products = [
  {
    title: "Broiler Feed",
    image: broilerFeed,
    text: "High-performance feed formulated to ensure rapid growth, strong immunity, and better feed conversion ratios.",
    points: ["Rapid growth support", "Strong immunity boost", "Better feed conversion ratio", "Optimal nutrition balance"],
  },
  {
    title: "Premium Feed",
    image: premiumFeed,
    text: "Advanced feed solutions enriched with essential nutrients to maximize productivity and overall animal health.",
    points: ["Enhanced nutritional value", "Maximum productivity", "Improved animal health", "Premium quality ingredients"],
  },
  {
    title: "Pig Feed",
    image: pigFeed,
    text: "Carefully balanced nutrition to support healthy growth, reproduction, and efficient weight gain.",
    points: ["Healthy growth support", "Improved reproduction", "Efficient weight gain", "Balanced nutrition"],
  },
  {
    title: "Fish Feed",
    image: fishFeed,
    text: "Floating and sinking feed varieties designed for optimal aquatic growth and sustainability.",
    points: ["Optimal aquatic growth", "Sustainable formulation", "Multiple feed varieties", "Water quality friendly"],
  },
  {
    title: "Duck Feed",
    image: duckFeed,
    text: "Specially formulated feed to support egg production, growth, and disease resistance in ducks.",
    points: ["Enhanced egg production", "Growth support", "Disease resistance", "Complete nutrition"],
  },
  {
    title: "Cattle Feed (Cow & Buffalo)",
    image: cattleFeed,
    text: "Nutritious feed that enhances milk production, improves digestion, and ensures overall livestock wellness.",
    points: ["Enhanced milk production", "Improved digestion", "Overall wellness", "High-quality ingredients"],
  },
];

export const locations = ["Hile", "Janakpur", "Duhabi", "Lahan", "Katari", "Bardibas", "Beltar", "Sankhuwasabha"];
