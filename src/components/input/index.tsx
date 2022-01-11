import React, { Component } from "react";
import BtnSearch from "../buttons/buttonSearch/btnSearch";
import styles from './style.module.css';

class Input extends Component<any, any> {
    render(){

        const search = (str: string) => {
            console.log(5)
        };

        return (
            <div className={ styles.wrapper }>
                <input placeholder='search...' className={ styles.input } />
                <BtnSearch className={ styles.icon } click={ search } />
                { this.props.children }
            </div>
        )
    }
}

export default Input;