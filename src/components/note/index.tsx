import { Component } from "react";
import styles from './styles.module.css'
import ButtonModel from "../buttons/ButtonModel";
import {RiDeleteBin7Line} from "react-icons/ri";

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
                    <ButtonModel onClick={() => this.props.onDel(this.props.id) } action='delete' component={ <RiDeleteBin7Line /> } />
                </div>
                <p className={ styles.text }>
                    {this.props.text}
                </p>
            </div>
        )
    }
}

export default Note;