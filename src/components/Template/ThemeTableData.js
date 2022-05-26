import React from "react";
import "./ThemeTable.scss";
export default function ThemeTableData(props) {
  let recordsRender;
  if (
    Array.isArray(props.filteredRecords) &&
    props.filteredRecords.length > 0
  ) {
    recordsRender = props.filteredRecords;
  } else {
    recordsRender = props.selectedRecords;
  }
  return recordsRender.map((rowData, index) => {
    return (
      <tr key={("row", rowData.id)}>
        <td className="rowItem" >{index + 1}</td>
        <td className="rowItem" key={index * 2}> {rowData.primary} </td>
        <td className="rowItem" key={index * 2 + 1}> {rowData.secondary} </td>
        <td><button
          className="btn btn-primary"
          onClick={() => {props.setRecordDetails(rowData.id); props.setDetail('show');}}
        >
          Details
        </button></td>
      </tr>
    );
  });
}
