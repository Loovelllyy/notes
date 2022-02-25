import {useContext} from "react";
import {MyContext} from "../../Context";


const MyElm2 = () => {
    let value = useContext(MyContext);
    return <div style={{ background: value.background, color: value.color, height: '100%', width: '100%' }} />
}

export default MyElm2;