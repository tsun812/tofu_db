import React from "react";
import NavBarConfig from "./Template/NavBarConfig";
import "components/Application.scss";
import { useContext } from 'react';
import ConfigProvider from "providers/ConfigProvider";
import useApplicationData from "hooks/useApplicationData";
export default function Application(props) {
  const {state, setConfig} = useApplicationData()
  return (
    <main className="layout">
      <section className="sidebar">
        <NavBarConfig value={state.config} configs={state.configs} onChange={setConfig}/>
      </section>
      <section className="schedule">
        {/* Replace this with the schedule elements durint the "The Scheduler" activity. */}
      </section>
    </main>
  );
}