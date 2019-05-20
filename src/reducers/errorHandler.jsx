import Constants from 'constants';

const initialState = {
    fetching: false,
    errors: null,
    success: null,
},

    errorHandler = (state = initialState, action) => {
        try {
            const { type, payload, status } = action;
            switch (type) {
                case Constants.actions.ERROR_HANDLER.DISPLAY_ERROR_MESSAGE: {
                    return {
                        ...state,
                        success: payload.success,
                        errors: payload.errors
                    };
                }
                case Constants.actions.ERROR_HANDLER.HIDE_ERROR_MESSAGE: {
                    return {
                        ...state,
                        success: payload.success,
                        errors: null
                    };
                }
                default:
                    return state;
            }
        } catch (error) {
            return state;
        }
    };

export default errorHandler;
