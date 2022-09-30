import React, {ReactElement} from 'react';
import ReactDOM from "react-dom";
import style from "./style.module.css";

function ModalWindow({ children }: { children: ReactElement }) {
		return ReactDOM.createPortal(
				<div className={ style.bg }>
						<div className={style.wrapper}>
								{children}
						</div>
				</div>,
				document.body)
}

export default ModalWindow;