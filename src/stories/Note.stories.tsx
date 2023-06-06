import Note from "../Components/Note";
import "../colorVariables.css"
import "../indentVariables.css"
import React from "react";
import {ComponentStory} from "@storybook/react";
import { INote } from "../types";
import { withReactContext } from 'storybook-react-context';
import { Context } from '../Context';
import { CustomProvider } from "../Context/CustomProvider";

interface IProps extends INote {
		onDel: (e: React.MouseEvent, id: INote["id"]) => void;
}

export default {
		title: "Note",
		component: Note,
		parameters: {
				docs: {
						description: {
								component: 'Note component. Has a transparent background, you need to set the page background'
						},
				},
		},
		decorators: [withReactContext({
				Context,
		}),
				(Story: any) => (
						<div style={{background: 'var(--bgPage)', height: 'max-content', padding: '20px',  borderRadius: 'var(--standart-br)'}}>
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
				style: {
						type: 'string',
						description: 'Addition styles for button',
				},
				onDel: {
						description: 'Function to delete note',
				},
		},
}

const Template: ComponentStory<typeof Note> = (args: IProps) => (
		<CustomProvider>
				<Note {...args} />
		</CustomProvider>
)

export const Default = Template.bind({});
Default.args = {
		id: 0,
		title: 'Hello',
		text: 'test',
		onDel: () => {}
};
