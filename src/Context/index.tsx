import React from "react";
import {IContextValue} from "../types";
export const Context = React.createContext<IContextValue>({ isShow: false });