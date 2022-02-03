import ButtonSave from "../buttons/buttonSave";
import ButtonCancel from "../buttons/buttonCancel";
import style from './style.module.css'
import React from "react";

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
            let titleRef = React.createRef();
            return(
                <div className={ style.bg }>
                    <div className={style.wrapper}>
                        <input className={ `${style.inputStyle} ${style.title}` } type="text" placeholder="Title"/>
                        <ButtonCancel style={ style.btnCancel } onClick={ onCancel } />
                        <div>
                            <textarea className={ `${style.inputStyle} ${style.text}` } placeholder="Write something..."/>
                        </div>
                        {/* TODO realize get data from inputs ( onClick={ onSave( ) } )  */}
                        <ButtonSave style={ style.btnSave }  />
                    </div>
                </div>
            )
        }
        return ( // update
            <div className={style.wrapper}>
                <input type="text" value={ title }/>
                <input type="text" value={ text }/>
                <ButtonSave/>
            </div>
        )
    } else {
        return null
    }
}

export default CreateUpdateNote;