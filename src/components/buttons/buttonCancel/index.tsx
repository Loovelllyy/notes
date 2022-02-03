import {MdOutlineCancel} from "react-icons/md";
import styles from "./styles.module.css";

function ButtonCancel( { style, onClick }: any ) {
    return (
        <div className={ `${ styles.btnStyle } ${ style }` } onClick={ onClick }>
            <MdOutlineCancel/>
        </div>
    )
}

export default ButtonCancel;