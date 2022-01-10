import { Component } from "react";
import styles from './styles.module.css';
import { RiDeleteBin7Line } from 'react-icons/ri'

class BtnDel extends Component<any, any> {

    render() {
        return (
            <div className={styles.btnStyle}>
                <RiDeleteBin7Line />
            </div>
        )
    }
}

export default BtnDel;
