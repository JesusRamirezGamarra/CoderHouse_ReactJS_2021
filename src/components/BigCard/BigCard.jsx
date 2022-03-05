import React, {Fragment} from 'react'
// import BannerSuperior from '../Banner/BannerSuperior'

export const BigCard = ({ejecutar}) => {
  return (
    <Fragment>≈
        <>
            {/* <BannerSuperior promocionPrincipal="30" promocionSecundaria="5" /> */}
            <div>BigCard</div>
            <button onClick={ejecutar}>Ejeuctar</button>
        </>
    </Fragment>
  )
}

export default BigCard