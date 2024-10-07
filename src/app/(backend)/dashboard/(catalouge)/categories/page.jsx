import PageHeader from "@/components/backend/PageHeader";
import TableAction from "@/components/backend/TableAction";
import React from "react";

const Category = () => {
  return (
    <div className="">
      <PageHeader
        heading="Categories"
        href="/dashboard/categories/new"
        linkTitle="Add Category"
      />
      <TableAction />
      <div className="py-8">
        <h2>Table</h2>
      </div>
    </div>
  );
};

export default Category;
