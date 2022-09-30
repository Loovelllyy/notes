import React from "react";
import {useForm} from "react-hook-form";
import style from './style.module.css'
import ButtonModel from "../Buttons/ButtonModel";

import {MdOutlineCancel} from "react-icons/md";
import ModalWindow from "../ModalWindow";
import {useCustomContext} from "../../Context/Hooks/useCustomContext";
import {addNewNote, updateNote} from "../../requests";
import {INote} from "../../types";
import {GiCheckMark} from "react-icons/gi";

interface IForm extends INote {}

function CreateUpdateNote() {
  const { register, handleSubmit } = useForm<IForm>();
  const { closeModal, payload } = useCustomContext();

  const savedNote = (data: INote) => {
    console.log(data)
    if (payload?.id ) updateNote({id: payload!.id, text: data.text, title: data.title}).then(() => closeModal!());
    else addNewNote({title: data.title, text: data.text}).then(() => closeModal!());
  };

  return(
    <ModalWindow>
      <form onSubmit = { handleSubmit(savedNote) }>
        <input
          className={ `${style.inputStyle} ${style.title}` } type="text"
          placeholder="Title" defaultValue={ payload?.title }
          {...register("title")}
        />
        <div>
          <textarea
            className={ `${style.inputStyle} ${style.text}` } placeholder="Write something..."
            defaultValue={ payload?.text } {...register("text")}
          />
        </div>
        <ButtonModel style={ style.btnCancel } onClick={ closeModal } action='cancel' component={ <MdOutlineCancel/> } type="reset"  />
        <ButtonModel style={ style.btnSave } component={ <GiCheckMark /> } action='save' type="submit" />
      </form>
    </ModalWindow>
  )
}

export default CreateUpdateNote;