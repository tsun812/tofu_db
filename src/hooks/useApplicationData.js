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
    background_color: null,
    editStatus: "Loaded",
    filteredRecords: {},
    selectedRecords: {},
    selectedRecordsDetails: {},
    login: null,
  });

  const setFilteredRecords = (filteredRecords) => {
    setState((prev) => ({
      ...prev,
      filteredRecords: filteredRecords,
    }));
  };
  const setConfig = (config) => setState({ ...state, config });
  const idNumber = parseInt(state.selectedApplication);
  const setSortBy = () => {
    let reverse = JSON.parse(JSON.stringify(state.filteredRecords)).reverse();
    setState((prev) => ({
      ...prev,
      filteredRecords: reverse,
    }));
  };
  // const setPositions = (id, position, applicationId) => {
  //   let params = { position: position };
  //   return axios
  //     .put(`http://localhost:3000/api/records/${id}`, params)
  //     .then((all) => {
  //       getApplicationData(applicationId);
  //     });
  // };

  const setPrimaryField = (update, applicationId) => {
    //setState({ ...state, primary_field: update });
    let params = { primary_field: update };
    return axios
      .put(`/api/applications/${applicationId}`, params)
      .then((all) => {
        getApplicationData(applicationId);
      });
  };

  const setSecondaryField = (update, applicationId) => {
    // setState({ ...state, secondary_field: update });
    let params = { secondary_field: update };
    return axios
      .put(`/api/applications/${applicationId}`, params)
      .then((all) => {
        //console.log(state)
        getApplicationData(applicationId);
      });
  };

  const setImageField = (update, applicationId) => {
    console.log(update);
    setState({ ...state, background_color: update });

    let params = { background_color: update };
    return axios
      .put(`/api/applications/${applicationId}`, params)
      .then((all) => {
        //console.log(state)
        getApplicationData(applicationId);
      });
  };
  //updating field name when typing, update state
  const updateApplicationData = (fieldName, data) => {
    const deepClone = JSON.parse(JSON.stringify(state.currentApplication));
    deepClone.application[fieldName] = data;
    setState((prev) => ({
      ...prev,
      currentApplication: deepClone,
    }));
  };
  //save field name to database, update state
  const saveApplicationData = (applicationID, fieldname, data) => {
    let params = {
      [fieldname]: data,
    };
    axios.put(`/api/applications/${applicationID}`, params).then((all) => {
      //console.log('application data saved to database.')
      getApplicationData(applicationID);
    });
  };

  // Initial API load, only run when page is loaded
  useEffect(() => {
    fetchAPI();
  }, []);

  const fetchAPI = () => {
    Promise.all([
      axios.get("/api/applications"),
      axios.get("/api/records"),
      axios.get("/api/fields"),
      axios.get("/api/values"),
    ]).then((all) => {
      // load first app's data if there are apps
      let first_application;
      if (all[0]["data"].length > 0) {
        first_application = all[0]["data"][0]["id"];
        axios
          .get(`/api/recordBySelectedFields/${first_application}`)
          .then((all) => {
            setState((prev) => ({
              ...prev,
              selectedRecords: all.data.records,
            }));
          });
      } else {
        first_application = null;
        setState((prev) => ({
          ...prev,
          selectedRecords: null,
        }));
      }
      getApplicationData(first_application);
      setState((prev) => ({
        ...prev,
        applications: all[0]["data"],
        records: all[1]["data"],
        fields: all[2]["data"],
        values: all[3]["data"],
        selectedApplication: first_application,
      }));
    });
  };

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
      field_type: "Text",
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
  const updateFieldValue = (type, field_id, inputValue) => {
    const deepClone = JSON.parse(JSON.stringify(state.currentApplication));
    if (type === 1) {
      console.log("route 1");
      deepClone["fields"][field_id]["field_name"] = inputValue;
    }
    if (type === 2) {
      console.log("route 2");
      deepClone["fields"][field_id]["field_type"] = inputValue;
    }
    setState((prev) => ({
      ...prev,
      currentApplication: deepClone,
    }));
  };
  // this save values to database
  const saveFieldValue = (applicationID, field_id, field_name, field_type) => {
    //console.log("Field value saved to API!");
    let params;
    if (field_name) {
      console.log("route a");
      params = {
        field_name: field_name,
      };
    }
    if (field_type) {
      console.log("route b");
      params = {
        field_type: field_type,
      };
    }
    console.log("params");
    console.log(params);
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
    //console.log("saved to database!");
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

  //fetch all data belong to current app id when selected
  const setApplication = (application_id) => {
    getApplicationData(application_id);
  };

  const getApplicationData = (applicationID) => {
    if (applicationID) {
      Promise.all([
        axios.get(`/api/applications/${applicationID}`),
        axios.get(
          `http://localhost:3000/api/recordBySelectedFields/${applicationID}`
        ),
        axios.get(`/api/applications`),
        axios.get(`/api/records/`),
        axios.get(`/api/fields/`),
        axios.get(`/api/values/`),
      ]).then((all) => {
        //console.log('get Application Data Ran!')
        setState((prev) => ({
          ...prev,
          selectedApplicationName: all[0]["data"].application.app_name,
          selectedApplication: applicationID,
          currentApplication: all[0]["data"],
          selectedRecords: all[1]["data"].records,
          filteredRecords: all[1]["data"].records,
          applications: all[2]["data"],
          records: all[3]["data"],
          fields: all[4]["data"],
          values: all[5]["data"],
        }));

        axios
          .get(`http://localhost:3000/api/fields`)

          .then((all) => {
            setState((prev) => ({
              ...prev,
              fields: all["data"],
            }));
            //console.log(state.selectedRecords)
          });
      });
    } else {
      console.log("No Applications found. Abort API request");
    }
  };

  const createNewApplication = (applicationName) => {
    let params = {
      app_name: applicationName,
      display_theme: "List",
    };
    axios.post(`/api/applications/`, params).then((all) => {
      // console.log("WATCH HERE!!!!!!!!!!!!!!!!!!!!!!")
      // console.log(all)
      // console.log("WATCH HERE!!!!!!!!!!!!!!!!!!!!!!")
      getApplicationData(all["data"].id);
    });
  };

  const deleteApplication = (applicationID) => {
    axios.delete(`/api/applications/${applicationID}`).then((all) => {
      fetchAPI();
    });
  };

  const setRecordDetails = (recordID) => {
    console.log(state.currentApplication.records[recordID]);
    const selectedRecordDetail = state.currentApplication.records[recordID];
    setState((prev) => ({
      ...prev,
      selectedRecordsDetails: selectedRecordDetail,
    }));
  };

  return {
    getApplicationData,
    setApplication,
    state,
    setFilteredRecords,
    setConfig,
    setSortBy,
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
    saveApplicationData,
    setRecordDetails,
    setImageField,
  };
}
