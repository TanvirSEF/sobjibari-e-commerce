"use client";
import Navbar from "@/components/backend/Navbar";
import Sidebar from "@/components/backend/Sidebar";
import { useState } from "react";

export default function Layout({ children }) {
  const [showSide, setShowSide] = useState(false);
  return (
    <div className="flex">
      <Sidebar showSide={showSide} setShowSide={setShowSide} />
      <div className="lg:ml-64 ml-0 flex-grow bg-slate-100 min-h-screen">
        <Navbar showSide={showSide} setShowSide={setShowSide} />
        <main className="p-8 bg-slate-100 dark:bg-slate-950 text-white  mt-16">
          {children}
        </main>
      </div>
    </div>
  );
}
