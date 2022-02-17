import React from 'react'
import TableHeaderList from './TableHeaderList'
import TableDataList from './TableDataList'

export default function Table({ tableHeaderArray, tableDataArray, deleteRow, deleteColumn, getApplicationData, createNewRow, createNewColumn, application_id, updateInputValue, saveInputValue, updateFieldValue, saveFieldValue, editStatus}) {
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
          <TableDataList tableDataArray={tableDataArray} deleteRow={deleteRow} updateInputValue={updateInputValue} saveInputValue={saveInputValue} application_id={application_id} editStatus={editStatus} />
        </tbody>
      </table>
      <button onClick={() => getApplicationData(application_id)}>Get data</button>
      <button onClick={() => createNewRow(application_id)}>Add New Row</button>
      <button onClick={() => createNewColumn(application_id)}>Add New Column</button>
    </>
  )
}
