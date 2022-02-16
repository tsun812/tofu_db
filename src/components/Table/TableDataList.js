import React from 'react'
import TableDataListItem from './TableDataListItem'

export default function TableDataList({ tableDataArray, deleteRow, updateInputValue, saveInputValue, application_id}) {
  return (
    Object.keys(tableDataArray).map((rowData, index) =>{  
      return <tr>
        <button onClick={() => deleteRow(tableDataArray[rowData].id, tableDataArray[rowData].application_id )}>❌</button>
        <td>{index+1}</td>
        <TableDataListItem 
        rowData={tableDataArray[rowData].values} 
        updateInputValue={updateInputValue} 
        saveInputValue={saveInputValue} 
        application_id={tableDataArray[rowData].application_id}/></tr>
    })
  )
}
