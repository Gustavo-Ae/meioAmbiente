import React from 'react'
import "./Input.css"

export default function Input({title, type,img, name, value, placeholder, pattern, maxLenght, onChange}) {
  return (
    <label>
            {title && <span>{title}</span>}
            <input type={type} name={name} value={value} placeholder={placeholder} pattern={pattern} maxLength={maxLenght} onChange={onChange}/>
            {img && <img src={img} />}  
    </label>
  )
}
