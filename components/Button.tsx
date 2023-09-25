"use client"
import React from 'react'

const Button = ({ title }) => {
  return (
    <button onClick={() => console.log('BUTTON CLICKED')} className='px-3 py-2 bg-blue-200 rounded-md max-w-sm text-base'>
      {
        title
      }
    </button>
  )
}

export default Button