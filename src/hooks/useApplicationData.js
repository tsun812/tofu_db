import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {

  const [state, setState] = useState({
    selectedApplication: "",
    currentApplication: [],
    applications: [],
    records: [],
    fields: [],
    values: []

  });

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

  return { getApplicationData, setApplication, state };
};