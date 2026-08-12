import { Fragment } from "react";
import { columns } from "../../../(tables)/data-table/advanced/components/columns";
import { DataTable } from "../../../(tables)/data-table/advanced/components/data-table";
import { data } from "./data";

export default function InvoiceListTable() {
  return (
    <Fragment>
      <DataTable data={data} columns={columns} />
    </Fragment>
  );
}
