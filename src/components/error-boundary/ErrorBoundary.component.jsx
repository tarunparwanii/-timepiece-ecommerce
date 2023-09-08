import React from 'react';
import {ErrorImageOverlay, ErrorImageContainer, ErrorImageText } from './ErrorBoundary.styles'
class ErrorBoundary extends React.Component {

    constructor() {
        super();
    this.state={
        hasErrored : false
    }
}
    static getDerivedStateFromError(error) {
        //process the error
        //Allow us to catch error before hand 
        return {hasErrored : true};
    }
    componentDidCatch(error,info) {
        console.log(error);
    }

    render() {
        if (this.state.hasErrored) {
            return (
                <ErrorImageOverlay>
                    <ErrorImageContainer imageUrl="https://i.imgur.com/yW2W9SC.png"/>
                    <ErrorImageText>Hey Hold on! You stepped on a broken page.</ErrorImageText>
                </ErrorImageOverlay>
            )
        }
        return this.props.children;
    }
}

export default ErrorBoundary;