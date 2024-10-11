import PageHeader from "@/components/backend/PageHeader";
import TableAction from "@/components/backend/TableAction";
import React from "react";

const Product = () => {
  return (
    <div className="">
      <PageHeader
        heading="Products"
        href="/dashboard/products/new"
        linkTitle="Add Products"
      />
      <TableAction />
      <div className="py-8">
        <h2>Table</h2>
      </div>
    </div>
  );
};

export default Product;
