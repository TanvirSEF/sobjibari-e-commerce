import PageHeader from "@/components/backend/PageHeader";
import TableAction from "@/components/backend/TableAction";
import React from "react";

const Staffs = () => {
  return (
    <div className="">
      <PageHeader
        heading="Our Staffs"
        href="/dashboard/staffs/new"
        linkTitle="Add Staffs"
      />
      <TableAction />
      <div className="py-8">
        <h2>Table</h2>
      </div>
    </div>
  );
};

export default Staffs;