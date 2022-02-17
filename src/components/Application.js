import React from "react";
import "components/Application.scss";
import Table from "./Table";
import useApplicationData from "hooks/useApplicationData";
import NavBarConfig from "./Template/NavBarConfig";
import Grid from "./Template/Grid"
import List from "./Template/List"
import AppList from "./AppList/AppList";
import 'bootstrap/dist/css/bootstrap.min.css';
import { getFieldsById } from "helpers/selectors";
import {BrowserRouter as Router, Link, Route, Routes, Navigate} from 'react-router-dom';

export default function Application() {
  const { getApplicationData, setConfig,  state, setApp, setLayouts, layouts, setPrimaryField, setSecondaryField, createNewRow, createNewColumn, deleteRow, deleteColumn, updateInputValue, saveInputValue, updateFieldValue, saveFieldValue} = useApplicationData();

  const tableHeaderArray = ((state.currentApplication.fields)) ? state.currentApplication.fields : [];
  const tableRecordArray = ((state.currentApplication.records)) ? state.currentApplication.records : [];
  const applicationID = ((state.currentApplication.application_id)) ? state.currentApplication.application_id : "";
  let fetchItem = [{key: "1", primary_field: "Strawberry", secondary_field: "Noun", position: 1}, {key: "2", primary_field: "Pinapple", secondary_field: "Noun", position: 2}, {key: "3", primary_field: "Apple", secondary_field: "Noun", position: 3}]
  let fields = getFieldsById(state,1)
  console.log(fields)

  return (
    <main className="layout">
      <section className="sidebar">
        <Router>
          <AppList/>
        </Router>
      <hr className="sidebar__separator sidebar--centered" />
      <NavBarConfig value={state.config} configs={state.configs} onChange={setConfig} fields={fields} setPrimaryField={setPrimaryField} setSecondaryField={setSecondaryField}/>
      </section>
      <section className="table">
      <Table tableHeaderArray={tableHeaderArray} tableDataArray={tableRecordArray} deleteRow={deleteRow} deleteColumn={deleteColumn} getApplicationData={getApplicationData} createNewRow={createNewRow} createNewColumn={createNewColumn} application_id={applicationID} updateInputValue={updateInputValue} saveInputValue={saveInputValue} updateFieldValue={updateFieldValue} saveFieldValue={saveFieldValue}/>
        </section>
      <section className="schedule">
        <Grid setLayouts={setLayouts} layouts={layouts}/>
      </section>
    </main>
  );
}

