import React, {ReactElement, useEffect} from 'react';
import ReactDOM from "react-dom";
import Main from "../../Pages/Main";

function ModalWindow({ children }: { children: ReactElement }) {
		return ReactDOM.createPortal(children, document.body)
}

export default ModalWindow;