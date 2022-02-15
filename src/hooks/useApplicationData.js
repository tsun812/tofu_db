import { useState } from "react";


export default function useApplicationData(modeInput) {
  const [state, setState] = useState({
   
    config: "background-color",
    configs: [{configName: "background_color", avatar: null}, {configName: "font", avatar: null}, {configName: "description", avatar: null}, {configName: "display_theme", avatar: null}, {configName: "app_name", avatar: null}, {configName: "img_url", avatar: null} ]
  });
  console.log(state)
  const setConfig = (config) => setState({ ...state, config });
  return { state, setConfig };
}