import React, { useEffect, useState } from 'react';
import styles from "./styles.module.css";
import Note from '../Note'
import {deleteNote, getNotes} from "../../requests/"
import {INote} from "../../types";
import {useCustomContext} from "../../Context/Hooks/useCustomContext";

function NoteList() {

    const [notesArr, setNotesArr] = useState<INote[]>([]);

    const { isShow } = useCustomContext();

    const handleDelete = (e: React.MouseEvent, id: INote["id"]) => {
        e.stopPropagation();
        deleteNote(id).then(() => setNotesArr((prevState) => prevState.filter(note => note.id !== id)));
    }

    useEffect(() => {
        if (!isShow) {
            getNotes().then(d => {
                if (d[0]) setNotesArr(d);
            });
        }
    }, [getNotes, isShow]);

    return (
      <div className={ styles.notes }>
          { notesArr.map(note => {
              return (
                <Note
                  onDel={ handleDelete }
                  key={note.id} id={note.id}
                  title={note.title} text={note.text}
                />
              )
          })}
      </div>

    )
}

export default NoteList