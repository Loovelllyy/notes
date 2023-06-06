import React from "react";
import styles from './style.module.css';
import ButtonSearch from "../Buttons/ButtonSearch";

// interface IProps { onSearch: (string: string) => void, addNote: () => void}

const Input = () => {

    // const [inputStr, setInputStr] = useState('');

    // const handle = (ev: React.ChangeEvent<HTMLInputElement>) => {
    //     setInputStr(ev.target.value);
    //     if (!ev.target.value) onSearch('');
    // }
    //
    // const onClick = () => {
    //     onSearch(inputStr);
    // }

    return (
            <div className={ styles.wrapper }>
                <input placeholder='search...' className={ styles.input } />
                <ButtonSearch className={ styles.icon } />
            </div>
        )
    }

export default Input;
