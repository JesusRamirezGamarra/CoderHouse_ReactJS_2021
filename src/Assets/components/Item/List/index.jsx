import React from 'react'
import Item from '../Product'

const ItemList = ({titulo,card}) => {

  const tituoItem = 'Item'

  return (
      <>      
       <h3>{titulo}</h3>
            <div className="row">
                <Item titulo={tituoItem} card={card} />
                <Item titulo={tituoItem} />
                <Item titulo={tituoItem} />
                <Item titulo={tituoItem} card={card} />
                <Item titulo={tituoItem} card={card} />
                <Item titulo={tituoItem} />
                <Item titulo={tituoItem} />
            </div>
      </>

  )
}

export default ItemList