import styles from './styles.module.css'
import React from "react";

interface IProps {
    // action: keyof TMap;
    component: JSX.Element;
    action:  'add' | 'cancel' | 'delete' | 'save';
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
    style?: string | undefined;
}

function ButtonModel({ onClick, component, action, style }: IProps) {
    let styleItem: {backgroundImage: string, width?: string};
    switch (action) {
        case 'add': styleItem = { backgroundImage: 'var(--bgAddBtn)' };
            break;
        case 'cancel': styleItem = { backgroundImage: 'var(--bgCancelBtn)', width: '60px' };
            break;
        case 'delete': styleItem = { backgroundImage: 'var(--bgDelBtn)', width: '60px' }
            break;
        case 'save': styleItem = { backgroundImage: 'var(--bgSaveBtn)', width: '200px' }
    }
    return (
        <div onClick={ onClick } style={ styleItem } className={ `${styles.btnStyle} ${style}` }>
            { component }
        </div>
    )
}

export default ButtonModel;