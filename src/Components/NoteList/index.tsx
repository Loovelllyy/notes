import React, { useEffect, useState } from 'react';
import styles from "./styles.module.css";
import Note from '../Note'
import Input from "../Input";
import CreateUpdateNote from "../CreateUpdateNote";
import { addData, getData, deleteData } from "../../requests";

type TData = {id: number,  title: string, text: string}[];

function NoteList() {

    const initNote = {id: 0, title: 'Welcome!', text: 'Hello! This is your first Note. Let\'s make many new notes with important information for you and our service help you to save it all'};

    const [notesArr, setNotesArr] = useState<TData>([initNote]);
    const [noteState, setNoteState] = useState<{title: string, text: string}>({title: '', text: ''});
    const [currentID, setCurrentID] = useState<number>(0);
    const [visible, setVisible] = useState<boolean>(false);
    const [searchingItem, setSearchingID]  = useState<TData>([]);

    const [countId, setCountId] = useState<number>(0)


    const deleteNote = (ev: React.MouseEvent<HTMLElement>, id: number): void => {
        ev.stopPropagation();
        deleteData(id);
    }

    const addNote = (): void => {
        setVisible(true);
        setCountId((id) => id + 1);
    }

    const saveNote = (title: string, text: string, id?: number): void => {
        if (id) {
            addData(id, title, text);
            cancelCreate();
            setCurrentID(0);
            return;
        }
        if (!(title && text)) {
            cancelCreate();
            return;
        }
        addData(countId, title, text);
        cancelCreate();
        setCurrentID(0)
    }

    const cancelCreate = (): void => {
        setVisible(false);
        setCurrentID(0);
        setNoteState({title: '', text: ''});
    }

    const changeNote = (ev: React.MouseEvent<HTMLDivElement>, id: number, title: string, text: string) => {
        setVisible(true);
        setNoteState({title, text});
        setCurrentID(id);
    }

    const searchNote = (string: string): void => {
        console.log('search');
        if (!string) setSearchingID([]);
        const searchNotes: TData = [];
        for (let item of notesArr) {
            if((item.title.indexOf(string) === -1) && (item.text.indexOf(string) === -1)){}
            else searchNotes.push(item);
        }
        setSearchingID(searchNotes);
        console.log(searchNotes)
    }

    useEffect(() => {
        getData().then(data => data).then(data => setNotesArr(() => data));
    }, [notesArr]);

    return (
        <>
            <Input onSearch={ searchNote } addNote={ addNote } />

            {visible && <CreateUpdateNote onCancel={cancelCreate} onSave={saveNote}
                                                     title={noteState.title} text={noteState.text} id={ currentID }/>
            }
            <div className={ styles.notes }>
                { searchingItem.length? searchingItem.map((el) => {
                    return <Note key={el.id} id={el.id}
                                 title={el.title} text={el.text}
                                 onDel={deleteNote} onClick={changeNote}/>
                }) : notesArr.map((el) => {
                    return <Note key={el.id} id={el.id}
                                 title={el.title} text={el.text}
                                 onDel={deleteNote} onClick={changeNote}/>
                })}

            </div>
        </>

    )
}

export default NoteList