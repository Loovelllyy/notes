import React, { Component } from "react";
import styles from './styles.module.css';
import ButtonModel from "../Buttons/ButtonModel";
import {RiDeleteBin7Line} from "react-icons/ri";

interface IProps {
    id: number;
    title: string;
    text: string;
    onDel: (ev: React.MouseEvent<HTMLElement>, id: number) => void;
    onClick: (ev: React.MouseEvent<HTMLDivElement>, id: number, title: string, text: string) => void;
}

class Note extends Component<IProps> {
    render() {
        return (
            <div className={ styles.wrapper } onClick={ (ev) => this.props.onClick(ev, this.props.id, this.props.title, this.props.text) } >
                <div className={ styles.header }>
                    <h3>{this.props.title}</h3>
                    <ButtonModel onClick={(e) => this.props.onDel(e, this.props.id) } action='delete' component={ <RiDeleteBin7Line /> } />
                </div>
                <p className={ styles.text }>
                    {this.props.text}
                </p>
            </div>
        )
    }
}

export default Note;