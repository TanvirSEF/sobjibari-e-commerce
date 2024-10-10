import React from "react";
import PageHeader from "../../../../../components/backend/PageHeader";
import TableAction from "../../../../../components/backend/TableAction";

const page = () => {
  return (
    <div>
      <PageHeader
        heading="Banners"
        href="/dashboard/banners/new"
        linkTitle="Add Banner"
      />
      <TableAction />
    </div>
  );
};

export default page;
