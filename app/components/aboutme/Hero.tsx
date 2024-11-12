"use client";

import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import React, { useEffect } from "react";
import Image from "next/image";

import img from "../../assets/profilepic.png";
import { FiArrowRight } from "react-icons/fi";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

function Hero() {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
    console.log("animate loaded");
  }, [color]);

  const backgroundImage = useMotionTemplate`radial-gradient(125%, 125% at 50% 0%, #000 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <>
      <motion.section
        style={{ backgroundImage }}
        className="relative grid min-h-screen place-content-center overflow-hidden px-4 py-24 text-gray-200"
      >
        <div className="z-10 flex flex-col items-center">
          <span className="mb-1.5 inline-block rounded-full bg-gray-600/50 px-3 pt-1.5 text-sm">
            Open for work
          </span>
          <h1 className="mt-1 text-white/40 text-5xl md:text-7xl font-black">
            Hi, I&apos;m
          </h1>
          <h1
            className="max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text font-black leading-tight
        text-transparent text-5xl md:text-7xl
        "
          >
            Owen
          </h1>
          <Image src={img} alt="profilePic" width={250} />
          <p className="my-6 max-w-xl text-center">
            Fullstack Developer based in Shanghai, with 3 years of experience
          </p>

          <motion.button
            style={{ border, boxShadow }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex w-fit justify-center items-center gap-2 rounded-full px-4 py-2 mt-1"
          >
            Download
            <FiArrowRight className="inline-block" />
          </motion.button>
        </div>

        <div className="bg-circle-container">
          <div className="bg-circle-background"></div>
          <div className="bg-circle"></div>
        </div>
      </motion.section>
    </>
  );
}

export default Hero;
