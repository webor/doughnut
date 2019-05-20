import React, { useState, useEffect } from 'react';

const Checkbox = (props) => {
    const [ checkedId, setCheckedId ] = useState( '' ),
    {
        id = '',
        name = '',
        value = '',
        checked = false,
        displayLabel = '',
        disabled = false
    } = props,
    
    handleCheckboxInput = ( event ) => {
        const _element = parseInt(event.target.id);
        setCheckedId( _element );
    };

    return (
        <label className="container">{displayLabel !== '' ? displayLabel : ''}
                 <input type="checkbox" checked={checkedId === id } onChange={handleCheckboxInput} id={id} name={name} value={value} disabled={disabled} />
                <span className="checkmark"></span>
        </label>
    );
}

export default Checkbox;
