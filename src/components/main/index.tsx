import React, {Component} from "react";
import Input from "../input";
import BtnAdd from "../buttons/buttonAdd";
import Note from "../note";
import Navbar from "../navbar";
import style from './style.module.css'

type TData = { title: string, text: string, id: number | string }[];
type initial_data = {notes: Array<object>, id: number};

const arrNotes: TData = [{  id: 1, title: 'dsgl', text:'sflfj'}, { id: 2, title: 'dsgl', text:'sflfj'}, {id: 3, title: 'dsgl', text:'sflfj'}];

localStorage.setItem('1', JSON.stringify(arrNotes))

class Main extends Component<unknown, initial_data>{
    constructor(props: unknown) {
        super(props);
        this.state = {notes: [<Note key={0} id={0} title={'dslf'} text={'slfslfk'} /> ], id: 4}
    }

    countId (id: number): number {
        console.log('count ID', this.state.id)
        this.setState({id: this.state.id + 1})
        return this.state.id + 1;
    }

    toNote(arr: TData): JSX.Element[] {
        let newArr: JSX.Element[] = [];
        arr.map(el => {
            let handle = this.countId(this.state.id)
            newArr.push(<Note key={handle} title={el.title} text={el.text}   />)
        })
        console.log(this.state.notes)
        return newArr;
        // return <Note key={obj.id} title={obj.title} text={obj.text}   />
    }
    
    changeState(): void {
        this.setState({id: this.state.notes.push({1: this.state.id! + 1})});
        console.log(this.state.notes)
    }

    componentDidUpdate() {
        console.log('updates')
    }

    createNote(): void{
        console.log('create note');
        // let test1: JSX.Element = <Note title={'dslf'} text={'slfslfk'} />;

        let test = localStorage.getItem('1')
        // @ts-ignore
        let arrTest: TData = JSON.parse(test);
        console.log(arrTest)
        let arr = [...this.state.notes, ...this.toNote(arrTest)];
        this.setState({notes: arr})
    }

    render() {

        console.log(this.state.notes)
        return (
                <div className={ style.wrapper }>
                    <h1>YOUR NOTES</h1>
                    <Navbar/>
                    <Input children={ <BtnAdd onClick={() => this.createNote() } /> } />
                    <div className={ style.notes }>
                        {this.state.notes}
                    </div>
                </div>
        )
    }
}

export default Main