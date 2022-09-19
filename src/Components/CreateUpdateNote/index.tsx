import React from "react";
import style from './style.module.css'
import ButtonModel from "../Buttons/ButtonModel";
import useUpdateValues from "../../MyHooks/useUpdateValues";

import {BsSave} from 'react-icons/bs'
import {MdOutlineCancel} from "react-icons/md";
import ModalWindow from "../ModalWindow";
import {useCustomContext} from "../../Context/Hooks/useCustomContext";

interface IProps {
    title: string;
    text: string;
    id: number;
    onSave: any;
}

function CreateUpdateNote({ title, text, id, onSave}: IProps) {

    const [titleValue, textValue, titleHandle, textHandle, clickHandle] = useUpdateValues(title, text, id, onSave);

  const { closeModal } = useCustomContext();

    return(
      <ModalWindow>
        <div className={ style.bg }>
          <div className={style.wrapper}>
            <input className={ `${style.inputStyle} ${style.title}` } type="text" placeholder="Title" value={ titleValue } onChange={ titleHandle }/>
            <ButtonModel style={ style.btnCancel } onClick={ closeModal } action='cancel' component={ <MdOutlineCancel/> } />
            <div>
              <textarea className={ `${style.inputStyle} ${style.text}` } placeholder="Write something..." value={ textValue } onChange={ textHandle } />
            </div>
            <ButtonModel style={ style.btnSave } component={ <BsSave/> } action='save' onClick={ clickHandle }/>
          </div>
        </div>
        </ModalWindow>
    )
}

export default CreateUpdateNote;