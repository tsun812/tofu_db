import React from "react";
import "./ThemeTable.scss"
import ThemeTableDataItem from "./ThemeTableDataItem";
export default function ThemeTableData({tableDataArray}) {
  return (
    Object.keys(tableDataArray).map((rowData, index) => {
      return <tr key={"row", tableDataArray[rowData].id}>
        <td className="indexNum">{index + 1}</td>
        <ThemeTableDataItem
          key={tableDataArray[rowData].id}
          rowData={tableDataArray[rowData].values}
        />
        </tr>
    })
  )
}