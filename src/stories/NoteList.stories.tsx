import CreateUpdateNote from "../Components/CreateUpdateNote";
import {withReactContext} from "storybook-react-context";
import {Context} from "../Context";
import React from "react";
import {ComponentStory} from "@storybook/react";
import Note from "../Components/Note";
import {CustomProvider} from "../Context/CustomProvider";
import NoteList from "../Components/NoteList";
import {rest} from "msw";

export default {
		title: "Note list",
		component: CreateUpdateNote,
		parameters: {
				docs: {
						description: {
								component: 'List of notes'
						},
				},
		},
		decorators: [withReactContext({
				Context,
		}),
				(Story: any) => (
						<div style={{background: 'var(--bgPage)', height: 'max-content', borderRadius: 'var(--standart-br)'}}>
								<Story />
						</div>
				)
		],
		argTypes: null,
}
const testData =  [
		{
				"title": "111111111",
				"text": "111111111",
				"id": 1
		},
		{
				"title": "22222222222",
				"text": "22222222222",
				"id": 2
		},
		{
				"title": "33333333333333333333",
				"text": "33333333333333333333",
				"id": 3
		},
		{
				"title": "444444444 444444444444444 4444444",
				"text": "444444444 444444444444444 4444444 444444444 444444444444444 4444444444444444 444444444444444 4444444",
				"id": 4
		},
		{
				"title": "5555555 555555555555555555 555555",
				"text": "5555555 555555555555555555 5555555555555 555555555555555555 5555555555555 555555555555555555 5555555555555 555555555555555555 555555",
				"id": 5
		},
];

const Template: ComponentStory<typeof Note> = () => (
		<CustomProvider>
				<NoteList />
		</CustomProvider>
)
export const Note_List = Template.bind({});
Note_List.parameters = {
		msw: {
				handlers: [
						rest.get('http://localhost:3001/notes', (req, res, ctx) => {
								return res(ctx.json(testData))
						}),
						rest.delete('http://localhost:3001/notes/:id', (req, res, ctx) => {
								return res(ctx.json({}))
						}),
				]
		},
}
// NoteList.args = {
// 		id: 0,
// 		title: 'Hello',
// 		text: 'test',
// 		onDel: (e) => {}
// };
