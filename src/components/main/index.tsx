import React, {Component} from "react";
import Input from "../input";
import BtnModel from '../buttons/ButtonModel'
import Navbar from "../navbar";
import style from './style.module.css'
import CreateUpdateNote from '../createUpdateNote'
import { RiAddCircleLine } from 'react-icons/ri'
import NoteList from "../NoteList";

type TData = {id: number,  title: string, text: string}[];
type initial_data = {notes: TData; visible: boolean, title: string, text: string, currentID: number};

class Main extends Component<unknown, initial_data>{
    private key: number;
    constructor(props: unknown) {
        super(props);
        this.state = {'notes': [],
                        visible: false,
                        title: '',
                        text: '',
                        currentID: 0};
        this.key = 0;
        this.deleteNote = this.deleteNote.bind(this);
        this.cancelCreate = this.cancelCreate.bind(this);
        this.saveNote = this.saveNote.bind(this);
        this.changeNote = this.changeNote.bind(this);
    }

    updateState(): void {
        this.getNotes().then(data => data).then(data => this.setState({notes: data}));
    }

    componentDidMount() {
        localStorage.setItem('0', JSON.stringify({id: 0, title: 'Welcome!', text: 'Hello! This is your first note. Let\'s make many new notes with important information for you and our service help you to save it all'}));
        this.updateState();
    }

    getNotes() {
        return new Promise<TData>((resolve => {
            const getNotes = () => {
                let notes: TData = [];
                let keys = Object.keys(localStorage);
                for(let key of keys) {
                    notes.push(JSON.parse(localStorage.getItem(key) || '{}'))
                }
                notes.sort((a, b) => {
                    if (a.id > b.id) {
                        return 1;
                    }
                    if (a.id < b.id) {
                        return -1;
                    }
                    return 0;
                })
                return notes;
            }
            setTimeout(() => resolve(getNotes()), 100)
        }))
    }

    countId():void {
        this.key += 1;
    }

    addNote(): void{
        this.setState({visible: true});
        this.countId();
    }

    saveNote(title: string, text: string, id?: number): void{
        if (id) {
            localStorage.setItem(`${id}`, JSON.stringify({id, title, text}));
            this.cancelCreate();
            this.updateState();
            this.setState({currentID: 0})
            return;
        }
        localStorage.setItem(`${this.key}`, JSON.stringify({id: this.key, title, text}));
        this.cancelCreate();
        this.updateState();
        this.setState({currentID: 0})
    }

    cancelCreate(): void{
        this.setState({visible: false, title: '', text: '', currentID: 0});
    }

    deleteNote(ev: React.MouseEvent<HTMLElement>, id: number): void{
        ev.stopPropagation();
        localStorage.removeItem(id.toString())
        this.updateState();
    }

    changeNote(ev: React.MouseEvent<HTMLDivElement>, id: number, title: string, text: string) {
        this.setState({visible: true, title, text, currentID: id});
    }

    render() {
        return (
                <div className={ style.wrapper }>
                    <h1>YOUR NOTES</h1>
                    <Navbar/>
                    <Input children={ <BtnModel onClick={() => this.addNote() } component={ <RiAddCircleLine/> } action='add'  /> } />
                    {this.state.visible && <CreateUpdateNote onCancel={this.cancelCreate} onSave={this.saveNote}
                                       title={this.state.title} text={this.state.text} id={this.state.currentID}/>
                    }
                    <NoteList notes={ this.state.notes } deleteNote={ this.deleteNote } changeNote={ this.changeNote } />
                </div>
        )
    }
}

export default Main