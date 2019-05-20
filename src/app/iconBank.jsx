import React from 'react';
import Constants from 'constants';


const iconBank = (payload) => {
    const { id = '', name = '', className = '' } = payload,
        _iconPlaceholder = '';
    switch (id) {
        case Constants.icons.ACTIONS.UPLOAD: {
            return (
                <svg className={className}>
                    <use xlinkHref='icons.svg#upload' />
                </svg>
            );
        }
        case Constants.icons.ACTIONS.ADD_ROW: {
            return (
                <svg className={className}>
                    <use xlinkHref='icons.svg#add-row' />
                </svg>
            );
        }
        case Constants.icons.ACTIONS.DELETE: {
            return (
                <svg className={className}>
                    <use xlinkHref='icons.svg#delete' />
                </svg>
            );
        }
        case Constants.icons.ACTIONS.PERSON: {
            return (
                <svg className={className}>
                    <use xlinkHref='icons.svg#person' />
                </svg>
            );
        }
        case Constants.icons.ACTIONS.FETCH_DOCUMENT: {
            return (
                <svg className={className}>
                    <use xlinkHref='icons.svg#fetch-document' />
                </svg>
            );
        }
        default:
            return _iconPlaceholder;
    }
}

export default iconBank;
