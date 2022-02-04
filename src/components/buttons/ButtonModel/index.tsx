import styles from './styles.module.css'

type TProps = {
    onClick?: () => void;
    component: JSX.Element;
    action: 'add' | 'cancel' | 'delete' | 'save';
    style?: string | undefined;
};

function ButtonModel({ onClick, component, action, style }: TProps) {
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