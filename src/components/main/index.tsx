import React, { Component } from "react";
import Input from "../input";
import BtnAdd from "../buttons/buttonAdd";
import Note from "../note";
import Navbar from "../navbar";
import style from './style.module.css'

class Main extends Component<any, any>{
    render() {

        const notes: { title: string, text: string, id: number }[] = [{title: '1', text: 'abc', id: 1}, {title: '2', text: 'abc', id: 2}, {title: '3', text: 'abc', id: 3}];

        const getNote = (arr: { title: string, text: string, id: number }[]) => {
          arr.map((el) => {
            <Note title={el.title} text={el.text}  />
          })
        }

        getNote(notes)

        return (
            <div className={ style.wrapper }>
                <h1>YOUR NOTES</h1>
                <Navbar/>
                <Input children={ <BtnAdd /> }/>
                <div className={ style.notes }>

                </div>
            </div>
        )
    }
}

export default Main