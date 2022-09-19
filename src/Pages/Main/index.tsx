import React, {useEffect} from "react";
import style from './style.module.css'
import NoteList from "../../Components/NoteList";
import Input from "../../Components/Input";
import {RiAddCircleLine} from "react-icons/ri";
import BtnModel from "../../Components/Buttons/ButtonModel";
import {CustomProvider} from "../../Context/CustomProvider";
import {useCustomContext} from "../../Context/Hooks/useCustomContext";
import CreateUpdateNote from "../../Components/CreateUpdateNote";

const Main = () => {
  const { isShow } = useCustomContext();

  useEffect(() => {
    console.log("RENDER", isShow)
  }, [isShow])

    return (
        <div className={ style.wrapper }>
          <h1>YOUR NOTES</h1>
          <div className={ style.flex }>
            <Input />
            <BtnModel component={ <RiAddCircleLine/> } action='add'/>
          </div>
            <NoteList />
        </div>
    );
}

export default Main