import React, { useState, useRef, useCallback, useEffect } from "react";
import style from './style.module.css'
import ButtonModel from "../buttons/ButtonModel";

import {BsSave} from 'react-icons/bs'
import {MdOutlineCancel} from "react-icons/md";

type TProps = {
    visible: boolean;
    title?: string;
    text?: string;
    onCancel: any;
    onSave: (title: string, text: string) => void;
}

function CreateUpdateNote({ title, text, visible, onCancel, onSave }: TProps) {

    // const [state1, setState1] = useState<boolean>(true);
    // const [state2, setState2] = useState('state2');
    // const [state3, setState3] = state1 ? useState('state3') : [null, () => null];
    // const [state4, setState4] = useState('state4');
    // const [state5, setState5] = !state1 ? useState('state5') : [null, () => null];
    //
    // console.log(state1, state2, state3, state4, state5);
    //
    // useEffect(() => {
    //     setState1(false);
    // },[])
    const [titleValue, setTitleValue] = useState('');

    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const handle = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitleValue(event.target.value);
    }

    const clickHandle = useCallback(() => {
      const text = textareaRef.current?.value || '';
      onSave(titleValue, text);
    }, [titleValue, onSave]);

    useEffect(() => {
        if (visible) return;
        if (textareaRef.current) {
            textareaRef.current.value = '';
        }
        setTitleValue('');
        }, [visible]);

    if (visible) {
        if (!(title || text)) { // create

            return(
                <div className={ style.bg }>
                    <div className={style.wrapper}>
                        <input className={ `${style.inputStyle} ${style.title}` } type="text" placeholder="Title" value={ titleValue } onChange={ handle }/>
                        <ButtonModel style={ style.btnCancel } onClick={ onCancel } action='cancel' component={ <MdOutlineCancel/> } />
                        <div>
                            <textarea className={ `${style.inputStyle} ${style.text}` } placeholder="Write something..." ref={ textareaRef }/>
                        </div>
                        <ButtonModel style={ style.btnSave } component={ <BsSave/> } action='save' onClick={ clickHandle }/>
                    </div>
                </div>
            )
        }
        return ( // update
            <div className={style.wrapper}>
                <input type="text" value={ title }/>
                <input type="text" value={ text }/>
                {/* TODO add ButtonModel to down */}
                {/*<ButtonSave/>*/}
            </div>
        )
    } else {
        return null
    }


}

export default CreateUpdateNote;