import { useEffect } from "react";
import Axios from "axios";
import { useState } from "react";

export default function useApplicationData() {

    const [state, setState] = useState({
        app: "Dictionary",
        apps: [],
    });

    useEffect(() => {
        Promise.all([
            Axios.get("/api/applications"),
            // console.log(Axios.get("/api/applications"))
        ])
            .then((all) => {
                setState({
                    ...state,
                    apps: all[0].data,
                });
                console.log(all,"all")
            })
            .catch((error) => {
                console.log("error");
            });
    }, []);
function setApp(app) {
        const newState = { ...state, app: app };
        setState(newState);
    }

    return { setApp, state }
};