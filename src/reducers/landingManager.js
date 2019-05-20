import Constants from '../constants';

const _defaultState = {
    success: null,
    fetching: false,
    list: []
};

const landingManager = (state = _defaultState, action) => {
    const { type = '', payload = {} } = action;
    try {
        switch (type) {
            case Constants.actions.ERROR_HANDLER.DISPLAY_ERROR_MESSAGE: {
                return {
                    ...state,
                    fetching: false,
                };
            }
            case Constants.actions.HOME.UPDATE_DATA: {
                return {
                    ...state,
                    fetching: false,
                    list: payload
                  }   
            }
            case Constants.actions.HOME.GET_API_DATA: {
                return {
                    ...state,
                    fetching: false,
                    list: payload
                  }   
            }
            case Constants.actions.HOME.FETCH: {
                return {
                    ...state,
                    fetching: true
                  }   
            }
            default:
             return state
           }   
    } catch( err ) {
        console.log( err );
        return _defaultState;       
    }
};

export default landingManager;