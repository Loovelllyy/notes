import { Component } from "react";
import { GoHome, GoInfo, GoLink } from 'react-icons/go'
import style from './style.module.css';

class Navbar extends Component<any, any>{
    render() {
        return (
            <div className={ style.navBar }>
                <a href="/"><GoHome className={ style.icon } /></a>
                <a href="/about"><GoInfo className={ style.icon } /></a>
                <a href="/links"><GoLink className={ style.icon } /></a>
            </div>
        )
    };
}

export default Navbar;