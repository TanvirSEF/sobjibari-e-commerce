"use client";
import Image from "next/image";
import Link from "next/link";
import { React, useState } from "react";
import logo from "@/assets/images/logo.png";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import {
  ExternalLink,
  LayoutDashboard,
  Settings,
  Slack,
  Truck,
  User,
  Users2,
  UserSquare,
  Warehouse,
  LogOut,
  ChevronRight,
  ChevronDown,
} from "lucide-react";
import { usePathname } from "next/navigation";

export default function Sidebar({ showSide, setShowSide }) {
  const pathname = usePathname();
  const catalogue = [
    {
      title: "Products",
      href: "/dashboard/products",
    },
    {
      title: "Categories",
      href: "/dashboard/categories",
    },
    {
      title: "Attributes",
      href: "/dashboard/attributes",
    },
    {
      title: "Coupons",
      href: "/dashboard/coupons",
    },
    {
      title: "Store Sliders",
      href: "/dashboard/sliders",
    },
  ];
  const sidebarLinks = [
    {
      title: "Customers",
      icon: <Users2 />,
      href: "/dashboard/customers",
    },
    {
      title: "Markets",
      icon: <Warehouse />,
      href: "/dashboard/markets",
    },
    {
      title: "Farmers",
      icon: <UserSquare />,
      href: "/dashboard/farmers",
    },
    {
      title: "Orders",
      icon: <Truck />,
      href: "/dashboard/orders",
    },
    {
      title: "Our Staffs",
      icon: <User />,
      href: "/dashboard/staffs",
    },
    {
      title: "Settings",
      icon: <Settings />,
      href: "/dashboard/settings",
    },
    {
      title: "Online Store",
      icon: <ExternalLink />,
      href: "/",
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div
      className={
        showSide
          ? " mt-20 sm:block sm:mt-0 dark:bg-slate-700 bg-white text-black space-y-6 w-64 shadow-xl h-screen dark:text-slate-50  fixed top-0 left-0"
          : "mt-20 hidden sm:block sm:mt-0 dark:bg-slate-700 bg-white text-black space-y-6 w-64 shadow-xl h-screen dark:text-slate-50  fixed top-0 left-0"
      }
    >
      <Link
        href="/dashboard"
        onClick={() => setShowSide(false)}
        className="py-4 px-7"
      >
        <Image src={logo} alt="logo" className="h-[90px] w-[90px] ml-[50px]" />
      </Link>
      <div className="space-y-3 flex flex-col">
        <Link
          onClick={() => setShowSide(false)}
          href="/dashboard"
          className={
            pathname === "/dashboard"
              ? "flex items-center space-x-3 py-2 px-7 border-l-8 border-green-600  text-lime-500"
              : "flex items-center space-x-3 py-2 px-7"
          }
        >
          <LayoutDashboard />
          <span>Dashboard</span>
        </Link>
        <Collapsible className="py-2 px-7">
          <CollapsibleTrigger onClick={() => setOpen(!open)}>
            <button className="flex items-center space-x-6 py-2 ">
              <div className="flex items-center space-x-3">
                <Slack />
                <span>Catalogue</span>
              </div>
              {open ? <ChevronDown /> : <ChevronRight />}
            </button>
          </CollapsibleTrigger>
          <CollapsibleContent className="rounded-lg py-3 px-3 pl-6 bg-slate-800">
            {catalogue.map((item, i) => {
              return (
                <Link
                  onClick={() => setShowSide(false)}
                  key={i}
                  href={item.href}
                  className={
                    pathname === item.href
                      ? "flex items-center space-x-3 py-1 text-sm  text-lime-500"
                      : "flex items-center space-x-3 py-1 "
                  }
                >
                  <span>{item.title}</span>
                </Link>
              );
            })}
          </CollapsibleContent>
        </Collapsible>
        {sidebarLinks.map((item, i) => {
          return (
            <Link
              onClick={() => setShowSide(false)}
              href={item.href}
              key={i}
              className={
                item.href == pathname
                  ? "flex items-center space-x-3 py-2 px-7 border-l-8 border-green-600 text-lime-500"
                  : "flex items-center space-x-3 py-2 px-7"
              }
            >
              {item.icon}
              <span>{item.title}</span>
            </Link>
          );
        })}
        <div className="py-2 px-7">
          <button className="flex items-center space-x-3 bg-green-800 rounded-md px-6 py-3">
            <LogOut /> <span>Log Out</span>
          </button>
        </div>
      </div>
    </div>
  );
}
