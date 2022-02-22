import {connect} from "react-redux";
import style from "./style.module.css";
import { inc, dec, async } from "../../Redux/dispatches";

const mapStateToProps = (state: number) => {
    return { val: state }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        inc: () => {
            dispatch(inc)
        },
        dec: () => {
            dispatch(dec);
        },
        asyncF: () => {
            setTimeout(() => {
                dispatch(async)
            }, 3000)
        }
    }
}

interface IProps {
    val: number,
    inc: () => void,
    dec: () => void,
    asyncF: () => void,
}

const About = ({val, inc, dec, asyncF}: IProps) => {
    return (
        <div className={ style.wrapper }>
            <p>{ val }</p>
            <div className={style.button} onClick={ inc }>+</div>
            <div className={style.button} onClick={ dec }>-</div>
            <div className={style.button} onClick={ asyncF }>async *2</div>
        </div>
    )
}

export default About;

export const AboutWithRedux = connect(mapStateToProps, mapDispatchToProps)(About);