"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

// Time formatter helper
function formatTimeAgo(dateString) {
  if (!dateString) return "just now";
  const now = new Date();
  const past = new Date(dateString);
  const msPerMinute = 60 * 1000;
  const msPerHour = msPerMinute * 60;
  const msPerDay = msPerHour * 24;

  const elapsed = now - past;

  if (elapsed < msPerMinute) {
    return "just now";
  } else if (elapsed < msPerHour) {
    return Math.round(elapsed / msPerMinute) + " minutes ago";
  } else if (elapsed < msPerDay) {
    return Math.round(elapsed / msPerHour) + " hours ago";
  } else {
    return Math.round(elapsed / msPerDay) + " days ago";
  }
}

export default function OrdersNotification() {
  const [orders, setOrders] = useState([]);
  const [currentOrder, setCurrentOrder] = useState(null);
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(100);

  const INITIAL_DELAY = 120000; // Wait 1.2 seconds after entering page before first popup
  const DISPLAY_DURATION = 7000; // How long each notification stays visible (7s)
  const ROTATION_INTERVAL = 10000; // Time interval between consecutive popups (10s)

  // 1. Fetch the sorted latest 10 orders from the API
  useEffect(() => {
    async function fetchOrders() {
      try {
        const res = await fetch("/api/orders");
        const json = await res.json();

        if (json.success && Array.isArray(json.data)) {
          // Filter out the header row ("Order ID", "Name", etc.) if it's included
          const dataRows = json.data.filter((row) => row[0] !== "Order ID");

          // Map the array indices to easy-to-use object keys
          const formattedOrders = dataRows.map((row) => ({
            id: row[0],
            uid: row[1],
            name: row[2],
            email: row[3],
            phone: row[4],
            product: row[5],
            price: row[6],
            paymentMethod: row[7],
            status: row[8],
            createdAt: row[9],
          }));

          // Sort them by date to make sure the newest orders are always at the top
          formattedOrders.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
          );

          // Take the top 10 newest orders
          setOrders(formattedOrders.slice(0, 10));
        }
      } catch (err) {
        console.error("Error fetching sales notification data:", err);
      }
    }
    fetchOrders();
  }, []);

  // 2. Control rotation loop and initial delay logic
  useEffect(() => {
    if (orders.length === 0) return;

    let index = 0;

    const triggerToast = () => {
      setCurrentOrder(orders[index]);
      setVisible(true);
      setProgress(100);

      // Advance index pointers loop-style
      index = (index + 1) % orders.length;

      // Automatically hide notification bar after its display window shuts
      setTimeout(() => {
        setVisible(false);
      }, DISPLAY_DURATION);
    };

    // Initial waiting time layout before executing the system rotation
    const startDelayTimer = setTimeout(triggerToast, INITIAL_DELAY);

    // Continuous loop interval engine
    const loopInterval = setInterval(triggerToast, ROTATION_INTERVAL);

    return () => {
      clearTimeout(startDelayTimer);
      clearInterval(loopInterval);
    };
  }, [orders]);

  // 3. Handle bottom linear progress tracking line
  useEffect(() => {
    if (!visible) return;

    const tickRate = 50;
    const totalTicks = DISPLAY_DURATION / tickRate;
    let ticksElapsed = 0;

    const progressTimer = setInterval(() => {
      ticksElapsed++;
      const percentRemaining = 100 - (ticksElapsed / totalTicks) * 100;
      setProgress(Math.max(percentRemaining, 0));
    }, tickRate);

    return () => clearInterval(progressTimer);
  }, [visible]);

  if (!visible || !currentOrder) return null;

  console.log(orders);

  console.log(currentOrder);

  return (
    <div className="fixed bottom-6 left-6 z-50 w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-xl border border-gray-100 transition-all duration-500 transform translate-y-0 animate-fade-in-up">
      <div className="flex items-start p-4 pr-3">
        {/* Animated Celebration Avatar badge area */}
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-pink-100 text-xl select-none">
          🎉
        </div>

        {/* Content UI matching your exact keys */}
        <div className="ml-4 flex-1 pt-0.5">
          <p className="text-sm font-normal text-gray-700 leading-relaxed">
            <span className="font-bold text-gray-900">
              {currentOrder.name || "A user"}
            </span>{" "}
            purchased the{" "}
            <span className="font-bold text-gray-900">
              {currentOrder.product
                ? currentOrder.product.replace(/_/g, " ")
                : "Premium"}
            </span>{" "}
            plan {formatTimeAgo(currentOrder.createdAt)}.
          </p>
        </div>

        {/* Close Button element */}
        <button
          onClick={() => setVisible(false)}
          className="ml-2 shrink-0 p-1 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-50 transition-colors"
        >
          <X size={16} />
        </button>
      </div>

      {/* Countdown Progress Slider Bar */}
      <div className="h-1.5 w-full bg-gray-100">
        <div
          className="h-full bg-gradient-to-r from-orange-400 to-pink-500 transition-all ease-linear"
          style={{ width: `${progress}%`, transitionDuration: "50ms" }}
        />
      </div>
    </div>
  );
}
