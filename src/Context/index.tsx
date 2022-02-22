import {createContext} from "react";

const themes = {
    light: {
        background: 'linear-gradient(246deg, #d5cffd 0%, #cbedfc 100%)',
        color: 'rgb(33 91 151)',
    },
    dark: {
        background: 'linear-gradient(246deg, #2a2952 0%, #126185 100%)',
        color: 'rgb(203, 203, 203)',
    }
}

export const MyContext = createContext(themes.light);