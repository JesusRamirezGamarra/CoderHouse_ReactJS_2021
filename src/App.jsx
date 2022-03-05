import React, { Fragment, useState, useRef, useEffect } from "react";
import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";//importar para bootstrap 
import { v4 as uuidv4 } from "uuid";


import './css/App.css'
import { TodoList } from "./components/TodoList";
import Navbar from './components/navegacion/Navbar'
import Inicio from './components/paginas/inicio'
import Hombres from './components/paginas/hombres'
import Mujeres from './components/paginas/mujeres'
import Boys from './components/paginas/boys'
import Girls from './components/paginas/girls'
import NotFound from './components/paginas/notFound'

import {CartWidget} from './components/BigCard/CartWidget'
// import BannerContainer from "./components/Container/BannerContainer";
import BannerSuperior from "./components/Banner/BannerSuperior";
import BannerSuperiorExtends from "./components/Banner/BannerSuperiorExtends";
import BigCard from "./components/BigCard/BigCard";
import ItemListContainer from './components/Container/ItemListContainer'
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



  const promocionPrincipal ="50"
  const promocionSecundaria ="10"
  const promocionPrincipalExtends ="30"
  const promocionSecundariaExtends ="15"
  const mensajeTemporal = "Funciona este ItemListContainer"
  const coderHouse = "Coder House"

  const saludar = () =>{
    console.log("Hola Coders")
  }


  return (
    
      <Fragment>

      <div className="App">
        {/* <h1>Navbar v3.0</h1> */}
        <Router>
          {/* <BannerContainer /> */}
          <BannerSuperiorExtends promocionPrincipal={promocionPrincipal} promocionSecundaria={promocionSecundaria} />
          <BannerSuperior promocionPrincipal={promocionPrincipalExtends} promocionSecundaria={promocionSecundariaExtends} />
          <Navbar /> 
        </Router>
        <ItemListContainer mensajeTemporal={mensajeTemporal} marca={coderHouse} />
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