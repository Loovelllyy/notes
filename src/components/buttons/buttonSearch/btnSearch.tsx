import { Component } from "react";
import { RiSearchLine } from 'react-icons/ri';

class BtnSearch extends Component<any, any> {
    render(){
        return (
            <div className={ this.props.className }  onClick={ this.props.click }>
                <RiSearchLine />
            </div>
        )
    }
}

export default BtnSearch;