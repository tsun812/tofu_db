import React from 'react'
import AppList from './AppList'
import "components/Application.scss";
import useApplicationData from 'hooks/useApplicationData';

export default function Application() {
  const {
    state,
    setApp,
  } = useApplicationData();
  return (
 <main className="layout">
  <section className="sidebar">
    <hr className="sidebar__separator sidebar--centered" />
      <nav className="sidebar__menu">
        <AppList apps={state.apps} app={state.app} setApp={setApp} />
      </nav>
  </section>
</main>
  )
}
