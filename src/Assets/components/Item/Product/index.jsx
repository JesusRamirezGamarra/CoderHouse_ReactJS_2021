import React,{useState} from 'react'
import ItemCounter from '../Counter'

const Item = ({titulo,card='NO existe'}) => {

    const [show,setShow] = useState(false)
    const fnVerMas = () =>{
      console.log(show)
      setShow(!show)
  
    }

    const fnonAdd = () =>{
        console.log('Agrege al Carrito')
      }
    

  return (
    <>
    {/* style={{width: "18rem"}} */}
      <div className="card col-lg-3" >   
        <div className="card-body">         
           <h4 className="card-title">{titulo} {card}</h4>
          {/* { show ? <p>lorem ipsum dolor sit amet</p> : ''} */}
          { show && <p className="card-text">lorem ipsum dolor sit amet</p> }
           {/* <button onClick={fnVerMas}>ver { !show ? '+': '-'}</button> */}
           <button className="btn btn-primary" onClick={fnVerMas}>ver { show ? '-': '+'}</button>
           <ItemCounter stock={8} initial={1} onAdd={fnonAdd}   />
        </div>
      </div>
    </>
  )
}

export default Item