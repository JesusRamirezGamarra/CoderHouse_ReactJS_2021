import React from 'react'

const BannerSuperior = (props) => {

  let {promocionPrincipal , promocionSecundaria} = props;
  // console.log(props)
  return (
    <div className="BannerSuperior">Aplica al {promocionPrincipal}% de descuento Coder React  | 🗓️ Ya es marzo, obtén hasta un {props.promocionSecundaria}% OFF adicional en categorias de hombres y niños
    <br></br> + 3 cuotas sin interés | Hasta el 19/03 ⏱️</div>
  )
}

export default BannerSuperior