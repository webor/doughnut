import React from "react";
import { connect } from "react-redux";
import { extend } from "lodash";
import { browserHistory, withRouter } from 'react-router';
import nodeConfig from 'configs/nodeConfig';

import Constants from "./../constants";
import {
    HomeContainer
} from './LoadableContainer';
import { hot } from 'react-hot-loader';

import Root from "components/Root";


const RootContainer = props => <Root {...props} />;
const mapStateToProps = state => {
    const {
    } = state;

    var pathMapping = [
        Constants.routes.HOMEPAGE
    ];
    var urlMapping = {
        [Constants.routes.HOMEPAGE]: HomeContainer
    };
    var postQuoteList = {};

    /**
     * this assigns postQuoteList to urlMaping
     * and mutates urlMapping with postQuoteList property and propert in urlMapping
     *  having same key as postQuoteList will be overridden
     */
    urlMapping = extend(urlMapping, postQuoteList);

    return {
        paths: pathMapping,
        routes: urlMapping
    };
};

let appContainer = '';
if (nodeConfig.environment === 'development') {
    appContainer = hot(module)(withRouter(connect(
        mapStateToProps,
        null
    )(RootContainer)));
} else {
    appContainer = withRouter(connect(
        mapStateToProps,
        null
    )(RootContainer));
}

export default appContainer;
