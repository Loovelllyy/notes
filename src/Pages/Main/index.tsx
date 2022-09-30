import React from "react";
import style from './style.module.css'
import NoteList from "../../Components/NoteList";
import Input from "../../Components/Input";
import {RiAddCircleLine} from "react-icons/ri";
import BtnModel from "../../Components/Buttons/ButtonModel";
import {useCustomContext} from "../../Context/Hooks/useCustomContext";
import CreateUpdateNote from "../../Components/CreateUpdateNote";

const Main = () => {
  const { isShow, showModal } = useCustomContext();

    return (
        <div className={ style.wrapper }>
          <h1>YOUR NOTES</h1>
          <div className={ style.flex }>
            <Input />
            <BtnModel component={ <RiAddCircleLine/> } action='add' onClick={ () => showModal!({title: "", text: "", id: 0}) } />
          </div>
            <NoteList />
          {isShow && <CreateUpdateNote />}
        </div>
    );
}

export default Main