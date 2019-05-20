import React, { useState, useEffect } from 'react';
import iconBank from '../app/iconBank';


const header = ( props ) => {
    return (
        <div className="header">
            <div className="header__title width-80">Transcriptions</div>
                <div className="header__actions width-20">
                <div className="header__actions width-50">
                    <span className="header__actions__icon " onClick = { props.postApiData }  >
                        {iconBank({
                                    id: 'upload',
                                    name: 'upload',
                                    className: 'icon'
                        })}
                    </span>
                </div>
                <div className="header__actions width-50">
                    <span className="header__actions__icon " onClick = { props.getApiData } >
                        {iconBank({
                                    id: 'fetch-document',
                                    name: 'fetch-document',
                                    className: 'icon'
                        })}
                    </span>
                </div>
                </div>
            
        </div>
    )
};

export default header;