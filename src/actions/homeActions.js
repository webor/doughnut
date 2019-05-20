import Constants from 'constants';

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
            return response.json();
          })
          .then((response ) => {
              console.log( JSON.stringify( response ) );
              dispatch({
                type: Constants.actions.HOME.GET_API_DATA,
                payload: response
            });
          });  
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
            return response.json();
          })
          .then((response ) => {
              console.log( JSON.stringify( response ) );
              dispatch({
                type: Constants.actions.HOME.GET_API_DATA,
                payload: response
            });
          });  
    }
};

export const requestData = () => ({
    type: Constants.actions.HOME.FETCH
});
    