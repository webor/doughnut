import React, { useState, useEffect } from 'react';

const Input = (props) => {
    const {
        id = '',
        placeholder = '',
        defaultValue = '', className = '',
        handleChange, context,
        value = '',
    } = props,
    [ elValue, setElValue ] = useState( defaultValue ),

    handleInput = (e) => {
            const val = e.target.value;
            setElValue(val);
        };
        
        useEffect( () => {
            handleChange(elValue, context, id);
        }, [ elValue ] );
        

    return (
        <input 
            defaultValue={defaultValue} 
            id={ id } 
            name={ `input__${context}` } 
            className={className} 
            placeholder={placeholder} 
            onChange={handleInput} 
            value={elValue} 
        />
    );
};

export default Input;
