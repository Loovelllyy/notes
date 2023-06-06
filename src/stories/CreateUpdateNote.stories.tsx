import React, {useMemo, useState} from "react";
import "../colorVariables.css"
import "../indentVariables.css"
import {ComponentStory} from "@storybook/react";
import {IContextValue, INote} from "../types";
import { withReactContext } from 'storybook-react-context';
import { Context } from '../Context';
import { CustomProvider } from "../Context/CustomProvider";
import CreateUpdateNote from "../Components/CreateUpdateNote";
import ButtonModel from "../Components/Buttons/ButtonModel";
import {HiViewGridAdd} from "react-icons/hi";
import { rest } from 'msw'

export default {
		title: "Modal",
		component: CreateUpdateNote,
		parameters: {
				docs: {
						description: {
								component: 'Modal window for create/update your note'
						},
				},
		},
		decorators: [withReactContext({
				Context,
		}),
				(Story: any) => (
						<div style={{position: "relative"}}>
								<Story />
						</div>
				)
		],
		argTypes: {
				id: {
						description: 'Note`s id'
				},
				title: {
						type: 'string',
						description: 'Note`s title',
				},
				text: {
						type: 'string',
						description: 'Note`s text',
				},
				isShow: {
						type: 'boolean',
						description: 'Show note',
						defaultValue: false,
						control: {
								type: 'boolean',
						}
				},
		},
}


const Template: ComponentStory<typeof CreateUpdateNote> = ({isShow, ...args}) => {

		const [show, setShow] = useState(isShow);
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
								isShow = false;
								setNoteData({} as INote);
						}, 0)
				},

		}), [show, setShow, noteData])

		return (
				<CustomProvider>
						<Context.Provider value={ contextValue }>
								<ButtonModel data-testid={'click'} component={<HiViewGridAdd size={20} />} action={"add"} onClick={() => {
										console.log(contextValue.isShow);
										setShow(!contextValue.isShow)
								}}></ButtonModel>
								<CreateUpdateNote {...args} isShow={contextValue.isShow} />
						</Context.Provider>
				</CustomProvider>
		)
}

export const CreateNote = Template.bind({});
CreateNote.args = {
		isShow: false,
}
CreateNote.parameters = {
		msw: {
				handlers: [
						rest.post('http://localhost:3001/notes', (req, res, ctx) => {
								console.log(123);
								return res(ctx.json({successful: true}))
						}),
				]
		},
}
