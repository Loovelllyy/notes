import {ReactElement, useMemo, useState} from "react";
import { Context } from "../index";
import {IContextValue, INote} from "../../types";

const CustomProvider = ({ children }: { children: ReactElement }) => {
		const [show, setShow] = useState(false);
		const [noteData, setNoteData] = useState<INote>({} as INote);


		const contextValue = useMemo((): IContextValue => ({
				isShow: show,
				payload: noteData,
				showModal: (payload) => {
						if(payload) setNoteData(payload);
						setShow(true)
				},
				closeModal: () => {
						setTimeout(() => {
								setShow(false);
								setNoteData({} as INote);
						}, 0)
				},

		}), [show, setShow, noteData])

		return (
				<Context.Provider value={ contextValue }>
						{ children }
				</Context.Provider>
		);
};

export { CustomProvider }