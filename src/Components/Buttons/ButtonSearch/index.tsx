import React from "react";
import { RiSearchLine } from 'react-icons/ri';

interface IProps {
    className: string;
    onClick: () => void
}

const Index = ({ className, onClick }: IProps) => {
        return (
            <div className={ className } onClick={ onClick } >
                <RiSearchLine />
            </div>
        )
}

export default Index;