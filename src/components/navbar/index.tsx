import { Component } from "react";
import { GoHome, GoInfo, GoLink } from 'react-icons/go'
import { Link } from 'react-router-dom';
import style from './style.module.css';

class Navbar extends Component<unknown, unknown>{
    render() {
        return (
            <div className={ style.navBar }>
                <Link to="/"><GoHome className={ style.icon } /></Link>
                <Link to="/about"><GoInfo className={ style.icon } /></Link>
                <Link to="/links"><GoLink className={ style.icon } /></Link>
            </div>
        )
    };
}

export default Navbar;