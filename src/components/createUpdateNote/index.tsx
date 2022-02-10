import React from "react";
import style from './style.module.css'
import ButtonModel from "../buttons/ButtonModel";
import useUpdateValues from "../../myHooks/useUpdateValues";

import {BsSave} from 'react-icons/bs'
import {MdOutlineCancel} from "react-icons/md";

type TProps = {
    title: string;
    text: string;
    id: number;
    onCancel: any;
    onSave: (title: string, text: string, id?: number) => void;
}

function CreateUpdateNote({ title, text, onCancel, id, onSave}: TProps) {

    const [titleValue, textValue, titleHandle, textHandle, clickHandle] = useUpdateValues(title, text, id, onSave);

    return(
                <div className={ style.bg }>
                    <div className={style.wrapper}>
                        <input className={ `${style.inputStyle} ${style.title}` } type="text" placeholder="Title" value={ titleValue } onChange={ titleHandle }/>
                        <ButtonModel style={ style.btnCancel } onClick={ onCancel } action='cancel' component={ <MdOutlineCancel/> } />
                        <div>
                            <textarea className={ `${style.inputStyle} ${style.text}` } placeholder="Write something..." value={ textValue } onChange={ textHandle } />
                        </div>
                        <ButtonModel style={ style.btnSave } component={ <BsSave/> } action='save' onClick={ clickHandle }/>
                    </div>
                </div>
            )
}

export default CreateUpdateNote;