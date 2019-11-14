import PropTypes from 'prop-types';
import React, { Component, Suspense } from 'react';
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';

class Root extends Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        const { router, routes, paths } = this.props,
        pathArr = window.location.pathname.split('/') || '';
        let path;
        if (pathArr[1] === '') {
            window.location.href = '/home';
        }
        if (2 < pathArr.length) {
            path = `${pathArr[1]}/${pathArr[2]}`;
        } else {
            path = window.location.pathname.split('/')[1];
        }
        return (
            <div className="wrapper">
            <ErrorBoundary>
                    <Suspense fallback={<div> Please wait while loading... </div>}>
                        <Router>
                            <Switch>
                                {paths.map((pathMap, i) => {
                                    const Component = routes[path];
                                    if (path === pathMap) {
                                        return <Component key={pathMap} {...this.props} />
                                    } else {
                                        return <Route key={pathMap} component={Error} />
                                    }
                                })}
                            </Switch>
                        </Router>
                    </Suspense>
                    </ErrorBoundary>
            </div>
        );
    }
}

export default Root;
