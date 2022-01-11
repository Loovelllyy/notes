import { Component } from "react";
import BtnDel from "../buttons/buttonDel";
import styles from './styles.module.css'

class Note extends Component<any, any> {
    render() {
        return (
            <div className={ styles.wrapper }>
                <div className={ styles.header }>
                    <h3>{this.props.title}</h3>
                    <BtnDel />
                </div>
                <p className={ styles.text }>
                    {this.props.text}
                </p>
            </div>
        )
    }

}

export default Note;