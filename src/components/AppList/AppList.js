import React from 'react'
import AppListItem from './AppListItem'
import "./AppListItem.scss"

export default function AppList({getApplicationData}) {
  return (
    <div  className='AppListItem'>
      My Apps
      <ul><AppListItem getApplicationData={getApplicationData}/></ul>
    </div>
   
   )
}
