// import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { banners } from "../assets/all_products";

export default function Hero() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="w-full pt-16">
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
      >
        {banners.map((banner) => (
          <div key={banner.id} className="flex justify-center items-center">
            <img
              src={banner.image}
              alt={banner.alt}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
