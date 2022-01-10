import { Component } from "react";
import styles from './styles.module.css';

import { RiAddCircleLine } from 'react-icons/ri'

class BtnAdd extends Component<any, any> {

    render() {
        return (
            <div className={styles.btnStyle}>
                <RiAddCircleLine />
            </div>
        )
    }
}

export default BtnAdd;
