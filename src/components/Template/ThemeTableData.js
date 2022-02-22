import React from "react";
import "./ThemeTable.scss";
import ThemeTableDataItem from "./ThemeTableDataItem";
export default function ThemeTableData(props) {
  // return (
  //   Object.keys(tableDataArray).map((rowData, index) => {
  //     return <tr key={"row", tableDataArray[rowData].id}>
  //       <td className="indexNum">{index + 1}</td>
  //       <ThemeTableDataItem
  //         key={tableDataArray[rowData].id}
  //         rowData={tableDataArray[rowData].values}
  //       />
  //       </tr>
  //   })
  // )
  console.log(props.filteredRecords);
  let recordsRender;
  if (
    Array.isArray(props.filteredRecords) &&
    props.filteredRecords.length > 0
  ) {
    recordsRender = props.filteredRecords;
  } else {
    recordsRender = props.selectedRecords;
  }
  console.log('recordsRender')
  console.log(recordsRender)
  return recordsRender.map((rowData, index) => {
    return (
      <tr key={("row", rowData.id)}>
        <td className="indexNum">{index + 1}</td>
        <td key={index * 2}> {rowData.primary} </td>
        <td key={index * 2 + 1}> {rowData.secondary} </td>
        <td><button
          className="btn btn-primary"
          onClick={() => props.setRecordDetails(rowData.id)}
        >
          Details
        </button></td>
      </tr>
    );
  });
}
