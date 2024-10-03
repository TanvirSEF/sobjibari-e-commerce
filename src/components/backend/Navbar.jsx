import { AlignJustify, Bell, Sun, User } from "lucide-react";
import React from "react";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between bg-slate-800 text-slate-50 h-20 px-8 py-8 fixed top-0 w-full z-50 left-60 pr-[20rem]">
      <button>
        <AlignJustify />
      </button>
      <div className="flex space-x-3">
        <button>
          <Sun className="text-green-700" />
        </button>

        <button
          type="button"
          className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-transparent rounded-lg"
        >
          <Bell className="text-green-700" />
          <span className="sr-only">Notifications</span>
          <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500   rounded-full -top-0 end-6 dark:border-gray-900">
            20
          </div>
        </button>
        <button>
          <User className="text-green-700" />
        </button>
      </div>
    </div>
  );
}
