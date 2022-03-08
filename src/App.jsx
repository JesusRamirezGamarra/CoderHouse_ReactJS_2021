import React, { Fragment, useState, useRef, useEffect } from "react";
import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";//importar para bootstrap 
import { v4 as uuidv4 } from "uuid";


import './css/App.css'
import { TodoList } from "./Assets/components/Todo/TodoList";
import Navbar from './Assets/components/Navbar'
import BannerContainer from "./Assets/components/Banner";


import BannerSuperior from "./Assets/components/Banner/Superior";
import BannerSuperiorExtends from "./Assets/components/Banner/SuperiorWithExtends";
import BigCard from "./Assets/components/Widget/BigCard";
import {CartWidget} from './Assets/components/Widget/Cart'
// import ItemListContainer from './Assets/components/Container/ItemListContainer'
import ItemListContainer from './Assets/components/Item'



// import Inicio from './Assets/components/Page/inicio'
// import Hombres from './Assets/components/Page/hombres'
// import Mujeres from './Assets/components/Page/mujeres'
// import Boys from './Assets/components/Page/boys'
// import Girls from './Assets/components/Page/girls'
// import NotFound from './Assets/components/Page/notFound'



// import BannerContainer from "./components/Container/BannerContainer";

// import Items from './components/paginas/items'

// import "./css/bootstrap.min.css"


const KEY = "todoApp.todos";




export function App() {



  const todoTaskRef = useRef();
  const [todos, setTodos] = useState([
    { id: 1, task: "Tarea ", completed: false },
  ]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(KEY));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(todos));
  }, [todos]);

  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  };

  const handleTodoAdd = (event) => {
    const task = todoTaskRef.current.value;
    if (task === "") return;

    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), task, completed: false }];
    });

    todoTaskRef.current.value = null;
  };

  const handleClearAll = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };




  const mensajeTemporal = "Funciona este ItemListContainer"
  const coderHouse = "Coder House"

  const saludar = () =>{
    console.log("Hola Coders")
  }

  const tituoItemListContainer = 'ItemListContainer'
  const tituloCard = 'Card'
  
  return (
    
    <Fragment>
      <div className="App">
        test PERU
          <Router>
            <BannerContainer />
            <Navbar /> 
          </Router>
          <ItemListContainer titulo={tituoItemListContainer} card={tituloCard} />
          {/* <ItemListContainer mensajeTemporal={mensajeTemporal} marca={coderHouse} /> */}
          <BigCard ejecutar={saludar} />
            {/* <Router>
              <Routes>
                <Route exact path='/' element={Inicio}/>
                <Route exact path='/hombres' element={Hombres}/>
                <Route path='/mujeres' exact component={Mujeres}/>
                <Route path='/boys' exact component={Boys}/>
                <Route path='/girls' exact component={Girls}/>
                <Route path='*'  component={NotFound}/>
              </Routes>
            </Router> */}
      </div>

      <TodoList todos={todos} toggleTodo={toggleTodo} />
        <div> Probando Fragment</div>
        <input ref={todoTaskRef} type="text" placeholder="Nueva tarea" />
        <button onClick={handleTodoAdd}>Añadir</button>
        <button onClick={handleClearAll}>Eliminar</button>
        <div>
          Te quedan [{todos.filter((todo) => !todo.completed).length}] tareas por
          terminar 
        </div>
    </Fragment>
  );
}