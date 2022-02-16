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
  const { getApplicationData, setConfig,  state, setApp, setLayouts, layouts, setPrimaryField, setSecondaryField} = useApplicationData();

  const tableHeaderArray = ((state.currentApplication.fields)) ? state.currentApplication.fields : [];
  const tableRecordArray = ((state.currentApplication.records)) ? state.currentApplication.records : [];
  const tableValueArray = ((state.currentApplication['values'])) ? state.currentApplication['values'] : [];
  console.log(tableHeaderArray)
  console.log(tableRecordArray)
  console.log(tableValueArray)
  const result =[]

  tableRecordArray.forEach(record => {
    console.log(record.id)
    let valuesArrayForThisRecord = tableValueArray.filter(value => {
      // record.id === value.id
      console.log(record.id)
      console.log(value.id)
    })
    console.log(valuesArrayForThisRecord)
    record.values = valuesArrayForThisRecord
    result.push(record)
    }
  );
  console.log(result)
  
   const tableHeaderArrayMock = [
    {
        "id": 3,
        "field_name": "Building Name",
        "field_type": "string",
        "created_at": "2022-02-14T18:27:51.369Z",
        "updated_at": "2022-02-14T18:27:51.369Z",
        "application_id": 2
    },
    {
        "id": 4,
        "field_name": "Unit",
        "field_type": "string",
        "created_at": "2022-02-14T18:27:51.371Z",
        "updated_at": "2022-02-14T18:27:51.371Z",
        "application_id": 2
    }
];
  const tableDataArray = [["Alfreds Futterkiste", "Maria Anders", "Germany"],["Centro comercial Moctezuma", "Francisco Chang", "Mexico"],["Ernst Handel", "Roland Mendel", "Austria"]];
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
      <Table tableHeaderArray={tableHeaderArray} tableDataArray={tableDataArray}/>
        <button onClick={() => getApplicationData(1)}>Get data</button>
        </section>
      <section className="schedule">
        <Grid setLayouts={setLayouts} layouts={layouts}/>
      </section>
    </main>
  );
}

