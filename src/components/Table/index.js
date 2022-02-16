import React from 'react'
import TableHeaderList from './TableHeaderList'
import TableDataList from './TableDataList'
export default function Table({ tableHeaderArray, tableDataArray, deleteRow, deleteColumn, getApplicationData, createNewRow, createNewColumn, application_id, updateInputValue, saveInputValue, updateFieldValue, saveFieldValue}) {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>#</th>
            <TableHeaderList tableHeaderArray={tableHeaderArray} deleteColumn={deleteColumn} updateFieldValue={updateFieldValue} saveFieldValue={saveFieldValue} application_id={application_id}/>
          </tr>
        </thead>
        <tbody>
          <TableDataList tableDataArray={tableDataArray} deleteRow={deleteRow} updateInputValue={updateInputValue} saveInputValue={saveInputValue} application_id={application_id} />
        </tbody>
      </table>
      <button onClick={() => getApplicationData(1)}>Get data</button>
      <button onClick={() => createNewRow(1)}>Add New Row</button>
      <button onClick={() => createNewColumn(1)}>Add New Column</button>
    </>
  )
}
