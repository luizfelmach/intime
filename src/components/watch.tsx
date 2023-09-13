"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const logos = ["watch-1.png", "watch-2.png", "watch-3.png"];

export function Watch() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === logos.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Troque o valor para ajustar a velocidade do carrossel

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait" initial={false}>
        <motion.img
          key={currentIndex}
          src={logos[currentIndex]}
          alt={`Relógio ${currentIndex + 1}`}
          width={500}
          height={500}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>
    </>
  );
}
