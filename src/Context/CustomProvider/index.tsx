import {ReactElement, useEffect, useMemo, useState} from "react";
import { Context } from "../index";
import {IContextValue} from "../../types";

const CustomProvider = ({ children }: { children: ReactElement }) => {
		const [show, setShow] = useState(false);
		const [noteData, setNoteData] = useState<unknown>(null);


		const contextValue = useMemo((): IContextValue => ({
				isShow: show,
				payload: noteData,
				showModal: (payload) => {
						setNoteData(payload);
						setShow(true)
				},
				closeModal: () => {
						console.log("was closed");
						setTimeout(() => {
								setShow(false);
								setNoteData(null);
						}, 0)
				},

		}), [show, setShow, noteData])


		useEffect(() => {
				console.log("SHOW", show)
		}, [show])

		return (
				<Context.Provider value={ contextValue }>
						{ children }
				</Context.Provider>
		);
};

export { CustomProvider }