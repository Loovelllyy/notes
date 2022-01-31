import React, {Component} from "react";
import Input from "../input";
import BtnAdd from "../buttons/buttonAdd";
import Note from "../note";
import Navbar from "../navbar";
import style from './style.module.css'

type TData = {id: number,  title: string, text: string}[];
type initial_data = {notes: TData};

// let testNote = {id: 2, title: 'Welcome!', text: 'Hello! This is your first note. Let\'s make many new notes with important information for you and our service help you to save it all'};

class Main extends Component<unknown, initial_data>{
    constructor(props: unknown) {
        super(props);
        this.state = {'notes': [{id: 1, title: 'Welcome!', text: 'Hello! This is your first note. Let\'s make many new notes with important information for you and our service help you to save it all'}]};
    }

    componentDidMount() {
        console.log('mounted');
    }

    componentDidUpdate() {
        console.log('updates');
    }


    getNotes(): TData { // async func
        let notes: TData = [];
        for(let i = 0; i < localStorage.length; i++) {
            notes.push(JSON.parse(localStorage.getItem(i.toString()) || '{}'));
        }
        return notes;
    }

    createNote(): void{
        console.log('create note');
        // this.setState({notes: this.getNotes()});
        // console.log(this.state.notes)
    }

    deleteNote(id: number): void{
        this.state.notes.map(el => {
            if(el.id === id) {
                localStorage.removeItem(id.toString());
            }
            this.setState({notes: this.getNotes()})
        })
    }

    changeState(): void {
        // this.setState({id: this.state.notes.push({1: this.state.id! + 1})});
        console.log(this.state.notes)
    }

    render() {

        return (
                <div className={ style.wrapper }>
                    <h1>YOUR NOTES</h1>
                    <Navbar/>
                    <Input children={ <BtnAdd onClick={() => this.createNote() } /> } />
                    <div className={ style.notes }>

                        {this.state.notes.map((el) => {
                            return <Note title={el.title} text={el.text} />
                        })}

                    </div>
                </div>
        )
    }
}

export default Main