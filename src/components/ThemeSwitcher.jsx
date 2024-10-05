"use client";
import { React, useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  return (
    <div>
      <button
        className={`w-fit p-2 rounded-md hover:scale-110 active:scale-100 duration-200 dark:text-green-600 text-green-700`}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "light" ? <Moon /> : <Sun />}
      </button>
    </div>
  );
}
