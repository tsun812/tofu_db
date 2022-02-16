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
    configs: [{configName: "background_color", avatar: null}, {configName: "font", avatar: null}, {configName: "description", avatar: null}, {configName: "display_theme", avatar: null}, {configName: "app_name", avatar: null}, {configName: "img_url", avatar: null} ]

  });
  const setConfig = (config) => setState({ ...state, config });
  // get all the API datas we need
  useEffect(() => {
    Promise.all([
      axios.get('/api/applications'),
      axios.get('/api/records'),
      axios.get('/api/fields'),
      axios.get('/api/values')
    ]).then((all) => {
      setState(prev => ({
        ...prev,
        applications: all[0]['data'],
        records: all[1]['data'],
        fields: all[2]['data'],
        values: all[3]['data']
      }));
    })
  }, []);

  const createNewRow = applicationID => {
    let params = {
      position: 0,
      application_id: applicationID
    }
    axios.post(`/api/records/`,params)
    .then((all) => {
      console.log(all['data'])
      // setState(prev => ({
      //   ...prev,
      //   currentApplication: all['data'],
      // }));
    });
  }

  const deleteRow = recordID => {
    axios.delete(`/api/records/${recordID}`)
    .then((all) => {
      console.log(all['data'])
      // setState(prev => ({
      //   ...prev,
      //   currentApplication: all['data'],
      // }));
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
      console.log(all['data'])
      // setState(prev => ({
      //   ...prev,
      //   currentApplication: all['data'],
      // }));
    });
  }

  const deleteColumn = recordID => {
    axios.delete(`/api/fields/${recordID}`)
    .then((all) => {
      console.log(all['data'])
      // setState(prev => ({
      //   ...prev,
      //   currentApplication: all['data'],
      // }));
    });
  }

  //set day when user click on the name of the day, e.g."Monday"
  const setApplication = application => setState({ ...state, application });

  const getApplicationData = applicationID => {
    axios.get(`/api/applications/${applicationID}`)
      .then((all) => {
        //console.log(all['data'])
        setState(prev => ({
          ...prev,
          currentApplication: all['data'],
        }));
      });
  }

  function setApp(app) {
    const newState = { ...state, app: app };
    setState(newState);
}

  return {getApplicationData, setApplication, state, setConfig, setApp, createNewRow, createNewColumn, deleteRow, deleteColumn};
};
