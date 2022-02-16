import React from 'react'
import TableDataListItem from './TableDataListItem'

export default function TableDataList({ tableDataArray, deleteRow}) {
  console.log(tableDataArray)
  console.log(Array.isArray(tableDataArray))
  return (
    tableDataArray.map((rowData, index) =>{  
      return <tr><button onClick={() => deleteRow(rowData.id)}>Delete</button><td>{index+1}</td><TableDataListItem rowData={rowData.values}/></tr>
    })
  )
}
