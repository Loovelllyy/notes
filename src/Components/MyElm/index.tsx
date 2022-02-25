import MyElm2 from "../MyElm2";

interface IProps {
    className: string;
    onClick: () => void;
    children: string
}

const MyElm = ({className, onClick}: IProps) => {
    return (
        <div className={ className } onClick={ onClick }>
            Click
            <MyElm2 />
        </div>
    )
}

export default MyElm;