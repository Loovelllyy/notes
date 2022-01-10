import React, { Component } from "react";
import BtnSearch from "../buttons/buttonSearch/btnSearch";
import styles from './style.module.css';
import BtnAdd from "../buttons/buttonAdd";

class Input extends Component<any, any> {
    render(){

        let search = (str: string) => {
            console.log(5)
        };

        return (
            <div className={ styles.wrapper }>
                <input placeholder='search...' className={ styles.input } />
                <BtnSearch className={ styles.icon } click={ search } />
                <BtnAdd />
            </div>
        )
    }
}

export default Input;