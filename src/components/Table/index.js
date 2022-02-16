import React from 'react'
import TableHeaderList from './TableHeaderList'
import TableDataList from './TableDataList'
export default function Table({tableHeaderArray, tableDataArray, deleteRow, deleteColumn}) {
  return (
    
<table>
  <thead>
  <tr>
  <th></th>
  <th>#</th>
    <TableHeaderList tableHeaderArray={tableHeaderArray} deleteColumn={deleteColumn}/>
  </tr>
  </thead>
  <tbody>
  <TableDataList tableDataArray={tableDataArray} deleteRow={deleteRow}/>
  </tbody>
</table>
  )
}
