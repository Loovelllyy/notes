import React from "react";
import styles from './styles.module.css';
import { RiAddCircleLine } from 'react-icons/ri'

class BtnAdd extends React.Component<any, any> {
    render() {
        return (
            React.createElement('div', { className: styles.btnStyle }, <RiAddCircleLine/>)
        )
    }
}

export default BtnAdd;
