"use client";

import React from "react";
import styled from "@emotion/styled";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
  border-radius: 0.7rem;
`;
const Slider = () => {
  return (
    <>
      <div className="w-full h-full bg-transparent flex justify-center items-center p-4 max-w-60 sm:max-w-80 ">
        <Splide
          options={{
            rewind: true,
            gap: "1rem",
            autoplay: true,
            interval: "6000",
            arrows: false,
          }}
        >
          <SplideSlide className="border-2 border-white shadow rounded-xl">
            <Image
              src="https://i.pinimg.com/736x/82/8f/64/828f64fa174f4890d9c5e2f6e0112bc1.jpg"
              alt="Picture of the author"
            />
          </SplideSlide>
          <SplideSlide className="border-2 border-white shadow rounded-xl">
            <Image
              src="https://i.pinimg.com/736x/ee/1a/d3/ee1ad32056083609a55bc7008709b58d.jpg"
              alt="Picture of the author"
            />
          </SplideSlide>
          <SplideSlide className="border-2 border-white shadow rounded-xl">
            <Image
              src="https://i.pinimg.com/736x/88/ca/fe/88cafe768bf0932829b7dfc4d0ae6e28.jpg"
              alt="Picture of the author"
            />
          </SplideSlide>{" "}
          <SplideSlide className="border-2 border-white shadow rounded-xl">
            <Image
              src="https://m.media-amazon.com/images/I/71q7TSSqO6L._AC_UF894,1000_QL80_.jpg"
              alt="Picture of the author"
            />
          </SplideSlide>
        </Splide>
      </div>
    </>
  );
};

export default Slider;
