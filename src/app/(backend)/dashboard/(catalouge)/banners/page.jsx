import React from "react";

import TableAction from "@/components/backend/TableAction";
import PageHeader from "@/components/backend/PageHeader";

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
