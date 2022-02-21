import React from "react";
import "./ThemeTable.scss"
export default function ThemeTableDataItem({rowData}) {
  return (
    Object.keys(rowData).map(value => {
      return <td key={"value", rowData[value].id}> {rowData[value].field_value} </td>
}));

}

