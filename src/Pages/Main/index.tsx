import React, {Component} from "react";
import Input from "../../components/Input";
import BtnModel from '../../components/Buttons/ButtonModel'
import Navbar from "../../components/Navbar";
import style from './style.module.css'
import CreateUpdateNote from '../../components/CreateUpdateNote'
import { RiAddCircleLine } from 'react-icons/ri'
import NoteList from "../../components/NoteList";

interface IState {visible: boolean, title: string, text: string, currentID: number}

class Main extends Component<{}, IState>{
    private key: number;
    constructor(props: {}) {
        super(props);
        this.state = {  visible: false, title: '', text: '', currentID: 0};
        this.key = 0;
        this.cancelCreate = this.cancelCreate.bind(this);
        this.saveNote = this.saveNote.bind(this);
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

    render() {
        return (
                <div className={ style.wrapper }>
                    <h1>YOUR NOTES</h1>
                    <Navbar/>
                    <Input children={ <BtnModel onClick={() => this.addNote() } component={ <RiAddCircleLine/> } action='add'  /> } />
                    {this.state.visible && <CreateUpdateNote onCancel={this.cancelCreate} onSave={this.saveNote}
                                       title={this.state.title} text={this.state.text} id={this.state.currentID}/>
                    }
                    <NoteList  changeNote={ this.changeNote } />
                </div>
        )
    }
}

export default Main