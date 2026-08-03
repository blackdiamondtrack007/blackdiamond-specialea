"use client";
import React, { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

const clientFeedbacksItems = Array.from({ length: 99 }, (_, i) => {
  const num = String(i + 1).padStart(2, "0");

  return {
    id: i + 1,
    item: `/assets/home/client-feedbacks/client-feedback-${num}.webp`,
    alt: `Blackdiamondea Client Feedback ${num}`,
  };
});

function AnimatedModal({
  isOpen,
  onClose,
  images,
  currentIndex,
  setCurrentIndex,
}) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight")
        setCurrentIndex((prev) => (prev + 1) % images.length);
      if (e.key === "ArrowLeft")
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose, images.length, setCurrentIndex]);

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);

  const prevImage = () =>
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/90 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Viewer */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="relative w-full max-w-6xl flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Button
                size="icon"
                className="absolute top-0 right-0 text-white z-50 cursor-pointer rounded-full"
                onClick={onClose}
              >
                <X className="h-7 w-7" />
              </Button>
              <button
                onClick={prevImage}
                className="absolute left-5 text-white text-4xl z-50"
              >
                ❮
              </button>
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="max-h-[90vh]"
              >
                <Image
                  src={images[currentIndex]}
                  alt="Full View"
                  width={1200}
                  height={1600}
                  className="max-h-[90vh] w-auto object-contain rounded-lg"
                />
              </motion.div>
              <button
                onClick={nextImage}
                className="absolute right-5 text-white text-4xl z-50"
              >
                ❯
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default function Testimonial() {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = clientFeedbacksItems.map((item) => item.item);

  const plugin = useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
    }),
  );

  return (
    <section className="w-full">
      <div className="container my-0 py-10 md:py-12 lg:py-15 xl:py-20 -mt-10 md:-mt-12 lg:-mt-15 xl:-mt-20">
        <div className="space-y-4 md:space-y-6 xl:space-y-8">
          <h2 className="text-white text-center">{"Client's"} Feedback</h2>
          {/* <p className="text-body text-center mt-3 lg:mt-5">
            Our clients share their valuable thoughts
          </p> */}
        </div>
        <AnimatedModal
          isOpen={open}
          onClose={() => setOpen(false)}
          images={images}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />

        <div className="flex justify-center mx-10 md:mx-20 mt-8 md:mt-10 lg:mt-15">
          <Carousel plugins={[plugin.current]} className="w-full">
            <CarouselContent>
              {clientFeedbacksItems.map((feedback, index) => (
                <CarouselItem
                  key={feedback.id}
                  className="basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                >
                  <Card className="p-2 border-2 border-primary">
                    <CardContent className="flex items-center justify-center p-2">
                      <Image
                        src={feedback.item}
                        alt={feedback.alt}
                        width={500}
                        height={700}
                        className="rounded-md shadow-lg hover:scale-105 duration-300 cursor-pointer h-[400px] md:h-[450px] xl:h-[500px]"
                        onClick={() => {
                          setCurrentIndex(index);
                          setOpen(true);
                        }}
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Manual Arrows */}
            <CarouselPrevious className="left-[-50px] cursor-pointer" />
            <CarouselNext className="right-[-50px] cursor-pointer" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
