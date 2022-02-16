import React from "react";
import "components/Application.scss";
import Table from "./Table";
import useApplicationData from "hooks/useApplicationData";
import NavBarConfig from "./Template/NavBarConfig";
import Grid from "./Template/Grid"
import List from "./Template/List"
import AppList from "./AppList";
import 'bootstrap/dist/css/bootstrap.min.css';
import { getFieldsById } from "helpers/selectors";

export default function Application() {
  const { getApplicationData, setConfig,  state, setApp, setLayouts, layouts, setPrimaryField, setSecondaryField, createNewRow, createNewColumn, deleteRow, deleteColumn} = useApplicationData();

  const tableHeaderArray = ((state.currentApplication.fields)) ? state.currentApplication.fields : [];
  const tableRecordArray = ((state.currentApplication.records)) ? state.currentApplication.records : [];

  let fetchItem = [{key: "1", primary_field: "Strawberry", secondary_field: "Noun", position: 1}, {key: "2", primary_field: "Pinapple", secondary_field: "Noun", position: 2}, {key: "3", primary_field: "Apple", secondary_field: "Noun", position: 3}]
  let fields = getFieldsById(state,1)
  console.log(fields)

  return (
    <main className="layout">
      <section className="sidebar">
      <AppList apps={state.apps} app={state.app} setApp={setApp} />
      <hr className="sidebar__separator sidebar--centered" />
      <NavBarConfig value={state.config} configs={state.configs} onChange={setConfig} fields={fields} setPrimaryField={setPrimaryField} setSecondaryField={setSecondaryField}/>
      </section>
      <section className="table">
      <Table tableHeaderArray={tableHeaderArray} tableDataArray={tableRecordArray} deleteRow={deleteRow} deleteColumn={deleteColumn}/>
        <button onClick={() => getApplicationData(1)}>Get data</button>
        <button onClick={() => createNewRow(1)}>Add New Row</button>
        <button onClick={() => createNewColumn(1)}>Add New Column</button>
        </section>
      <section className="schedule">
        <Grid setLayouts={setLayouts} layouts={layouts}/>
      </section>
    </main>
  );
}

