import React, {Component, ReactChild, ReactComponentElement, ReactElement} from "react";
import Input from "../input";
import BtnAdd from "../buttons/buttonAdd";
import Note from "../note";
import Navbar from "../navbar";
import style from './style.module.css'

type Data = { title: string, text: string, id: number | string }[];

class Main extends Component<unknown, any>{
    constructor(props: unknown) {
        super(props);
        this.state = {count: 0}
    }

    getNote(arr: Data): JSX.Element[] {
        return (arr.map((el) => {
            return <Note key={el.id.toString()} title={el.title} text={el.text}  />
        }))
    }
    
    changeState(): void {
        this.setState({count: this.state.count + 1});
        console.log(this.state.count)
    }

    // componentDidUpdate() {
    //     // console.log('updates')
    // }

    render() {
        return (
            <div className={ style.wrapper }>
                <h1>YOUR NOTES</h1>
                <Navbar/>
                <div>
                    <button onClick={() => this.changeState()}>click</button>
                </div>
                <Input children={ <BtnAdd /> }/>
                <div className={ style.notes }>
                    {/*{getNote(this.state)}*/}
                    <div>{`${this.state}`}</div>
                </div>
            </div>
        )
    }
}

export default Main