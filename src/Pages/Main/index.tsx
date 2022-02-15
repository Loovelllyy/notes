import React, {Component} from "react";
import style from './style.module.css'
import Navbar from "../../Components/Navbar";
import NoteList from "../../Components/NoteList";

interface IState {
    sec: number,
    min: number,
    hour: number
}

class Main extends Component<{}, IState>{
    private timer: NodeJS.Timer | undefined;
    constructor(props: any) {
        super(props);
        this.state = {
            sec: 0,
            min: 0,
            hour: 0,
        };
    }

    componentDidMount() {
        this.timer = setInterval(() => this.setState({sec: this.state.sec + 1}), 1000);
    }

    componentDidUpdate(prevProps: Readonly<IState>, prevState: Readonly<IState>) {
        if (prevState.sec > 59){
            this.setState({sec: 0, min: prevState.min + 1})
        }
        if(prevState.min > 59) {
            this.setState({hour: prevState.hour + 1, min: 0})
        }
    }

    componentWillUnmount() {
        clearInterval(this.timer as NodeJS.Timeout);
    }

    render() {
        return (
                <div className={ style.wrapper }>
                    <div className={style.timer} >Time spent on page {this.state.hour}h {this.state.min}m {this.state.sec}s</div>
                    <h1>YOUR NOTES</h1>
                    <Navbar/>
                    <NoteList />
                </div>
        )
    }
}

export default Main