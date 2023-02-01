import React, {useEffect} from "react";

const useTodos = (id) => {
    const [data, setData] = React.useState([])
    useEffect(() => {
        if(id) {
            fetch(`https://jsonplaceholder.typicode.com/users/${id}/todos`)
                .then((response) => response.json())
                .then((res) => {
                        const d = res.map(elem => elem.title)
                        setData(d)})
        }
    }, [id])
    return [data]

}


function App() {
    const inputRef = React.useRef();
    const [data, setData] = React.useState('')
    const [response] = useTodos(data)


    return (
        <div className="App">
            <div>Введите id пользователя, чтобы узнать его задачи</div>
            <input ref={inputRef}/>
            <button onClick={() => {
                setData(inputRef.current.value)
            }}>Показать/Скрыть список
            </button>

            {response && (
                <ol>{response.map(res => <li>{res}</li>)}</ol>
            )}

        </div>
    );
}

export default App;
