import pathRegexp, { compile } from 'path-to-regexp';

class RouterUtils {

    compileOptions = options => Object.keys(options)
        .map(key => `${key}=${options[key]}`)
        .join('&');

    compileHash = (route) => {
        const { path, keys, options } = route,
            toPath = compile(path),
            query = this.compileOptions(options);
        return `/${toPath(keys)}${query === '' ? '' : `?${query}`}`;
    };

    parseRouteKeys = (pathString, result) => {
        const { keys, regexp } = result,
            regexpResult = regexp.exec(pathString);

        return keys.reduce((obj, key, i) => ({
            ...obj,
            [key.name]: i + 1 < regexpResult.length ? regexpResult[i + 1] : '',
        }), {});
    };

    parseRouteOptions = optionsString => optionsString
        .split('&')
        .map(str => str.split('='))
        .filter(keyValuePair => keyValuePair.length === 2)
        .reduce((obj, keyValuePair) => ({
            ...obj,
            [keyValuePair[0]]: keyValuePair[1],
        }), {});

    parseRoute = (route, paths) => {
        const routeParts = route.slice(1).split('?'),
            pathString = routeParts[0],
            optionsString = routeParts.length > 1 ? routeParts[1] : '',
            result = paths
                .map((path) => {
                    const keys = [],
                        regexp = pathRegexp(path, keys);

                    return { path, regexp, keys };
                })
                .find(path => path.regexp.test(pathString)),
            path = result ? result.path : pathString,
            keys = result ? this.parseRouteKeys(pathString, result) : {},
            options = this.parseRouteOptions(optionsString);

        return { path, keys, options };
    };

}

const routerUtils = new RouterUtils();

Object.freeze(routerUtils);

export default routerUtils;
