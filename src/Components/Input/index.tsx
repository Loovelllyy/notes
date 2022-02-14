import React, { useState } from "react";
import styles from './style.module.css';
import ButtonSearch from "../Buttons/ButtonSearch";
import BtnModel from "../Buttons/ButtonModel";
import { RiAddCircleLine } from 'react-icons/ri';
import {logDOM} from "@testing-library/react";

//lick={() => this.addNote() } component={ <RiAddCircleLine/> } action='add'

interface IProps { onSearch: (string: string) => void, addNote: () => void}
// interface IState {inputStr: string}

const Input = ({ onSearch, addNote }: IProps) => {

    const [inputStr, setInputStr] = useState('');

    const handle = (ev: React.ChangeEvent<HTMLInputElement>) => {
        setInputStr(ev.target.value);
        if (ev.target.value === '') {
            onSearch('');
            return;
        }
        onSearch(inputStr)
    }

    // const onClick = () => {
    //     onSearch(inputStr);
    // };

    return (
            <div className={ styles.wrapper }>
                <input placeholder='search...' className={ styles.input } onChange={ (ev) => handle(ev) } />
                <ButtonSearch className={ styles.icon } onClick={() => console.log(5)}/>
                <BtnModel onClick={ addNote } component={ <RiAddCircleLine/> } action='add'  />
            </div>
        )
    }

export default Input;