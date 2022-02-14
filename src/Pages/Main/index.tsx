import React, {Component} from "react";
import style from './style.module.css'
import Navbar from "../../Components/Navbar";
import Input from "../../Components/Input";
import CreateUpdateNote from '../../Components/CreateUpdateNote'
import NoteList from "../../Components/NoteList";

interface IState {visible: boolean, title: string, text: string, currentID: number, searchingId: number[]}

class Main extends Component<{}, IState>{
    private key: number;
    constructor(props: {}) {
        super(props);
        this.state = {  visible: false, title: '', text: '', currentID: 0, searchingId: []};
        this.key = localStorage.length;
        this.cancelCreate = this.cancelCreate.bind(this);
        this.saveNote = this.saveNote.bind(this);
        this.addNote = this.addNote.bind(this)
        this.changeNote = this.changeNote.bind(this);
    }

    componentDidMount() {
        localStorage.setItem('0', JSON.stringify({id: 0, title: 'Welcome!', text: 'Hello! This is your first Note. Let\'s make many new notes with important information for you and our service help you to save it all'}));
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
            this.setState({currentID: 0})
            return;
        }
        localStorage.setItem(`${this.key}`, JSON.stringify({id: this.key, title, text}));
        this.cancelCreate();
        this.setState({currentID: 0})
    }

    cancelCreate(): void{
        this.setState({visible: false, title: '', text: '', currentID: 0});
    }

    changeNote(ev: React.MouseEvent<HTMLDivElement>, id: number, title: string, text: string) {
        this.setState({visible: true, title, text, currentID: id});
    }

    searchNote = (string: string): void => {
        console.log('search')
        const keys = Object.keys(localStorage);
        const searchNotes = [];
        for(let key of keys) {
            let currentElm: {id: number, title: string, text:string} = JSON.parse(localStorage.getItem(key) || '');
            if ((currentElm?.title.indexOf(string) === -1) && (currentElm?.text.indexOf(string) === -1)) {
                console.log('if block:', this.state.searchingId);
            } else searchNotes.push(currentElm.id);
        }
        this.setState({searchingId: searchNotes})
        console.log(this.state.searchingId);
    }

    render() {
        return (
                <div className={ style.wrapper }>
                    <h1>YOUR NOTES</h1>
                    <Navbar/>
                    <NoteList changeNote={ this.changeNote } />
                </div>
        )
    }
}

export default Main