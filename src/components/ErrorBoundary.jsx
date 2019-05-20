import React from 'react';
import { connect } from "react-redux";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
      }
    
      static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
      }
    
    //   componentDidCatch(error, info) {
    //     // You can also log the error to an error reporting service
    //     logErrorToMyService(error, info);
    //   }
    
      render() {
        if (this.state.hasError) {
          // You can render any custom fallback UI
          return <h1>Something went wrong.</h1>;
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