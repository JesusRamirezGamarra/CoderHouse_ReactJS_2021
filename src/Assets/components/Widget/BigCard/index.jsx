import React, {Fragment} from 'react'

export const BigCard = ({ejecutar}) => {
  return (
    <Fragment>≈
        <>
            {/* <BannerSuperior promocionPrincipal="30" promocionSecundaria="5" /> */}
            <div>BigCard Funciona</div>
            <button onClick={ejecutar}>Ejecutar</button>
        </>
    </Fragment>
  )
}

export default BigCard