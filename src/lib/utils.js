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

export function formatTimeAgo(dateString) {
  if (!dateString) return "Just now";
  const now = new Date();
  const past = new Date(dateString);
  const msPerMinute = 60 * 1000;
  const msPerHour = msPerMinute * 60;
  const msPerDay = msPerHour * 24;

  const elapsed = now - past;

  if (elapsed < msPerMinute) {
    return "Just now";
  } else if (elapsed < msPerHour) {
    return Math.round(elapsed / msPerMinute) + " minutes ago";
  } else if (elapsed < msPerDay) {
    return Math.round(elapsed / msPerHour) + " hours ago";
  } else {
    return Math.round(elapsed / msPerDay) + " days ago";
  }
}
