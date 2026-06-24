import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function getActiveTraders() {
  const baseTraders = 3689;

  const startDate = new Date("2026-06-24");

  const today = new Date();

  const weeksPassed = Math.floor(
    (today - startDate) / (1000 * 60 * 60 * 24 * 7),
  );

  let increase = 0;

  for (let i = 0; i < weeksPassed; i++) {
    increase += 2 + (i % 3);
  }

  return baseTraders + increase;
}
