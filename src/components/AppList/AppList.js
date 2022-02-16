import React from 'react'
import AppListItem from './AppListItem'
import "./AppListItem.scss"

export default function AppList() {
  return (
    <div  className='AppListItem'>
      My Apps
      <ul><AppListItem/></ul>
    </div>
   
   )
}
