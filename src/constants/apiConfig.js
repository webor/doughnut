/**
 * Actions for Redux used across application.
 */
const apiConfig = (() => {
    return {
        listingApi: {
            url: 'http://www.mocky.io/v2/5ae1c5792d00004d009d7e5c',
            method: 'GET',
            protocol: 'https',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            }
        },
        postListingApi: {
            url: 'http://www.mocky.io/v2/5ae1c5792d00004d009d7e5c',
            method: 'POST',
            protocol: 'https',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            }
        },
    };
})();

export default apiConfig;
