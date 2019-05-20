import Constants from 'constants';
import { isEmpty } from 'lodash';

export const emitGlobalError = (payload) => {
    return {
        type: Constants.actions.ERROR_HANDLER.DISPLAY_ERROR_MESSAGE,
        payload: payload
    };
};

export const removeGlobalError = (payload) => {
        return async (dispatch, getState) => {
            if (!isEmpty(getState().errorHandler.errors)) {
                return {
                    type: Constants.actions.ERROR_HANDLER.HIDE_ERROR_MESSAGE,
                    payload: payload
                };
            }

        }
    };


export const deleteRow = ( payload = {} ) => {
    const { id = '' } = payload;
    return async ( dispatch, getState ) => {
        const _landingManager = getState().landingManager,
        { list = [] } = _landingManager;
        const _delIndex = list.findIndex( ( el )  => { return el.id === id; } );
        list.splice( _delIndex, 1 );
        dispatch({
            type: Constants.actions.HOME.UPDATE_DATA,
            payload: list
        });
    }
}

export const addNewRow = ( payload = {} ) => {
    return async ( dispatch, getState ) => {
        const _landingManager = getState().landingManager,
        { list = [] } = _landingManager;
        list.push( {
            id: Date.now(),
            voice: "",
            text: ""
        } );
        dispatch({
            type: Constants.actions.HOME.UPDATE_DATA,
            payload: list
        });
    }
}

export const updateData = ( payload = {} ) => {
    const { context = '', value = '', id = '' } = payload;
    return async ( dispatch, getState ) => {
        const _landingManager = getState().landingManager,
        { list = [] } = _landingManager;
        list.forEach( ( el ) => {
            if( el.id === id ) {
                 el[ context ] = value;
            }
        } );
        dispatch({
            type: Constants.actions.HOME.UPDATE_DATA,
            payload: list
        });
    }
}

export const getApiData = (payload = {}) => {
    return async ( dispatch, getState ) => {
        dispatch( requestData() );
        fetch( Constants.apiConfig.listingApi.url, {
            method: Constants.apiConfig.listingApi.method,
            headers: Constants.apiConfig.listingApi.headers
        } ).then((response) => {
            if (response.ok) {
                return response.json();
              } else {
                throw new Error('Something went wrong');
              }
          })
          .then((response ) => {
              console.log( JSON.stringify( response ) );
              dispatch({
                type: Constants.actions.HOME.GET_API_DATA,
                payload: response
            });
          }).catch( ( err ) => {
              dispatch( emitGlobalError(err) );
          } );  
    }
};

export const postApiData = (payload = {}) => {
    return async ( dispatch, getState ) => {
        dispatch( requestData() );
        fetch(  Constants.apiConfig.postListingApi.url, {
            method: Constants.apiConfig.postListingApi.method,
            headers: Constants.apiConfig.postListingApi.headers,
            body: JSON.stringify( getState().landingManager.list )
        } ).then((response) => {
            if (response.ok) {
                return response.json();
              } else {
                throw new Error('Something went wrong');
              }
          })
          .then((response ) => {
              console.log( JSON.stringify( response ) );
              dispatch({
                type: Constants.actions.HOME.GET_API_DATA,
                payload: response
            });
          }).catch( ( err ) => {
            dispatch( emitGlobalError(err) );
        } );  
    }
};

export const requestData = () => ({
    type: Constants.actions.HOME.FETCH
});
    