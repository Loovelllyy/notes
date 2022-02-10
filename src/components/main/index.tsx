import React, {Component} from "react";
import Input from "../input";
import BtnModel from '../buttons/ButtonModel'
import Note from "../note";
import Navbar from "../navbar";
import style from './style.module.css'
import CreateUpdateNote from '../createUpdateNote'
import { RiAddCircleLine } from 'react-icons/ri'

type TData = {id: number,  title: string, text: string}[];
type initial_data = {notes: TData; visible: boolean, title: string, text: string, currentID: number};

class Main extends Component<unknown, initial_data>{
    private key: number;
    constructor(props: unknown) {
        super(props);
        this.state = {'notes': [ {id: 0, title: 'Welcome!', text: 'Hello! This is your first note. Let\'s make many new notes with important information for you and our service help you to save it all'}],
                        visible: false,
                        title: '',
                        text: '',
                        currentID: 0};
        this.key = 1;
        this.deleteNote = this.deleteNote.bind(this);
        this.cancelCreate = this.cancelCreate.bind(this);
        this.saveNote = this.saveNote.bind(this);
        this.changeNote = this.changeNote.bind(this);
    }

    updateState(): void {
        this.getNotes().then(data => data).then(data => this.setState({notes: data}));
    }

    componentDidMount() {
        console.log('mounted');
        localStorage.setItem('0', JSON.stringify(this.state.notes[0]));
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
        console.log('create note');
        this.setState({visible: true});
        this.countId();
    }

    saveNote(title: string, text: string, id?: number): void{
        console.log('id:', id)
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
        console.log('onDel ', id);
        localStorage.removeItem(id.toString())
        this.updateState();
    }

    changeNote(ev: React.MouseEvent<HTMLDivElement>, id: number, title: string, text: string) {
        console.log('clicked: ', id, title, text);
        this.setState({visible: true, title, text, currentID: id});
    }

    render() {
        console.log(this.key)
        return (
                <div className={ style.wrapper }>
                    <h1>YOUR NOTES</h1>
                    <Navbar/>
                    <Input children={ <BtnModel onClick={() => this.addNote() } component={ <RiAddCircleLine/> } action='add'  /> } />
                    {this.state.visible && <CreateUpdateNote onCancel={this.cancelCreate} onSave={this.saveNote}
                                       title={this.state.title} text={this.state.text} id={this.state.currentID}/>
                    }
                    <div className={ style.notes }>
                        {this.state.notes.map((el) => {
                            return <Note key={el.id} id={el.id}
                                         title={el.title} text={el.text}
                                         onDel={ this.deleteNote } onClick={ this.changeNote } />
                        })}
                    </div>
                </div>
        )
    }
}

export default Main