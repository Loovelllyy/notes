import { connect } from "react-redux";
import style from "./style.module.css";
import {inc, dec, async, getPhoto} from "../../Redux/dispatches";
import { MyContext, themes } from "../../Context";
import MyElm from "../../Components/MyElm";
import {useState} from "react";

const mapStateToProps = (state: {num: number, photos: []}) => {
    console.log(state)
    return { num: state.num, photos: state.photos }
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

        },
        getPhoto: () => {
            console.log('GET');
            // dispatch(getPhoto);
        }
    }
}

interface IProps {
    val: { num: number, photos: [] },
    inc: () => void,
    dec: () => void,
    async: () => void,
    getPhoto: () => void,
}

// const About = ({num, inc, dec, async, getPhoto }: IProps) => {
// const About = ({val, inc, dec, async, getPhoto }: IProps) => {
const About = (props :any) => {

    let [themeState, setThemeState] = useState(themes.light);

    const onClck = () => {
        setThemeState(themes.dark);
        setTimeout(() => {
            setThemeState(themes.light)
        }, 2000)
    }
    // console.log(props)
    return (
        <div className={ style.wrapper }>
            <p>{ props.num }</p>
            <div className={style.button} onClick={ props.inc }>+</div>
            <div className={style.button} onClick={ props.dec }>-</div>
            <div className={style.button} onClick={ props.async }>async *2</div>
            <div className={style.button} onClick={ props.getPhoto }>get photo</div>
            <MyContext.Provider value={ themeState }>
                <MyElm className={ style.clicked } onClick={ onClck }>Click here</MyElm>
            </MyContext.Provider>
        </div>
    )
}

export const AboutWithRedux = connect(mapStateToProps, mapDispatchToProps)(About);