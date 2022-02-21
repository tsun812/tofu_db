import React from "react";
import "./ThemeTable.scss"
import ThemeTableHeader from "./ThemeTableHeader";
import ThemeTableData from "./ThemeTableData";
export default function ThemeTable(props) {
  return (
    <table className="table">
      <thead>
        <tr>
        <th className='indexNum'>index</th>
          <ThemeTableHeader tableHeaderArray={props.tableHeaderArray}/>
        </tr>
      </thead>
      <tbody>
          <ThemeTableData tableDataArray={props.tableDataArray} selectedRecords={props.selectedRecords} filteredRecords={props.filteredRecords}/>
      </tbody>
    </table>
  )
}
