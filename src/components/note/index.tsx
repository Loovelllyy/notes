import { Component } from "react";
import BtnDel from "../buttons/buttonDel";
import styles from './styles.module.css'

type TProps = {
    id: number;
    title: string;
    text: string;
    onDel: any;
}

class Note extends Component<TProps, any> {
    render() {
        return (
            <div className={ styles.wrapper }>
                <div className={ styles.header }>
                    <h3>{this.props.title}</h3>
                    <BtnDel onClick={() => this.props.onDel(this.props.id) } />
                </div>
                <p className={ styles.text }>
                    {this.props.text}
                </p>
            </div>
        )
    }
}

export default Note;