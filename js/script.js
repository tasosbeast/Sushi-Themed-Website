// import images as relative image path won't work with vite/vercel.
import check from "../assets/check.svg";
import star from "../assets/star.svg";
import sushi1 from "../assets/sushi-1.png";
import sushi2 from "../assets/sushi-2.png";
import sushi3 from "../assets/sushi-3.png";
import sushi4 from "../assets/sushi-4.png";
import sushi5 from "../assets/sushi-5.png";
import sushi6 from "../assets/sushi-6.png";
import sushi7 from "../assets/sushi-7.png";
import sushi8 from "../assets/sushi-8.png";
import sushi9 from "../assets/sushi-9.png";
import sushi12 from "../assets/sushi-12.png";
import sushi11 from "../assets/sushi-11.png";
import sushi10 from "../assets/sushi-10.png";

import AOS from "aos";
import "aos/dist/aos.css";

// init AOS animation
AOS.init({
  duration: 1000,
  offset: 100,
  once: true, // trigger animations a single time per element
});

const trendingSushis = [
  "Make Sushi",
  "Nigiri Sushi",
  "Oshizushi",
  "Temaki Sushi",
  "Uramaki Sushi",
  "Inari Sushi",
];

const trendingDrinks = [
  "Oruncha",
  "Ofukucha",
  "Sakura Tea",
  "Kombu-cha",
  "Aojiru",
  "Mugicha",
];

const cards = [
  {
    imgSrc: sushi12,
    alt: "sushi-12",
    title: "Chezu Sushi",
    rating: "4.8",
    price: "$21.00",
  },
  {
    imgSrc: sushi11,
    alt: "sushi-11",
    title: "Originale Sushi",
    rating: "4.8",
    price: "$21.00",
    active: true,
  },
  {
    imgSrc: sushi10,
    alt: "sushi-10",
    title: "Ramen Legendo",
    rating: "4.8",
    price: "$21.00",
  },
];

const imageSrcMap = {
  "sushi-1": sushi1,
  "sushi-2": sushi2,
  "sushi-3": sushi3,
  "sushi-4": sushi4,
  "sushi-5": sushi5,
  "sushi-6": sushi6,
  "sushi-7": sushi7,
  "sushi-8": sushi8,
  "sushi-9": sushi9,
  "sushi-10": sushi10,
  "sushi-11": sushi11,
  "sushi-12": sushi12,
};

document.querySelectorAll("[data-src-key]").forEach((img) => {
  const key = img.dataset.srcKey;
  const asset = imageSrcMap[key];

  if (asset) {
    img.src = asset;
    // decode big visuals asynchronously to avoid blocking paint
    if (!img.hasAttribute("decoding")) {
      img.decoding = "async";
    }
  }
});
