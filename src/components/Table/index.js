import React from 'react'
import TableHeaderList from './TableHeaderList'
import TableDataList from './TableDataList'
export default function Table({tableHeaderArray, tableDataArray}) {
  return (
    
<table>
  <thead>
  <tr>
    <TableHeaderList tableHeaderArray={tableHeaderArray}/>
  </tr>
  </thead>
  <tbody>
  <TableDataList tableDataArray={tableDataArray}/>
  </tbody>
</table>
  )
}
