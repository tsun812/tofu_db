import React from 'react'
import TableDataListItem from './TableDataListItem'

export default function TableDataList({ tableDataArray }) {
  return (
    tableDataArray.map((rowData, index) =>{
      return <tr><td>{index+1}</td><TableDataListItem rowData={rowData}/></tr>
    })
  )
}
