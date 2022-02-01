import {Component, MouseEventHandler} from "react";
import styles from './styles.module.css';
import { RiDeleteBin7Line } from 'react-icons/ri'

type TProps = {
    onClick: MouseEventHandler;
}

class BtnDel extends Component<TProps, any> {

    render() {
        return (
            <div className={styles.btnStyle} onClick={ this.props.onClick }>
                <RiDeleteBin7Line />
            </div>
        )
    }
}

export default BtnDel;
