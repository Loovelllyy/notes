import React, { useState } from "react";

function useUpdateValues(title: string, text: string, id: number, onSave: (title: string, text: string, id?: number) => void) {

    const [titleValue, setTitleValue] = useState(title);
    const [textValue, setTextValue] = useState(text);

    const titleHandle = ((ev: React.ChangeEvent<HTMLInputElement>) => {
        setTitleValue(ev.target.value);
    });

    const textHandle = ((ev: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTextValue(ev.target.value);
    });

    const clickHandle = (() => {
        console.log(id)
        onSave(titleValue, textValue, id);
    });

    return [titleValue, textValue, titleHandle, textHandle, clickHandle] as [string, string, (ev: React.ChangeEvent<HTMLInputElement>) => void, (ev: React.ChangeEvent<HTMLTextAreaElement>) => void, () => void]
}

export default useUpdateValues;