import React from 'react'
import ItemList from './List'

const ItemListContainer =  (props)  => {

    let{titulo,card} = props
    const tituoItemList = 'ItemList'
    
    return (
    <>   
       {/* <div className="row"> */}
        <h2>{titulo}</h2>
        <ItemList titulo={tituoItemList} card={card} />
       {/* </div> */}
    </>
  )
}

export default ItemListContainer