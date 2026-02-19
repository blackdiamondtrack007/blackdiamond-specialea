"use client";
import React, { useState, useEffect } from "react";
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
import BlackdiamondeaClientReview1 from "../../../public/assets/home/client-reviews/blackdiamondea-client-review1.jpg";
import BlackdiamondeaClientReview2 from "../../../public/assets/home/client-reviews/blackdiamondea-client-review2.jpg";

const clientReviewsItems = [
  { id: 1, item: BlackdiamondeaClientReview1 },
  { id: 2, item: BlackdiamondeaClientReview1 },
  { id: 3, item: BlackdiamondeaClientReview1 },
  { id: 4, item: BlackdiamondeaClientReview2 },
  { id: 5, item: BlackdiamondeaClientReview1 },
];

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

  const images = clientReviewsItems.map((item) => item.item);

  return (
    <div className="w-full">
      <div className="container">
        <h2 className="text-center text-text-primary">Testimonials</h2>

        <AnimatedModal
          isOpen={open}
          onClose={() => setOpen(false)}
          images={images}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />

        <div className="flex gap-6 flex-wrap justify-center mt-10">
          <Carousel>
            <CarouselContent>
              {clientReviewsItems.map((review, index) => (
                <CarouselItem
                  key={review.id}
                  className="basis-1/2 pl-1 lg:basis-1/4"
                >
                  <Card className="p-2 m-4">
                    <CardContent className="flex items-center justify-center p-2">
                      <Image
                        src={review.item}
                        alt="Client Review"
                        className="rounded-md shadow-lg hover:scale-105 duration-300 cursor-pointer"
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
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
}
