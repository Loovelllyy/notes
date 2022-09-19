import React, { useEffect, useState } from 'react';
import styles from "./styles.module.css";
import Note from '../Note'
import Input from "../Input";
import CreateUpdateNote from "../CreateUpdateNote";
import {addNewNote, deleteNote, getNotes } from "../../requests/"
import {INote} from "../../types";

function NoteList() {

    const [notesArr, setNotesArr] = useState<INote[]>([]);
    const [noteState, setNoteState] = useState<{title: string, text: string}>({title: '', text: ''});
    const [currentID, setCurrentID] = useState<number>(0);
    const [visible, setVisible] = useState<boolean>(false);
    const [searchingItem, setSearchingID]  = useState<INote[]>([]);

    // const saveNote = (title: string, text: string, id?: number): void => {
    //     if (id) {
    //         if (!title && !text) {
    //             cancelCreate();
    //             deleteNote(id);
    //             return;
    //         }
    //         // addData(id, title, text);
    //         cancelCreate();
    //         setCurrentID(0);
    //         return;
    //     }
    //     if (!title && !text) {
    //         cancelCreate();
    //         return;
    //     }
    //     // addData(countId, title, text);
    //     cancelCreate();
    //     cancelCreate();
    //     setCurrentID(0)
    // }

    // const cancelCreate = (): void => {
    //     setVisible(false);
    //     setCurrentID(0);
    //     setNoteState({title: '', text: ''});
    // }

    // const changeNote = (ev: React.MouseEvent<HTMLDivElement>, id: number, title: string, text: string) => {
    //     setVisible(true);
    //     setNoteState({title, text});
    //     setCurrentID(id);
    // }

    // const searchNote = (string: string): void => {
    //     if (!string) setSearchingID([]);
    //     const searchNotes: INote[] = [];
    //     for (let item of notesArr) {
    //         if((item.title.indexOf(string) === -1) && (item.text.indexOf(string) === -1)){}
    //         else searchNotes.push(item);
    //     }
    //     setSearchingID(searchNotes);
    // }

    useEffect(() => {
        getNotes().then(d => {
            console.log(d)
            if (d[0]) setNotesArr(d);
        })
    }, [getNotes]);


    return (
        <div className={ styles.notes }>
            { notesArr.map(note => {
                return (
                  <Note
                    key={note.id} id={note.id}
                    title={note.title} text={note.text}
                  />
                )
            }) }
            {/*{visible && <CreateUpdateNote onCancel={cancelCreate} onSave={saveNote}*/}
            {/*                                         title={noteState.title} text={noteState.text} id={ currentID }/>*/}
            {/*}*/}
            {/*<div className={ styles.notes }>*/}
            {/*    { searchingItem.length? searchingItem.map((el) => {*/}
            {/*        return <Note key={el.id} id={el.id}*/}
            {/*                     title={el.title} text={el.text}*/}
            {/*                     onDel={deleteNote} onClick={changeNote}/>*/}
            {/*    }) : notesArr.map((el) => {*/}
            {/*        return <Note key={el.id} id={el.id}*/}
            {/*                     title={el.title} text={el.text}*/}
            {/*                     onDel={deleteNote} onClick={changeNote}/>*/}
            {/*    })}*/}

            {/*</div>*/}
        </div>

    )
}

export default NoteList