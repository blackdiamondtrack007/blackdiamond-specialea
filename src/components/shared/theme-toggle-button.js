"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ThemeToggleButton() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className={
            "w-10 text-primary bg-gray-900 rounded border p-4.5 text-sm shadow-sm cursor-pointer transition focus:outline-none focus:ring-2 focus:ring-blue-500 border-gray-700 hover:bg-gray-800"
          }
        >
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90 rounded-4xl" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className={
          "text-primary bg-gray-900 rounded border p-4.5 text-sm shadow-sm cursor-pointer transition focus:outline-none focus:ring-2 focus:ring-blue-500 border-gray-700 "
        }
      >
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className={
            "text-primary cursor-pointer hover:font-semibold duration-100"
          }
        >
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className={
            "text-primary cursor-pointer hover:font-semibold duration-100"
          }
        >
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className={
            "text-primary cursor-pointer hover:font-semibold duration-100"
          }
        >
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
