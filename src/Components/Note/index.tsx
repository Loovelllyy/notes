import React from "react";
import styles from './styles.module.css';
import ButtonModel from "../Buttons/ButtonModel";
import {MdDelete} from "react-icons/md";
import {useCustomContext} from "../../Context/Hooks/useCustomContext";
import {INote} from "../../types";

interface IProps extends INote {
    onDel: (e: React.MouseEvent, id: INote["id"]) => void;
}

const Note = ({ title, id, text, onDel, createDate, lastUpdateDate }: IProps) => {

  const { showModal } = useCustomContext();


  return (
    <div className={ styles.wrapper } onClick={ () => showModal!({title, id, text, lastUpdateDate, createDate}) } >
      <div className={ styles.header }>
        <h3>{title}</h3>
        <div style={{width: '40px', height: '40px'}}>
          <ButtonModel style={ styles.button } onClick={ (e) => onDel(e, id) } action='delete' component={ <MdDelete size={20} /> } />
        </div>
      </div>
      <p className={ styles.text }>
        {text}
      </p>
    </div>
  )
}

export default Note;
