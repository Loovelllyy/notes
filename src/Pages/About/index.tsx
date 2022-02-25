import { connect } from "react-redux";
import style from "./style.module.css";
import { inc, dec, async } from "../../Redux/dispatches";
import { MyContext, themes } from "../../Context";
import MyElm from "../../Components/MyElm";
import {useState} from "react";

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
        async: () => {
            setTimeout(() => dispatch(async), 2000)

        }
    }
}

interface IProps {
    val: number,
    inc: () => void,
    dec: () => void,
    async: () => void,
}

const About = ({val, inc, dec, async}: IProps) => {

    let [themeState, setThemeState] = useState(themes.light);

    const onClck = () => {
        setThemeState(themes.dark);
        setTimeout(() => {
            setThemeState(themes.light)
        }, 2000)
    }

    return (
        <div className={ style.wrapper }>
            <p>{ val }</p>
            <div className={style.button} onClick={ inc }>+</div>
            <div className={style.button} onClick={ dec }>-</div>
            <div className={style.button} onClick={ async }>async *2</div>
            <MyContext.Provider value={ themeState }>
                <MyElm className={ style.clicked } onClick={ onClck }>Click here</MyElm>
            </MyContext.Provider>
        </div>
    )
}

export const AboutWithRedux = connect(mapStateToProps, mapDispatchToProps)(About);