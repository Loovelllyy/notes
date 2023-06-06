import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";

interface IProps {
    className: string;
}

const Index = ({ className }: IProps) => {
  return (
    <div className={ className } >
      <BiSearchAlt2 size={ 25 } />
    </div>
  )
}

export default Index;
