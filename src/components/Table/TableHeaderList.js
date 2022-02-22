import React from "react";
import TableHeaderListItem from "./TableHeaderListItem";

export default function TableHeaderList({
  tableHeaderArray,
  deleteColumn,
  updateFieldValue,
  saveFieldValue,
}) {
  return Object.keys(tableHeaderArray).map((header) => {
    return (
      <TableHeaderListItem
        deleteColumn={deleteColumn}
        field_value={tableHeaderArray[header]["field_name"]}
        field_type={tableHeaderArray[header]["field_type"]}
        key={tableHeaderArray[header]["id"]}
        field_id={tableHeaderArray[header]["id"]}
        application_id={tableHeaderArray[header]["application_id"]}
        updateFieldValue={updateFieldValue}
        saveFieldValue={saveFieldValue}
      />
    );
  });
}
