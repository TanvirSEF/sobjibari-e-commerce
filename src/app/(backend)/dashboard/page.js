import CustomDataTable from "@/components/backend/CustomDataTable";
import Heading from "@/components/backend/Heading";
import LargeCards from "@/components/backend/LargeCards";
import SalesChart from "@/components/backend/SalesChart";
import SmallCards from "@/components/backend/SmallCards";
import React from "react";

export default function Dashboard() {
  return (
    <div>
      <Heading title="Dashboard Overview" />
      <LargeCards />
      <SmallCards />
      <SalesChart />
      {/* <CustomDataTable /> */}
    </div>
  );
}
