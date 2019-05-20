import React from 'react';
import { connect } from "react-redux";
import APP from 'app';
import { isEmpty } from 'lodash';
import Constants from 'constants';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            errorInfo: null
        };
    }



    componentDidCatch(error, errorInfo) {
        // Catch errors in any components below and re-render with error message
        this.setState({
            error: error,
            errorInfo: errorInfo
        });

    }
    
    static getDerivedStateFromProps(nextProps) {
        const { errorHandler = {} } = nextProps.state;
        const { errors = [] } = errorHandler;
        if (!isEmpty(errors)) {
            APP.Utils.showErrorMsg(errors);
            return null;
        } else {        
            return null;    
        }
    }


    render() {
        if (this.state.error) {
            return <div className="error__page__container">
                <center>
                    <div className="row error__page-height">
                        <img src="404.jpg" className="img-responsive" />
                    </div>
                    <div className="error__page__contnetbox">
                        <p className="error_page_paragraph">Sorry, we could not find the resource you are looking for</p>
                        <a href="/home" className="btn btn-warning error_button_homepage">GO TO HOMEPAGE</a>
                    </div>
                </center>
            </div>
        }
        return this.props.children;
    }
}



const mapStateToProps = state => ({
    state
});

const mapDispatchToProps = dispatch => ({
    saveErrors(payload) {
        dispatch(saveErrors(payload))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ErrorBoundary);