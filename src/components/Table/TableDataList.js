import React from 'react'
import TableDataListItem from './TableDataListItem'
import Button from 'react-bootstrap/Button';

export default function TableDataList({ tableDataArray, deleteRow, updateInputValue, saveInputValue, application_id, editStatus }) {
  return (
    Object.keys(tableDataArray).map((rowData, index) => {
      return <tr>
        <td>
        <Button variant="outline-danger" onClick={() => deleteRow(tableDataArray[rowData].id, application_id)}>Delete</Button>
        </td>
        <td>{index + 1}</td>
        <TableDataListItem
          rowData={tableDataArray[rowData].values}
          updateInputValue={updateInputValue}
          saveInputValue={saveInputValue}
          application_id={application_id} /></tr>
    })
  )
}

