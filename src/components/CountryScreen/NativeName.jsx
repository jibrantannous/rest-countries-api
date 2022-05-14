import React from 'react'

export const NativeName = ({nativeName}) => {

    /* const nativeNames = Object.keys(nativeName).map((nameNative)=>{
      return {
        code: nameNative,
        commonName: nativeName[nameNative].common,
        officialName: nativeName[nameNative].official
      } 
    });
    console.log(nativeNames) */

    const name = Object.keys( nativeName )
    
    const [official, commonName] = Object.values( nativeName[ name[0] ] )
    
  return (
    <p>Native Name:&nbsp;&nbsp;<span>{commonName}</span></p>
  )
}
