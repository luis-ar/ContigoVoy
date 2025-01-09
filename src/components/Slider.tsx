"use client";

import React from "react";
import styled from "@emotion/styled";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";

const Image = styled.img`
  width: 100%;
  height: 280px;
  object-fit: contain;
`;
const Slider = () => {
  return (
    <>
      <div className="w-full h-full bg-black flex justify-center items-center p-4">
        <Splide
          options={{
            rewind: true,
            gap: "1rem",
            autoplay: true,
            interval: "3000",
            arrows: false,
          }}
        >
          <SplideSlide>
            <Image
              src="https://m.media-amazon.com/images/I/71q7TSSqO6L._AC_UF894,1000_QL80_.jpg"
              alt="Picture of the author"
            />
          </SplideSlide>
          <SplideSlide>
            <Image
              src="https://m.media-amazon.com/images/I/71q7TSSqO6L._AC_UF894,1000_QL80_.jpg"
              alt="Picture of the author"
            />
          </SplideSlide>
          <SplideSlide>
            <Image
              src="https://m.media-amazon.com/images/I/71q7TSSqO6L._AC_UF894,1000_QL80_.jpg"
              alt="Picture of the author"
            />
          </SplideSlide>{" "}
          <SplideSlide>
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
