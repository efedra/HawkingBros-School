import React, {useEffect} from "react";

const useTodos = (id) => {
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}/todos`)
            .then((response) => response.json())
            .then((response ) => {
                console.log(response)
                return response
            })
    })

}


function App() {
    const inputRef = React.useRef();
    const [data, setData] = React.useState('')
    const response = useTodos(data)


    return (
        <div className="App">
            <div>Введите id пользователя, чтобы узнать его задачи</div>
            <input ref={inputRef}/>
            <button onClick={() => {
                setData(inputRef.current.value)
            }}>Показать/Скрыть список
            </button>
            <ol>{response}</ol>
        </div>
    );
}

export default App;
