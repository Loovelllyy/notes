import { Component } from "react";
import { RiSearchLine } from 'react-icons/ri';

interface IProps {
    className: string;
    onClick: () => void;
}

class Index extends Component<IProps> {
    render(){
        return (
            <div className={ this.props.className }>
                <RiSearchLine />
            </div>
        )
    }
}

export default Index;