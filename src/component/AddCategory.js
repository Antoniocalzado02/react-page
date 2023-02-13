import { useState } from "react"
import React from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setElement}) => {

    const [inputValue, setInputValue] = useState("second");

    const handleInputChange=(e)=>{
        setInputValue(e.target.value)
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(inputValue.trim().length>2){
            setElement( categories=>[inputValue,...categories]) 
        }

        console.log("enviado")
    }

  return (
    
    <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={ handleInputChange }/>
    </form>
 
  )
}

AddCategory.prototype={
    setElement: PropTypes.func.isRequired
}