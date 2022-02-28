import { connect } from "react-redux";
import style from "./style.module.css";
import {inc, dec, async} from "../../Redux/actions";
import { MyContext, themes } from "../../Context";
import MyElm from "../../Components/MyElm";
import {useState} from "react";
import {thunkCreator} from "../../Redux/dispatches";

const URL = 'https://jsonplaceholder.typicode.com/photos'

const mapStateToProps = (state: {num: number, photo: string}) => {
    return { num: state.num, photo: state.photo }
}

const getRandom = (min: number, max: number) => {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
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
            setTimeout( () => dispatch(async), 2000)

        },
        getPhoto: () => {
            let n = getRandom(1, 5000);
            thunkCreator(URL)(dispatch, n);
        },

    }
}

const About = (props :any) => {
    let [themeState, setThemeState] = useState(themes.light);

    const onClck = () => {
        setThemeState(themes.dark);
        setTimeout(() => {
            setThemeState(themes.light)
        }, 2000)
    }
    return (
        <div className={ style.wrapper }>
            <p>{ props.num }</p>
            <div className={style.button} onClick={ props.inc }>+</div>
            <div className={style.button} onClick={ props.dec }>-</div>
            <div className={style.button} onClick={ props.async }>async *2</div>
            <div className={style.button} onClick={ props.getPhoto }>get photo</div>
            <div style={{ background: `url(${ props.photo })` }} className={ style.photo } >{ props.photo } </div>
            <MyContext.Provider value={ themeState }>
                <MyElm className={ style.clicked } onClick={ onClck }>Click here</MyElm>
            </MyContext.Provider>
        </div>
    )
}

export const AboutWithRedux = connect(mapStateToProps, mapDispatchToProps)(About);