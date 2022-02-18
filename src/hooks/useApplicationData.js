import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {
  const [state, setState] = useState({
    selectedApplicationName: "",
    selectedApplication: "",
    currentApplication: [],
    applications: [],
    records: [],
    fields: [],
    values: [],
    config: "background-color",
    configs: [
      { configName: "background_color", avatar: null },
      { configName: "font", avatar: null },
      { configName: "description", avatar: null },
      { configName: "display_theme", avatar: null },
      { configName: "app_name", avatar: null },
      { configName: "img_url", avatar: null },
    ],
    positions: null,
    primary_field: null,
    secondary_field: null,
    editStatus: "Loaded",
    selectedRecords: {},
  });
  const hello = () =>{console.log("hello")}
  const setConfig = (config) => setState({ ...state, config });
  const idNumber = parseInt(state.selectedApplication)
  const setPositions = (id, position) => {

      let params = {position: position}
      return axios.put(`http://localhost:3000/api/records/${id}`, params)
      .then((all) => {
       console.log(state);
      });
    }


  const setPrimaryField = (update, applicationId) => {
    console.log("before api call", applicationId)
    setState({...state,
      primary_field: update
    })
    let params = {primary_field: update}
    return axios.put(`http://localhost:3000/api/applications/${applicationId}`, params)
      .then((all) => {
        console.log('alllllllllllllllllllll')
        console.log(all)
        console.log("after api call", state)
        getApplicationData(applicationId);
        // window.location.reload()
      });

    
  };
  

  const setSecondaryField = (update, applicationId) => {
    console.log(update)
    setState({...state,
      secondary_field: update
    })

    let params = {secondary_field: update}
    return axios.put(`http://localhost:3000/api/applications/${applicationId}`, params)
      .then((all) => {
       console.log(state)
       getApplicationData(applicationId);
       
      });

  };

  const updateApplicationData = (fieldName ,data) =>{
    const deepClone = JSON.parse(JSON.stringify(state.currentApplication));
    deepClone.application[fieldName] = data;
    console.log(deepClone)
    setState((prev) => ({
      ...prev,
      currentApplication: deepClone,
    }));
  }

  const saveApplicationData = (applicationID, fieldname ,data) =>{
    let params = {
      [fieldname]: data,
    };
    axios.put(`/api/applications/${applicationID}`, params)
    .then((all) => {
      console.log('application data saved to database.')
      getApplicationData(applicationID);
    });
  }

  // get all the API datas we need
  useEffect(() => {
    Promise.all([
      axios.get('/api/applications'),
      axios.get('/api/records'),
      axios.get('/api/fields'),
      axios.get('/api/values'),
      axios.get(`http://localhost:3000/api/recordBySelectedFields/1`)
    ]).then((all) => {
      console.log('loading all data from API')
      console.log(all[0]['data'])
      console.log('after all data from API')
      // load first app's data if there are apps
      let first_application
      if (all[0]['data'].length > 0) {
        first_application = all[0]['data'][0]['id']
      } else {
        first_application = null
      }
      getApplicationData(first_application)
      setState(prev => ({
        ...prev,
        applications: all[0]['data'],
        records: all[1]['data'],
        fields: all[2]['data'],
        values: all[3]['data'],
        selectedRecords: all[4]['data'].records,
        selectedApplication: first_application
      })
      );
    })
  }, []);

  // useEffect(()=>{
  //   const application = state.currentApplication
 
  //   setState(prev => ({
  //     ...prev,
  //     currentApplication: application,
  //   }));
  // }, [state.currentApplication])

  const createNewRow = (applicationID) => {
    let params = {
      position: 0,
      application_id: applicationID,
    };
    axios.post(`/api/records/`, params).then((all) => {
      getApplicationData(applicationID);
    });
  };

  const deleteRow = (recordID, applicationID) => {
    axios.delete(`/api/records/${recordID}`).then((all) => {
      getApplicationData(applicationID);
    });
  };

  const createNewColumn = (applicationID) => {
    let params = {
      field_name: "New Column",
      field_type: "String",
      application_id: applicationID,
    };
    axios.post(`/api/fields/`, params).then((all) => {
      getApplicationData(applicationID);
    });
  };

  const deleteColumn = (recordID, applicationID) => {
    axios.delete(`/api/fields/${recordID}`).then((all) => {
      getApplicationData(applicationID);
    });
  };

  //this update the state when user is typing in input
  const updateFieldValue = (field_id, field_name) => {
    const deepClone = JSON.parse(JSON.stringify(state.currentApplication));
    deepClone["fields"][field_id]["field_name"] = field_name;
    setState((prev) => ({
      ...prev,
      currentApplication: deepClone,
    }));
  };
  // this save values to database
  const saveFieldValue = (applicationID, field_id, field_name) => {
    console.log("Field value saved to API!");
    let params = {
      field_name: field_name,
    };
    axios.put(`/api/fields/${field_id}`, params).then((all) => {
      getApplicationData(applicationID);
    });
  };

  //this update the state when user is typing in input
  const updateInputValue = (record_id, value_id, value) => {
    const deepClone = JSON.parse(JSON.stringify(state.currentApplication));
    deepClone.records[record_id].values[value_id].field_value = value;
    setState((prev) => ({
      ...prev,
      currentApplication: deepClone,
    }));
  };

  // this save values to database
  const saveInputValue = (applicationID, value_id, value) => {
    console.log("saved to database!");
    setState((prev) => ({
      ...prev,
      editStatus: "Saving...",
    }));
    let params = {
      field_value: value,
    };
    axios.put(`/api/values/${value_id}`, params).then((all) => {
      setState((prev) => ({
        ...prev,
        editStatus: "Data Saved!",
      }));
      getApplicationData(applicationID);
    });
  };

  //set day when user click on the name of the day, e.g."Monday"
  const setApplication = (application_id) => {
    getApplicationData(application_id);
  };

  const getApplicationData = (applicationID) => {
    Promise.all([
    axios.get(`/api/applications/${applicationID}`),
    axios.get(`http://localhost:3000/api/recordBySelectedFields/${applicationID}`),
    ])
    .then((all) => {
      setState((prev) => ({
        ...prev,
        selectedApplicationName: all[0]["data"].application.app_name,
        selectedApplication: applicationID,
        currentApplication: all[0]["data"],
        selectedRecords: all[1]["data"].records
      }));

        
      axios.get(`http://localhost:3000/api/fields`)
 
      .then(all =>{
        setState(prev => ({
          ...prev,
        fields: all['data'],
        //selectedRecords: all[1]['data'].records,
       
        })
        );
        console.log(state.selectedRecords)
      })
    });
  };

  const createNewApplication = (applicationName) => {
    let params = {
      app_name: applicationName
    };
    axios.post(`/api/applications/`, params).then((all) => {
      console.log("allllllllllllllll")
      console.log(all,"all")
      setState((prev) => ({
        ...prev,
        applications: all["data"]
      }));
    });
  };

  const deleteApplication = (applicationID) => {
    axios.delete(`/api/applications/${applicationID}`).then((all) => {
      setState((prev) => ({
        ...prev,
        applications: all["data"],
      }));
    });
  };
  return {
    getApplicationData,
    setApplication,
    state,
    setConfig,
    setPositions,
    setPrimaryField,
    setSecondaryField,
    createNewRow,
    createNewColumn,
    createNewApplication,
    deleteApplication,
    deleteRow,
    deleteColumn,
    updateInputValue,
    saveInputValue,
    updateFieldValue,
    saveFieldValue,
    updateApplicationData,
    saveApplicationData
  };
}
