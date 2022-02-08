import React, {Component} from "react";
import Input from "../input";
import BtnModel from '../buttons/ButtonModel'
import Note from "../note";
import Navbar from "../navbar";
import style from './style.module.css'
import CreateUpdateNote from '../createUpdateNote'
import { RiAddCircleLine } from 'react-icons/ri'

type TData = {id: number,  title: string, text: string}[];
type initial_data = {notes: TData; visible: boolean, title: string, text: string};

class Main extends Component<unknown, initial_data>{
    private key: number;
    constructor(props: unknown) {
        super(props);
        this.state = {'notes': [ {id: 0, title: 'Welcome!', text: 'Hello! This is your first note. Let\'s make many new notes with important information for you and our service help you to save it all'}],
                        visible: false,
                        title: '',
                        text: ''};
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

    getNotes() { // async func
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
        this.setState({visible: true})
        this.countId();
    }

    saveNote(title: string, text: string): void{
        localStorage.setItem(`${this.key}`, JSON.stringify({id: this.key, title: title, text: text}));
        this.cancelCreate();
        this.updateState();
    }

    cancelCreate(): void{
        this.setState({visible: false});
    }

    deleteNote(id: number): void{
        console.log('onDel ', id);
        localStorage.removeItem(id.toString())
        this.updateState();
    }

    changeNote(id: number, title: string, text: string) {
        console.log('clicked: ', id, title, text);
        this.setState({title: title})
        this.setState({visible: true})
        console.log('states: ', this.state.title)
    }

    render() {
        return (
                <div className={ style.wrapper }>
                    <h1>YOUR NOTES</h1>
                    <Navbar/>
                    <Input children={ <BtnModel onClick={() => this.addNote() } component={ <RiAddCircleLine/> } action='add'  /> } />
                    <CreateUpdateNote visible={ this.state.visible }  onCancel={ this.cancelCreate } onSave={ this.saveNote } title={ this.state.title } text={ this.state.text } />
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