import React, {DetailedHTMLProps, HTMLAttributes, useCallback, useEffect, useState} from 'react';
import styles from "./styles.module.css";
import Note from '../Note'
import Input from "../Input";
import CreateUpdateNote from "../CreateUpdateNote";

interface IProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    changeNote: (ev: React.MouseEvent<HTMLDivElement>, id: number, title: string, text: string) => void;
}
type TData = {id: number,  title: string, text: string}[];


function NoteList({ changeNote }: IProps) {

    const [noteState, noteSetState] = useState([] as TData);

    const deleteNote = (ev: React.MouseEvent<HTMLElement>, id: number): void => {
        ev.stopPropagation();
        localStorage.removeItem(id.toString());
    }

    const getNotes = useCallback(() => {
        return new Promise<TData>((resolve => {
            const getNotes = () => {
                let notes: TData = [];
                let keys = Object.keys(localStorage);
                for(let key of keys) {
                    notes.push(JSON.parse(localStorage.getItem(key) || '{}'))
                }
                notes.sort((a, b) => {
                    return a.id - b.id;
                })
                return notes;
            }
            setTimeout(() => resolve(getNotes()), 100)
        }))
    }, []);

    useEffect(() => {
        getNotes().then(data => data).then(data => noteSetState(() => data));
    }, [getNotes, noteState])

    return (
        <>
            <Input onSearch={ this.searchNote } addNote={ this.addNote } />

            {this.state.visible && <CreateUpdateNote onCancel={this.cancelCreate} onSave={this.saveNote}
                                                     title={this.state.title} text={this.state.text} id={this.state.currentID}/>
            }

            <div className={ styles.notes }>
                {noteState.map((el) => {
                    return <Note key={el.id} id={el.id}
                                 title={el.title} text={el.text}
                                 onDel={ deleteNote } onClick={ changeNote } />
                })}
            </div>
        </>

    )
}

export default NoteList