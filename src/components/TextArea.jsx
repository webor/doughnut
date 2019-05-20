import React, { useState, useEffect } from 'react';
import autosize from 'autosize';

const Textarea = (props) => {
    const {
        id = '',
        rows = 3, placeholder = '',
        defaultValue = '', className = '',
        handleChange, context
    } = props,
    [ textVal, setTextVal ] = useState(defaultValue),
        textChange = (e) => {
            const val = e.target.value;
            setTextVal(val);
        };
        
        useEffect( () => {
            handleChange(textVal, context, id);
        }, [ textVal ] )
        
        useEffect( () => {
            autosize(document.querySelectorAll('textarea'));
        } );

    return (
        <textarea row='1' value={textVal} className={className} rows={rows} placeholder={placeholder} onChange={textChange}></textarea>
    );
};

export default Textarea;
