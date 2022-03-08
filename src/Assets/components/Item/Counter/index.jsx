import React ,{useState} from 'react'

const ItemCounter = ({stock,initial,onAdd}) => {
    const [contador,setContador] = useState(initial)
    // const fnOperar=() =>{

    // }
    const fnSumar = () =>{
        // console.log(contador)
        // console.log(stock)
        if(contador < stock){
            setContador(contador + 1)
        }
    }

    const fnRestar = () =>{
        if( contador >0){
            setContador(contador - 1)
        }
    }
  return (
    <>    
        <div >
            <button onClick={fnRestar}>-</button>
            <span>     {contador}     </span>
            <button onClick={fnSumar}>+</button>
        </div>
        <button className="btn btn-primary" onClick={onAdd}> Agregar al Carrito</button>
    </>

  )
}

export default ItemCounter