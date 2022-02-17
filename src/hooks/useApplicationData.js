import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {
  
  const [state, setState] = useState({
    app: "Dictionary",
    selectedApplication: "",
    currentApplication: [],
    applications: [],
    records: [],
    fields: [],
    values: [],
    config: "background-color",
    configs: [{configName: "background_color", avatar: null}, {configName: "font", avatar: null}, {configName: "description", avatar: null}, {configName: "display_theme", avatar: null}, {configName: "app_name", avatar: null}, {configName: "img_url", avatar: null} ],
    layouts: {lg: []},
    primary_field: "",
    secondary_field:"",
    editStatus: "Loaded",
    selectedRecords: {}

  });
  let appId = parseInt(state.selectedApplication)
  const setConfig = (config) => setState({ ...state, config });
  const setLayouts = (layouts) => setState({ ...state, layouts});
  const setPrimaryField = (update, applicationId) => {
    console.log(update)
    setState(prev => ({
      ...prev,
      primary_field:update
    }));
    console.log(state);
    let params= {primary_field: update, id: applicationId}
    return axios.put(`http://localhost:3000/api/applications/${applicationId}`,params)
    .then((all) => {
      console.log(all)
    });
  };

  const setSecondaryField = (update, applicationId) => {
    console.log(update)
    setState(prev => ({
      ...prev,
      secondary_field:update
    }));
    console.log(state);
    let params= {secondary_field: update, id:applicationId}
    return axios.put(`http://localhost:3000/api/applications/${applicationId}`,params)
    .then((all) => {
      console.log(all)
    });
  };

 

  
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
      console.log(all)
      setState(prev => ({
        ...prev,
        applications: all[0]['data'],
        records: all[1]['data'],
        fields: all[2]['data']  ,
        values: all[3]['data'],
        selectedRecords: all[4]['data'].records
      })
      );
    })
  }, []);


  // useEffect(()=>{
  //   const application = state.currentApplication
  //   console.log('application_id')
  //   console.log('useEffecthere')
  //   console.log(application)
  //   setState(prev => ({
  //     ...prev,
  //     currentApplication: application,
  //   }));
  // }, [state.currentApplication])

  const createNewRow = applicationID => {
    let params = {
      position: 0,
      application_id: applicationID
    }
    axios.post(`/api/records/`,params)
    .then((all) => {
      getApplicationData(applicationID) 
    });
  }

  const deleteRow = (recordID, applicationID) => {
    axios.delete(`/api/records/${recordID}`)
    .then((all) => {
      getApplicationData(applicationID)
    });
  }

  const createNewColumn = applicationID => {
    let params = {
      field_name: "New Column",
      field_type: "String",
      application_id: applicationID
    }
    axios.post(`/api/fields/`,params)
    .then((all) => {
      getApplicationData(applicationID)
    });
  }

  const deleteColumn = (recordID, applicationID) => {
    axios.delete(`/api/fields/${recordID}`)
    .then((all) => {
      getApplicationData(applicationID)
    });
  }

  //this update the state when user is typing in input
    const updateFieldValue = (field_id, field_name) => {
      const deepClone = JSON.parse(JSON.stringify(state.currentApplication))
      deepClone['fields'][field_id]['field_name'] = field_name
      setState(prev => ({
        ...prev,
        currentApplication: deepClone,
      }));
    }
  // this save values to database
  const saveFieldValue = (applicationID, field_id, field_name) => {
    console.log('Field value saved to API!')
    let params = {
      field_name: field_name
    }
    axios.put(`/api/fields/${field_id}`,params)
    .then((all) => {
      getApplicationData(applicationID)
    });
  }

 

  //this update the state when user is typing in input
  const updateInputValue = (record_id, value_id, value) => {
    const deepClone = JSON.parse(JSON.stringify(state.currentApplication))
    deepClone.records[record_id].values[value_id].field_value = value
    setState(prev => ({
      ...prev,
      currentApplication: deepClone,
    }));
  }

  // this save values to database
  const saveInputValue = (applicationID, value_id, value) => {
    console.log('saved to database!')
    let params = {
      field_value: value
    }
    axios.put(`/api/values/${value_id}`,params)
    .then((all) => {
      getApplicationData(applicationID)
    });
  }
  
  

  //set day when user click on the name of the day, e.g."Monday"
  const setApplication = application_id => {
    getApplicationData(application_id)
  };

  const getApplicationData = applicationID => {
    axios.get(`/api/applications/${applicationID}`)
      .then((all) => {
        setState(prev => ({
          ...prev,
          selectedApplication: applicationID,
          currentApplication: all['data'],
        }));
      });
  }

const createNewApplication = applicationID => {
  let params = {
   applicationID: "",
}
  axios.post(`/api/applications/`,params)
  .then((all) => {
    getApplicationData(applicationID)
  });
}

const deleteApplication = applicationID => {
axios.delete(`/api/applications/${applicationID}`)
.then((all) => {
  setState(prev => ({
    ...prev,
    applications: all['data'],
  }));
});  
}

  return {getApplicationData, setApplication, state, setConfig, setLayouts, setPrimaryField, setSecondaryField, createNewRow, createNewColumn, createNewApplication, deleteApplication, deleteRow, deleteColumn, updateInputValue, saveInputValue, updateFieldValue, saveFieldValue};

}
