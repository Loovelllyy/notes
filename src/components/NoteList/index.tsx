import React from 'react';
import style from "../main/style.module.css";
import Note from '../note'

type TProps = {
    notes: {id: number,  title: string, text: string}[];
    deleteNote: (ev: React.MouseEvent<HTMLElement>, id: number) => void;
    changeNote: (ev: React.MouseEvent<HTMLDivElement>, id: number, title: string, text: string) => void;
}

function NoteList({ notes, deleteNote, changeNote }: TProps) {
    return (
        <div className={ style.notes }>
            {notes.map((el) => {
                return <Note key={el.id} id={el.id}
                             title={el.title} text={el.text}
                             onDel={ deleteNote } onClick={ changeNote } />
            })}
        </div>
    )
}

export default NoteList