import PageHeader from "../../../../../components/backend/PageHeader";
import TableAction from "../../../../../components/backend/TableAction";
import React from "react";

const Coupons = () => {
  return (
    <div className="">
      <PageHeader
        heading="Coupons"
        href="/dashboard/coupons/new"
        linkTitle="Add Coupon"
      />
      <TableAction />
      <div className="py-8">
        <h2>Table</h2>
      </div>
    </div>
  );
};

export default Coupons;
