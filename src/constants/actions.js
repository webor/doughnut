/**
 * Actions for Redux used across application.
 */
const actions = (() => {
    return {
        HOME: {
            GET_API_DATA: "HOME:FETCH_API_DATA",
            UPDATE_DATA: "HOME:UPDATE_DATA",
            FETCH: "HOME:FETCH"
        },
        ROUTER: {
            CHANGE_ROUTE: 'ROUTER:CHANGE_ROUTE',
            RESET_STATE_DATA: 'ROUTER:RESET_STATE_DATA',
        },
        ERROR_HANDLER: {
            DISPLAY_ERROR_MESSAGE: 'ERROR_HANDLER:DISPLAY_ERROR_MESSAGE',
            HIDE_ERROR_MESSAGE: 'ERROR_HANDLER:HIDE_ERROR_MESSAGE'
        },
        GLOBAL_ERROR_EVENT: 'GLOBAL_ERROR_EVENT',
        REMOVE_GLOBAL_ERROR_EVENT: 'REMOVE_GLOBAL_ERROR_EVENT',
    };
})();

export default actions;
