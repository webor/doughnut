import React, { useEffect, useState } from 'react';
import ListElement from './ListElement';
import EmptyLoader from '../views/preloader';

const listing = ( props ) => {
    const { landingManager = {} } = props,
    [ selectedId, setSelectedId ] = useState( '' ),
    { fetching = false, list = [] } = landingManager,
    handleHoverElement = ( val ) => {
        setSelectedId(val);
    };
    return (
        <div className="listing__container">
        {
            fetching ? <EmptyLoader/>: 
            <ul className="listing">
                {
                    list.map( ( element ) => {
                        return (
                            <ListElement { ...{
                                element,
                                ...props
                            } } 
                            hoverCallback={ handleHoverElement }
                            selectedId={selectedId}
                            data-id={ element.id } 
                            key ={ element.id } />
                        )
                    } )
                }
            </ul>
        }
        </div>
    )
};

export default listing;