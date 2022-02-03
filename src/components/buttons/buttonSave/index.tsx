import {BsSave} from 'react-icons/bs'
import styles from './styles.module.css'


function ButtonSave({ style }: any) {
    return (
        <div className={ `${styles.btnStyle} ${ style }` }>
            <BsSave />
        </div>
    )
}

export default ButtonSave;