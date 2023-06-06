import styles from './styles.module.css'
import React from "react";

interface IProps extends Omit<React.StyleHTMLAttributes<any>, 'style'> {
    component: JSX.Element;
    action:  'add' | 'cancel' | 'delete' | 'save';
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
    style?: string | undefined;
    type?:  "button" | "submit" | "reset"
}

function ButtonModel({ onClick, component, action, style, type }: IProps ) {


    let styleItem: {background?: string, backgroundImage?: string, width?: string};
    switch (action) {
        case 'add': styleItem = { background: 'var(--bgAddBtn)' };
            break;
        case 'cancel': styleItem = { background: 'var(--bgCancelBtn)' };
            break;
        case 'delete': styleItem = { background: 'var(--bgDelBtn)' }
            break;
        case 'save': styleItem = { background: 'var(--bgSaveBtn)', width: '200px' }
    }
    return (
        <button type={type} onClick={ onClick } style={ styleItem } className={ `${styles.btnStyle} ${style}` }>
            { component }
        </button>
    )
}

export default ButtonModel;
