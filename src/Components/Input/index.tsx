import React, { useState } from "react";
import styles from './style.module.css';
import ButtonSearch from "../Buttons/ButtonSearch";
import BtnModel from "../Buttons/ButtonModel";
import { RiAddCircleLine } from 'react-icons/ri';

//lick={() => this.addNote() } component={ <RiAddCircleLine/> } action='add'

interface IProps { onSearch: (string: string) => void, addNote: () => void}
// interface IState {inputStr: string}

const Input = ({ onSearch, addNote }: IProps) => {

    const [inputStr, setInputStr] = useState('');

    const handle = (ev: React.ChangeEvent<HTMLInputElement>) => {
        setInputStr(ev.target.value);
    }

    const onClick = () => {
        onSearch(inputStr);
    };

    return (
            <div className={ styles.wrapper }>
                <input placeholder='search...' className={ styles.input } onChange={ (ev) => handle(ev) } />
                <ButtonSearch className={ styles.icon }  onClick={ onClick }/>
                <BtnModel onClick={ addNote } component={ <RiAddCircleLine/> } action='add'  />
            </div>
        )
    }

export default Input;