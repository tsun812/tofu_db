import React from 'react'
import TableDataListItem from './TableDataListItem'
import Button from 'react-bootstrap/Button';

export default function TableDataList({ tableDataArray, deleteRow, updateInputValue, saveInputValue, application_id }) {
  return (
    Object.keys(tableDataArray).map((rowData, index) => {
      return <tr key={"row" + tableDataArray[rowData].id}>
        <td>
        <Button variant="outline-danger" onClick={() => deleteRow(tableDataArray[rowData].id, application_id)}>Delete</Button>
        </td>
        <td className='align-middle'>{index + 1}</td>
        <TableDataListItem
          key={tableDataArray[rowData].id}
          rowData={tableDataArray[rowData].values}
          updateInputValue={updateInputValue}
          saveInputValue={saveInputValue}
          application_id={application_id} /></tr>
    })
  )
}

