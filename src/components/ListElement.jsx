import React, { useState } from 'react';
import Checkbox from '../components/Checkbox';
import Textarea from '../components/TextArea';
import Input from './Input';
import APP from 'app';

const listEl = ( props ) => {
    const { element = {}, landingManager = {} } = props,
    { fetching = false, list = [] } = landingManager,
    { id = '', text = '', voice = '' } = element,
    
    handleHoverElement = ( e ) => {
        const id = e.currentTarget.getAttribute( "data-id" );
        props.hoverCallback( id );
    },
    
    handleDeleteElement = () => {
        props.deleteRow( { id: parseInt(props.selectedId)} );
    },
    
    handleCheckboxInput = ( payload ) => {
        console.log( payload );
    },
    
    handleChange = ( value, context, id ) => {
        props.updateData({ value, context, id });
    };
    
    return (
        <li className="listing__item" data-id={ id } onMouseOver={ handleHoverElement }>
            <Checkbox
                    checked={list.find((el) => { return el.id === element.id })}
                    handleCheckboxInput={handleCheckboxInput}
                    id={id}
                    value={id}
                    name={id}
                    displayLabel={""} />
            <span className="listing__item__icon ">
                {APP.IconBank({
                        id: 'person',
                        name: 'person',
                        className: 'icon icon--person'
                })}
            </span>
            <span className="listing__item__title width-90"> 
                <Input 
                    id={id}
                    placeholder="Enter Heading"
                    className='listing__item__input'
                    defaultValue={ voice }
                    handleChange={ handleChange }
                    context={ 'voice' }
                />
            </span>
            <span className="listing__item__delete">
                {
                    parseInt(props.selectedId) === id ?
                    <div onClick = { handleDeleteElement } >
                        {
                            APP.IconBank({
                                id: 'delete',
                                name: 'delete',
                                className: 'icon icon--person'
                            })
                        }    
                    </div>
                    : ''
                }
            </span>
            <div className="listing__item__text">
                <Textarea
                    id={id}
                    placeholder='Enter Description here...'
                    className='listing__item__textarea'
                    defaultValue={text}
                    handleChange={handleChange}
                    context={ 'text' }
                />
            </div>
        </li>   
    );
}

export default listEl;