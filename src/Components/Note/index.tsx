import React from "react";
import styles from './styles.module.css';
import ButtonModel from "../Buttons/ButtonModel";
import {RiDeleteBin7Line} from "react-icons/ri";
import {useCustomContext} from "../../Context/Hooks/useCustomContext";
import {INote} from "../../types";

interface IProps {
    id: number;
    title: string;
    text: string;
    onDel: (e: React.MouseEvent, id: INote["id"]) => void;
}

const Note = ({ title, id, text, onDel }: IProps) => {

  const { showModal } = useCustomContext();


  return (
    <div className={ styles.wrapper } onClick={ () => showModal!({title, id, text}) } >
      <div className={ styles.header }>
        <h3>{title}</h3>
        <ButtonModel onClick={ (e) => onDel(e, id) } action='delete' component={ <RiDeleteBin7Line /> } />
      </div>
      <p className={ styles.text }>
        {text}
      </p>
    </div>
  )
}

export default Note;