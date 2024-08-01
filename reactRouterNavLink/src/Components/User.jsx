import React from 'react'
import { useParams } from 'react-router-dom'

export const User = () => {
    const params=useParams()
  return (
    <div className='text-yellow-600 text-5xl flex justify-center items-center'>
    <div>
    HELLO I'M<b> {(params.username).toUpperCase()}</b>  <br /> What can i do for you ?
    </div>
    </div>
  )
}
