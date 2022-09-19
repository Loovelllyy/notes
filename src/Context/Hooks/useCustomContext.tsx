import {useContext} from "react";
import {Context} from "../index";

export const useCustomContext = () => {
		const ctx = useContext(Context);

		if (!ctx) throw Error("useCustomContext must be used within the CustomProvider");

		return ctx;
};
