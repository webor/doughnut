import React, { Component, Fragment } from 'react';
import Header from '../components/Header';
import List from '../components/List';
import APP from 'app';
import { getApiData, postApiData, updateData, addNewRow, deleteRow } from "../actions/homeActions";
import { connect } from 'react-redux';

class HomeContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="home__container">
                <Header {...this.props} />
                <List { ...this.props } />
                <div className="home__add__container">
                    <span className="home__add-row" onClick={ this.props.addNewRow }>
                        {
                            APP.IconBank({
                                id: 'add-row',
                                name: 'add-row',
                                className: 'icon icon--add-row'
                            })
                        }
                    </span>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { landingManager = {} } = state;
    return {
        landingManager
    }
},

    mapDispatchToProps = (dispatch) => ({
        deleteRow: ( payload ) => {
            dispatch(deleteRow(payload));    
        },
        addNewRow: ( payload ) => {
            dispatch(addNewRow(payload));    
        },
        updateData: (payload) => {
            dispatch(updateData(payload));  
        },
        postApiData: ( payload ) => {
            dispatch(postApiData(payload));  
        },
        getApiData: (payload) => {
            dispatch(getApiData(payload));
        }
    });

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);