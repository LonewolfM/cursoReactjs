import React from 'react';
import Item from './Item';
import { toCapital } from "./helpers/toCapital";

const ItemList = ({productos, titulo}) => {
  const tituloCapitalizado = titulo ? toCapital(titulo) : '';

  return (
    <div className="container">
      <h2 className='main-title'>{tituloCapitalizado}</h2>
      <hr />
      <div className="productos">
        {productos.map((prod) => <Item producto={prod} key={prod.id} />)}
      </div>
    </div>
  )
}

export default ItemList;
