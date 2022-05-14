import React from 'react'

export const Languages = ({languages}) => {

    const values = Object.values(languages)

  return (

        <p>Languages:&nbsp;&nbsp;
            <span>
            {
                values.map(lang => lang + ', ')
            }
            </span>
        </p>
  )
}
