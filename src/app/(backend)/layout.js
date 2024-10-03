import Navbar from "@/components/backend/Navbar";
import Sidebar from "@/components/backend/Sidebar";
import React from "react";

export default function Layout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        <Navbar />
        <main className="p-8 bg-slate-950 text-white min-h-screen mt-16 ml-60">
          {children}
        </main>
      </div>
    </div>
  );
}
