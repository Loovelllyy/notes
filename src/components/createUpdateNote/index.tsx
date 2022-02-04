import React from "react";
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
    if (visible) {
        if (!(title || text)) { // create
            // let titleRef = React.createRef();
            return(
                <div className={ style.bg }>
                    <div className={style.wrapper}>
                        <input className={ `${style.inputStyle} ${style.title}` } type="text" placeholder="Title"/>
                        <ButtonModel style={ style.btnCancel } onClick={ onCancel } action='cancel' component={ <MdOutlineCancel/> } />
                        <div>
                            <textarea className={ `${style.inputStyle} ${style.text}` } placeholder="Write something..."/>
                        </div>
                        {/* TODO realize get data from inputs ( onClick={ onSave( ) } )  */}
                        <ButtonModel style={ style.btnSave } component={ <BsSave/> } action='save'   />
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