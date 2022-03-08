import React from 'react'
import BannerSuperior from './Superior'
import BannerSuperiorWithExtends from './SuperiorWithExtends'

const BannerContainer = () => {


  const promocionPrincipal ="50"
  const promocionSecundaria ="10"
  const promocionPrincipalExtends ="30"
  const promocionSecundariaExtends ="15"
  
  return (
     <>
            <BannerSuperiorWithExtends promocionPrincipal={promocionPrincipal} promocionSecundaria={promocionSecundaria} />
            <BannerSuperior promocionPrincipal={promocionPrincipalExtends} promocionSecundaria={promocionSecundariaExtends} />

     </>
  )
}

export default BannerContainer