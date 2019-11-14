import React, { Component, Fragment } from 'react';
import APP from 'app';
import { connect } from 'react-redux';

class HomeContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="home__container">
                Hello World
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { landingManager = {} } = state;
    return {
        landingManager
    }
};

export default connect(mapStateToProps, null)(HomeContainer);