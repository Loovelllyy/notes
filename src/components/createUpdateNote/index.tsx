import React, { useState, useCallback, useEffect } from "react";
import style from './style.module.css'
import ButtonModel from "../buttons/ButtonModel";

import {BsSave} from 'react-icons/bs'
import {MdOutlineCancel} from "react-icons/md";

type TProps = {
    title: string;
    text: string;
    id: number;
    onCancel: any;
    onSave: (title: string, text: string, id?: number) => void;
}

function CreateUpdateNote({ title, text, onCancel, onSave, id}: TProps) {

    function useUpdateValues(title: string, text: string, id: number){
        const [titleValue, setTitleValue] = useState(title);
        const [textValue, setTextValue] = useState(text);

        const titleHandle = useCallback((ev: React.ChangeEvent<HTMLInputElement>) => {
            setTitleValue(ev.target.value);
        }, [setTitleValue]);

        const textHandle = useCallback((ev: React.ChangeEvent<HTMLTextAreaElement>) => {
            setTextValue(ev.target.value);
        }, [setTextValue]);

        const clickHandle = useCallback(() => {
            onSave(titleValue, textValue, id);
        }, [titleValue, textValue, onSave]);

        return [titleValue, textValue, titleHandle, textHandle, clickHandle] as [string, string, (ev: React.ChangeEvent<HTMLInputElement>) => void, (ev: React.ChangeEvent<HTMLTextAreaElement>) => void, () => void]
    }

    const [titleValue, textValue, titleHandle, textHandle, clickHandle] = useUpdateValues(title, text, id);

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