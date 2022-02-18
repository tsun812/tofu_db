import React from "react";
import TableHeaderList from "./TableHeaderList";
import TableDataList from "./TableDataList";

export default function Table({
  tableHeaderArray,
  tableDataArray,
  deleteRow,
  deleteColumn,
  getApplicationData,
  createNewRow,
  createNewColumn,
  application_id,
  updateInputValue,
  saveInputValue,
  updateFieldValue,
  saveFieldValue,
  editStatus,
  tableTitle,
}) {
  return (
    <>
      <h1>{tableTitle}</h1>
      <table class="table">
        <thead>
          <tr>
            <th>
              <>{editStatus}</>
            </th>
            <th>#</th>
            <TableHeaderList
              tableHeaderArray={tableHeaderArray}
              deleteColumn={deleteColumn}
              updateFieldValue={updateFieldValue}
              saveFieldValue={saveFieldValue}
              application_id={application_id}
            />
            <th>
              <button
                class="btn btn-primary"
                onClick={() => createNewColumn(application_id)}
              >
                Add New Column
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          <TableDataList
            tableDataArray={tableDataArray}
            deleteRow={deleteRow}
            updateInputValue={updateInputValue}
            saveInputValue={saveInputValue}
            application_id={application_id}
            editStatus={editStatus}
          />
        </tbody>
      </table>
      <button
        class="btn btn-primary"
        onClick={() => createNewRow(application_id)}
      >
        Add New Row
      </button>
    </>
  );
}
