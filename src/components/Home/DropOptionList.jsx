import React from 'react'
import { DropOption } from './DropOption'

export const DropOptionList = () => {


  const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania' ]
    
  return (
        <div className="dropdown-options">
            <ul>
                {
                  regions.map( region => (
                    <DropOption region={region} key={region} />
                  ))
                }
            </ul>
        </div>
  )
}
