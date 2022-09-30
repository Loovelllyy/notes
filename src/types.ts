export interface INote {
		id: number,
		title: string,
		text: string
}

export interface IContextValue<Payload = INote>  {
		isShow: boolean
		showModal?: (arg?: Payload) => void;
		closeModal?: () => void;
		payload?: Payload
}
