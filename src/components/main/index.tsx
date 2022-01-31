import React, {Component} from "react";
import Input from "../input";
import BtnAdd from "../buttons/buttonAdd";
import Note from "../note";
import Navbar from "../navbar";
import style from './style.module.css'

type TData = {id: number | string,  title: string, text: string}[];
type initial_data = {notes: TData};
// const arrNotes: TData = [];

class Main extends Component<unknown, initial_data>{
    constructor(props: unknown) {
        super(props);
        this.state = {'notes': [{  id: 1, title: 'Welcome!', text: 'Hello! This is your first note. Let\'s make many new notes with important information for you and our service help you to save it all'}]};
    }

    componentDidMount() {
        console.log('mounted');
    }

    // async func
    getNotes(): TData {
        let notes: TData = [];
        for(let i = 0; i < localStorage.length; i++) {
            notes.push(JSON.parse(localStorage.getItem(i.toString()) || '{}'));
        }
        return notes;
    }

    // countId (): number {
    //     // this.setState({id: this.state.id + 1})
    //     return 1;
    // }

    // toNote(arr: TData): JSX.Element[] {
    //     let newArr: JSX.Element[] = [];
    //     arr.map(el => {
    //         let handle = this.countId()
    //         newArr.push(<Note key={handle} title={el.title} text={el.text}   />)
    //     })
    //     // console.log(this.state.notes)
    //     return newArr;
    //     // return <Note key={obj.id} title={obj.title} text={obj.text}   />
    // }

    changeState(): void {
        // this.setState({id: this.state.notes.push({1: this.state.id! + 1})});
        console.log(this.state.notes)
    }

    componentDidUpdate() {
        console.log('updates');
    }

    createNote(): void{
        console.log('create note');
        // this.setState({notes: this.getNotes()});
        // console.log(this.state.notes)


        // // let test1: JSX.Element = <Note title={'dslf'} text={'slfslfk'} />;
        //
        // let test = localStorage.getItem('1')
        // // @ts-ignore
        // let arrTest: TData = JSON.parse(test);
        // console.log(arrTest)
        // let arr = [...this.state.notes, ...this.toNote(arrTest)];
        // this.setState({notes: arr})
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