import React from "react";
import "./ThemeTable.scss"
import ThemeTableHeaderItem from "./ThemeTableHeaderItem";
export default function ThemeTableHeader({ tableHeaderArray }) {
  return Object.keys(tableHeaderArray).map((header) => {
    return (
        <ThemeTableHeaderItem
          field_value={tableHeaderArray[header]["field_name"]}
          key={tableHeaderArray[header]["id"]}
          field_id={tableHeaderArray[header]["id"]}
        />
    );
  });
}