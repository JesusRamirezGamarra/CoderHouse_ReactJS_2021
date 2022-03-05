import React from 'react'
import {useNavigate} from 'react-router-dom';


const hombres = () => {

  const navigate = useNavigate();
  console.log(navigate.location.pathname); // '/about'

  return (
    <div>
      <br></br>
      <hr></hr>
      <br></br>
      <hr></hr>
      <br></br>
      <hr></hr>
      <br></br>
      <hr></hr>
      <br></br>
      <hr></hr>
      <br></br>
      <hr></hr>
      <br></br>
      <hr></hr>
      <br></br>
      <hr></hr>
      <br></br>
      <hr></hr>
      <h1>hombres,  en: {navigate.location.pathname}</h1></div>
  )
}

export default hombres