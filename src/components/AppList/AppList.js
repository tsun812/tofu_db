import React from 'react'
import AppListItem from './AppListItem'
import "./AppList.scss"
import CreateDelete from './CreateDelete'

export default function AppList() {
  return (
    <div className='AppList'>
      <>
      <AppListItem/>
      <CreateDelete/>
      </>
      </div>
  )
}
