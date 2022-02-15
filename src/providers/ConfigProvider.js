
import React, { createContext, useState } from 'react';

// Create a Context
export const configContext = createContext();

// Create a Component wrapper from Context.Provider
export default function ConfigProvider(props) {

  // Here is our Shared State Object
  const [config, setConfig] = useState("");

  // Functions to change  the counter state item
  const select = function(name) {
    setConfig(name);
  };

  // This list can get long with a lot of functions.  Reducer may be a better choice
  const providerData = {config, select, setConfig};

  // We can now use this as a component to wrap anything 
  // that needs our state
  return (
    <configContext.Provider value={providerData}>
      {props.children}
    </configContext.Provider>
  );
};
