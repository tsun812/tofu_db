import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {
  
  const [state, setState] = useState({
    app: "Dictionary",
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

  return {getApplicationData, setApplication, state, setConfig, setApp};
};
