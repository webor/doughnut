import { notify } from 'react-notify-toast';
class Utils{
    classNames = (baseClass, config) => {
        const classNames = [baseClass];
        Object.keys(config).forEach((_key) => {
            if (Object.prototype.hasOwnProperty.call(config, _key)) {
                if (config[_key]) {
                    classNames.push(_key);
                }
            }
        });
        return classNames.join(' ').trim();
    };
    
    /**
     * @param {string} searchUrl
     * @return {object} queryKey and Value
     */
    extractKeysFromUrl = (searchUrl) => {
        const searchUrlString = decodeURIComponent(searchUrl);
        return searchUrlString.replace('?', '').split('&').reduce((searchQuery, query) => {
            const splitQuery = query.split('='),
                queryKey = splitQuery[0],
                queryValue = splitQuery[1];
            return {
                ...searchQuery,
                [queryKey]: queryValue
            };
        }, {});
    };
    
    showNotification = (msg, msgType, timePeriod = 5000) => {
        if (msgType) {
            notify.show(msg, msgType, timePeriod);
        } else {
            notify.show(msg, 'error', timePeriod);
        }
    }
};

const utils = new Utils();
Object.freeze( utils );

export default utils;
