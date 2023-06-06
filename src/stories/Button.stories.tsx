import ButtonModel from "../Components/Buttons/ButtonModel";
import '../Components/Buttons/ButtonModel'
import "../colorVariables.css"
import "../indentVariables.css"
import React from "react";
import {ComponentStory} from "@storybook/react";
import { IoCloseSharp } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import {HiViewGridAdd} from "react-icons/hi";

interface IProps {
		component: JSX.Element;
		action:  'add' | 'cancel' | 'delete' | 'save';
		onClick?: (e: React.MouseEvent<HTMLElement>) => void;
		style?: string | undefined;
		type?:  "button" | "submit" | "reset",
		label?: any
}

export default {
		title: "Button",
		component: ButtonModel,
		parameters: {
				backgrounds: {
						values: [
								{ name: 'red', value: '#f00' },
								{ name: 'green', value: '#0f0' },
						],
				},
		},
		argTypes: {
				component: {
						description: 'Component to be rendered into button'
				},
				action: {
						type: 'string',
						description: '',
						options: ['add', 'cancel', 'delete', 'save'],
						control: {
								type: 'radio'
						}
				},
				type: {
						type: null
				},
				style: {
						type: 'string',
						description: 'Addition styles for button',
				},
				onClick: {
						description: 'Function to be executed on click',
				},
		},
}

const Template: ComponentStory<typeof ButtonModel> = (args: IProps) => <ButtonModel {...args} />

export const Sandbox = Template.bind({});
Sandbox.args = {
		// component: <IoCloseSharp size={30} />,
		component: <IoCloseSharp size={30} />,
		action: "cancel",
};

export const Save = Template.bind({});
Save.args = {
		component: <div>Save</div>,
		action: "save",
};

export const Cancel = Template.bind({});
Cancel.args = {
		component: <IoCloseSharp size={30} />,
		action: "cancel",
};

export const Delete = Template.bind({});
Delete.args = {
		component: <MdDelete size={20} />,
		action: "delete",
};

export const Add = Template.bind({});
Add.args = {
		component: <HiViewGridAdd size={20} />,
		action: "add",
};
