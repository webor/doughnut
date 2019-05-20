import Constants from 'constants';
import utils from './utils';
import iconBank from './iconBank';
import routerUtils from './routerUtils';

/**
 * This is the way of having private object fields in JavaScript
 * protecting pieces from leaking into the global scope and 
 * accidentally colliding with another developer's interface
 */
const APP = (() => {
    return {
        Utils: utils,
        Constants: Constants,
        IconBank: iconBank,
        RouterUtils: routerUtils
    };
})();

export default APP;
