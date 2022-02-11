import React, { Component } from "react";
import ButtonSearch from "../Buttons/ButtonSearch";
import styles from './style.module.css';

class Input extends Component{
    render(){

        const search = (str: string) => {
            console.log(str)
        };

        return (
            <div className={ styles.wrapper }>
                <input placeholder='search...' className={ styles.input } />
                <ButtonSearch className={ styles.icon } onClick={ () => search('5') }/>
                { this.props.children }
            </div>
        )
    }
}

export default Input;