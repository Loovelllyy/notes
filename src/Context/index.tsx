import {createContext} from "react";

export const themes: {light: {background: string, color: string}, dark: {background: string, color: string}} = {
    light: {
        background: 'linear-gradient(90deg, rgba(255,149,149,1) 0%, rgba(255,244,150,1) 100%)',
        color: 'rgb(0,0,0)',
    },
    dark: {
        background: 'radial-gradient(circle, rgba(140,140,140,1) 7%, rgba(99,99,99,1) 100%)',
        color: 'rgb(255, 255, 255)',
    }
}

export const MyContext = createContext(themes.light);