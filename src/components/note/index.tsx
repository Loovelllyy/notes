import { Component } from "react";
import BtnDel from "../buttons/buttonDel";
import styles from './styles.module.css'

class Note extends Component<any, any> {
    render() {
        return (
            <div className={ styles.wrapper }>
                <div className={ styles.header }>
                    <h3>Name</h3>
                    <BtnDel />
                </div>
                <p className={ styles.text }>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto corporis eius eos error sint temporibus.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto corporis eius eos error sint temporibus.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto corporis eius eos error sint temporibus.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto corporis eius eos error sint temporibus.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto corporis eius eos error sint temporibus.

                </p>
            </div>
        )
    }

}

export default Note;