import React from "react";
import {useForm} from "react-hook-form";
import style from './style.module.css'
import ButtonModel from "../Buttons/ButtonModel";

import {IoCloseSharp} from "react-icons/io5";
import ModalWindow from "../ModalWindow";
import {useCustomContext} from "../../Context/Hooks/useCustomContext";
import {addNewNote, updateNote} from "../../requests";
import {INote} from "../../types";
import {format, formatDistance} from "date-fns";

interface IForm extends INote {}

function CreateUpdateNote() {
  const { register, handleSubmit } = useForm<IForm>();
  const { closeModal, payload } = useCustomContext();


  const savedNote = (data: INote) => {
    if (payload?.id ) updateNote({id: payload.id, text: data.text, title: data.title, lastUpdateDate: Date.now(), createDate: payload.createDate}).then(() => closeModal!());
    else addNewNote({title: data.title, text: data.text, lastUpdateDate: Date.now(), createDate: Date.now()}).then(() => closeModal!());
  };

  const getFormatDate = (date: Date | number | '') => {
    if (!date) return '';
    return format(date, 'dd.MM.Y');
  }

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
        <ButtonModel style={ style.btnCancel } onClick={ closeModal } action='cancel' component={ <IoCloseSharp size={ 30 } /> } type="reset"  />
        { (payload.id || '') &&
          <p className={style.dateCreate}>
            created: {getFormatDate(payload.createDate)}
          </p>
        }
        { (payload.id || '') &&
          <p className={style.dateUpdate}>
            updated: {getFormatDate(payload.lastUpdateDate)} ({formatDistance(payload.lastUpdateDate || 0, Date.now())} ago)
          </p>
        }
        <ButtonModel style={ style.btnSave } component={ <div>Save</div> } action='save' type="submit" />
      </form>
    </ModalWindow>
  )
}

export default CreateUpdateNote;
