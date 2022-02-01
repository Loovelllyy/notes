import React, {Component} from "react";
import Input from "../input";
import BtnAdd from "../buttons/buttonAdd";
import Note from "../note";
import Navbar from "../navbar";
import style from './style.module.css'

type TData = {id: number,  title: string, text: string}[];
type initial_data = {notes: TData};

// let testNote = {id: 0, title: 'Welcome!', text: 'Hello! This is your first note. Let\'s make many new notes with important information for you and our service help you to save it all'};


class Main extends Component<unknown, initial_data>{
    private key: number;
    constructor(props: unknown) {
        super(props);
        this.state = {'notes': [ {id: 0, title: 'Welcome!', text: 'Hello! This is your first note. Let\'s make many new notes with important information for you and our service help you to save it all'}]};
        this.key = 1;
        this.deleteNote = this.deleteNote.bind(this);
    }

    updateState(): void {
        this.setState({notes: this.getNotes()});
    }

    componentDidMount() {
        console.log('mounted');
        localStorage.setItem('0', JSON.stringify(this.state.notes[0]));
        this.updateState();
    }

    // componentDidUpdate() {
    //     console.log('updates');
    //     console.log(this.state.notes);
    // }

    getNotes(): TData { // async func
        let notes: TData = [];
        let keys = Object.keys(localStorage);
        for(let key of keys) {
            notes.push(JSON.parse(localStorage.getItem(key) || '{}'))
        }

        return notes;
    }

    countId():void {
        this.key += 1;
    }

    createNote(): void{
        console.log('create note');
        localStorage.setItem(`${this.key}`, JSON.stringify({id: this.key, title: 'sjfnkdjvdf', text: 'smsdjncxd'}));
        this.updateState();
        this.countId();
    }

    deleteNote(id: number): void{
        console.log('onDel ', id);
        localStorage.removeItem(id.toString())
        this.updateState();
    }

    render() {

        return (
                <div className={ style.wrapper }>
                    <h1>YOUR NOTES</h1>
                    <Navbar/>
                    <Input children={ <BtnAdd onClick={() => this.createNote() } /> } />
                    <div className={ style.notes }>

                        {this.state.notes.map((el) => {
                            return <Note key={el.id} id={el.id} title={el.title} text={el.text} onDel={ this.deleteNote } />
                        })}
                    </div>
                </div>
        )
    }
}

export default Main