import React from "react";
import SmallCard from "./SmallCard";
import { CheckCheck, Loader2, RefreshCcw, ShoppingCart } from "lucide-react";

export default function SmallCards() {
  const order = [
    {
      title: "Total Order",
      number: "00",
      iconColor: "bg-green-600",
      icon: <ShoppingCart />,
    },
    {
      title: "Orders Pending",
      number: "00",
      iconColor: "bg-blue-600",
      icon: <Loader2 />,
    },
    {
      title: "Order Processing",
      number: "00",
      iconColor: "bg-orange-600",
      icon: <RefreshCcw />,
    },
    {
      title: "Order Delivered",
      number: "00",
      iconColor: "bg-purple-600",
      icon: <CheckCheck />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 gap-4 py-8">
      {order.map((data, i) => {
        return <SmallCard data={data} key={i} />;
      })}
    </div>
  );
}
