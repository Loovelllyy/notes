import {useContext} from "react";
import {Context} from "../index";
import {IContextValue} from "../../types";

export const useCustomContext = ():  IContextValue => {
		const ctx = useContext(Context);

		if (!ctx) throw Error("useCustomContext must be used within the CustomProvider");

		return ctx;
};
