import React, {useEffect} from "react";
import styles from './styles.module.css';
import ButtonModel from "../Buttons/ButtonModel";
import {RiDeleteBin7Line} from "react-icons/ri";
import {deleteNote} from "../../requests/";
import {useCustomContext} from "../../Context/Hooks/useCustomContext";
import CreateUpdateNote from "../CreateUpdateNote";

interface IProps {
    id: number;
    title: string;
    text: string;
}

const Note = ({ title, id, text }: IProps) => {

  const { showModal, isShow } = useCustomContext();

  useEffect(() => {
    console.log("is show", isShow)
  },[isShow])

  return (
    <div className={ styles.wrapper } onClick={ showModal! } >
      { isShow && <CreateUpdateNote title={title} text={text} id={id} onSave={ ()=> {} } /> }
      <div className={ styles.header }>
        <h3>{title}</h3>
        <ButtonModel onClick={ () => deleteNote(id) } action='delete' component={ <RiDeleteBin7Line /> } />
      </div>
      <p className={ styles.text }>
        {text}
      </p>
    </div>
  )
}

export default Note;