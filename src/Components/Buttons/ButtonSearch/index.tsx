import React from "react";
import { RiSearchLine } from 'react-icons/ri';

interface IProps {
    className: string;
}

const Index = ({ className }: IProps) => {
  return (
    <div className={ className } >
      <RiSearchLine />
    </div>
  )
}

export default Index;