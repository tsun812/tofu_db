import React from "react";
import "components/Application.scss";
import Table from "./Table";
import useApplicationData from "hooks/useApplicationData";
import NavBarConfig from "./Template/NavBarConfig";
import Grid from "./Template/Grid"
import List from "./Template/List"
import AppList from "./AppList";

export default function Application() {
  const { createNewRow, createNewColumn, getApplicationData, setConfig,  state, setApp , deleteRow, deleteColumn} = useApplicationData();

  const tableHeaderArray = ((state.currentApplication.fields)) ? state.currentApplication.fields : [];
  const tableRecordArray = ((state.currentApplication.records)) ? state.currentApplication.records : [];

console.log(state)
  return (
    <main className="layout">
      <section className="sidebar">
      <AppList apps={state.apps} app={state.app} setApp={setApp} />
      <hr className="sidebar__separator sidebar--centered" />
      <NavBarConfig value={state.config} configs={state.configs} onChange={setConfig}/>
      </section>
      <section className="table">
      <Table tableHeaderArray={tableHeaderArray} tableDataArray={tableRecordArray} deleteRow={deleteRow} deleteColumn={deleteColumn}/>
        <button onClick={() => getApplicationData(1)}>Get data</button>
        <button onClick={() => createNewRow(1)}>Add New Row</button>
        <button onClick={() => createNewColumn(1)}>Add New Column</button>
        </section>
      <section className="schedule">
        <Grid />
      </section>
    </main>
  );
}

