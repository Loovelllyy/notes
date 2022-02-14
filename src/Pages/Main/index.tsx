import React, {Component} from "react";
import style from './style.module.css'
import Navbar from "../../Components/Navbar";
import NoteList from "../../Components/NoteList";

class Main extends Component{

    render() {
        return (
                <div className={ style.wrapper }>
                    <h1>YOUR NOTES</h1>
                    <Navbar/>
                    <NoteList />
                </div>
        )
    }
}

export default Main