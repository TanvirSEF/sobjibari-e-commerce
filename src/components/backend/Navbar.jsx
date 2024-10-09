import {
  AlignJustify,
  Bell,
  LayoutGrid,
  LogOut,
  Settings,
  Sun,
  X,
} from "lucide-react";
import React from "react";
import userImg from "../../assets/images/tanvir.jpg";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";
import ThemeSwitcher from "../ThemeSwitcher";
import Link from "next/link";

export default function Navbar({ setShowSide, showSide }) {
  return (
    <div className="flex items-center justify-between bg-white dark:bg-slate-800 text-slate-50 h-20 px-8 py-8 fixed top-0 w-full z-50 sm:pr-[20rem] shadow">
      <button
        onClick={() => setShowSide(!showSide)}
        className="dark:text-green-600 text-green-600"
      >
        <AlignJustify />
      </button>
      <div className="flex space-x-3">
        <ThemeSwitcher />
        <DropdownMenu>
          <DropdownMenuTrigger>
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
          </DropdownMenuTrigger>
          <DropdownMenuContent className="px-4 py-2">
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <div className="flex items-center space-x-1">
                <Image
                  src={userImg}
                  alt="user Image"
                  className="w-8 h-8 rounded-full"
                />
                <div className="flex flex-col space-y-1">
                  <p>Alu Stock Out</p>
                  <div className="flex items-center space-x-2">
                    <p className="px-3 py-0.5 bg-red-700 text-white rounded-full text-sm">
                      Stock Out
                    </p>
                    <p>Jus 12 2024 - 12:40pm</p>
                  </div>
                </div>
                <button>
                  <X />
                </button>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <div className="flex items-center space-x-1">
                <Image
                  src={userImg}
                  alt="user Image"
                  className="w-8 h-8 rounded-full"
                />
                <div className="flex flex-col space-y-1">
                  <p>Alu Stock Out</p>
                  <div className="flex items-center space-x-2">
                    <p className="px-3 py-0.5 bg-red-700 text-white rounded-full text-sm">
                      Stock Out
                    </p>
                    <p>Jus 12 2024 - 12:40pm</p>
                  </div>
                </div>
                <button>
                  <X />
                </button>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <button>
              <Image
                src={userImg}
                alt="user Image"
                className="w-8 h-8 rounded-full"
              />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="px-4 py-2">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <button className="flex items-center space-x-1">
                <LayoutGrid className="mr-2 h-4 w-4" />
                <span>Dashboard</span>
              </button>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <button className="flex items-center space-x-1">
                <Settings className="mr-2 h-4 w-4" />
                <span>Edit Profile</span>
              </button>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <button className="flex items-center space-x-1">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log Out</span>
              </button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
