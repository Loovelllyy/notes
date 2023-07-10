import { INote } from "../types";
import $api from "./config";

export const addNewNote = (data: Omit<INote, "id">) => {
		return $api.post("/notes", JSON.stringify(data)).then(d => d.data).catch(e => e);
}

export const deleteNote = (id: INote["id"]) => {
	 return	$api.delete(`/notes/${id}`).catch(e => e);
}

export const getNotes = () => {
		return $api.get(`/notes`, ).then(d => d.data).catch(e => e);
}

export const updateNote = (data: INote) => {
		return $api.put(`/notes/${data.id}`, JSON.stringify(data)).catch(e => e);
}
