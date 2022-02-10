import React, {useCallback, useState} from "react";

function useUpdateValues(title: string, text: string, id: number, onSave: (title: string, text: string, id?: number) => void){

    const [titleValue, setTitleValue] = useState(title);
    const [textValue, setTextValue] = useState(text);

    const titleHandle = useCallback((ev: React.ChangeEvent<HTMLInputElement>) => {
        setTitleValue(ev.target.value);
    }, [setTitleValue]);

    const textHandle = useCallback((ev: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTextValue(ev.target.value);
    }, [setTextValue]);

    const clickHandle = useCallback(() => {
        onSave(titleValue, textValue, id);
    }, [titleValue, textValue, id, onSave]);

    return [titleValue, textValue, titleHandle, textHandle, clickHandle] as [string, string, (ev: React.ChangeEvent<HTMLInputElement>) => void, (ev: React.ChangeEvent<HTMLTextAreaElement>) => void, () => void]
}

export default useUpdateValues;