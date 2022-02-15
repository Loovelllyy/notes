type TData = {id: number,  title: string, text: string}[];

const getData = () => {
    return new Promise<TData>((resolve => {
        const getNotes = () => {
            let notes:TData = [];
            let keys = Object.keys(localStorage);
            for(let key of keys) {
                notes.push(JSON.parse(localStorage.getItem(key) || '{}'))
            }
            notes.sort((a, b) => a.id - b.id)
            return notes;
        }
        setTimeout(() => resolve(getNotes()), 100)
    }))
};

const addData = (id: number, title: string, text: string) => {
    localStorage.setItem(`${id}`, JSON.stringify({id, title, text}));
}

const deleteData = (id: number) => {
    localStorage.removeItem(id.toString());
}

export { getData, addData, deleteData };