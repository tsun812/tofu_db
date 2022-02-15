import React from "react";
import NavBarConfig from "./Template/NavBarConfig";
import "components/Application.scss";
import { useContext } from 'react';
import ConfigProvider from "providers/ConfigProvider";
export default function Application(props) {
  return (
    <main className="layout">
      <ConfigProvider>
      <section className="sidebar">
        <NavBarConfig></NavBarConfig>
      </section>
      <section className="schedule">
        {/* Replace this with the schedule elements durint the "The Scheduler" activity. */}
      </section>
      </ConfigProvider>
    </main>
  );
}