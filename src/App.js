import {useState} from "react";
import './App.css';

function App() {
    const [isTodo, setIsTodo] = useState([]);
    const [isTodoName, setIsTodoName] = useState('');

    const onChangeTodo = (event) => {
        setIsTodoName(event.target.value);
    }
    const onDeleteTodo = (index) => {
        let tmp  = [...isTodo];
        tmp.splice(index, 1);
        console.log(tmp);
        setIsTodo(tmp);
    }
    const addTodo = () => {
        let newTodo = [...isTodo , isTodoName];
        if (isTodoName !== '') {
            setIsTodo(newTodo);
        }
        setIsTodoName('');

    }
  return (
    <div className="App">
      <aside className="side-header">
        <h2 className={'side-title'}>DAYRY APP</h2>
          <p className={'side-sub'}>Comment whit no sense</p>
      </aside>
        <article className={'todo'}>
            <p className={'todo-title'}>Items</p>
                <form className={'todo-form'}>
                    <input onChange={onChangeTodo} className={'todo-input'} type={"text"} value={isTodoName} placeholder="Type name here..." required />
                    <button className={'todo-button'} onClick={addTodo}>Add new</button>
                </form>
            <div className={'todo-list'}>
                <ul className={'todo-items'}>
                    {isTodo.map((item ,index) => {
                        return(
                            <li className={'todo-list_item'} key={index}>{item} <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px" onClick={() => onDeleteTodo(index) }><path fill="#9575CD" d="M34,12l-6-6h-8l-6,6h-3v28c0,2.2,1.8,4,4,4h18c2.2,0,4-1.8,4-4V12H34z"/><path fill="#7454B3" d="M24.5 39h-1c-.8 0-1.5-.7-1.5-1.5v-19c0-.8.7-1.5 1.5-1.5h1c.8 0 1.5.7 1.5 1.5v19C26 38.3 25.3 39 24.5 39zM31.5 39L31.5 39c-.8 0-1.5-.7-1.5-1.5v-19c0-.8.7-1.5 1.5-1.5l0 0c.8 0 1.5.7 1.5 1.5v19C33 38.3 32.3 39 31.5 39zM16.5 39L16.5 39c-.8 0-1.5-.7-1.5-1.5v-19c0-.8.7-1.5 1.5-1.5l0 0c.8 0 1.5.7 1.5 1.5v19C18 38.3 17.3 39 16.5 39z"/><path fill="#B39DDB" d="M11,8h26c1.1,0,2,0.9,2,2v2H9v-2C9,8.9,9.9,8,11,8z"/></svg></li>
                        )
                    })}
                </ul>
            </div>
        </article>
    </div>
  );
}

export default App;
