import React from 'react';
import ReactGA from 'react-ga';

class Analytics extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            trackingId: "G-MX4BF528GX"
        };
    }

    componentDidMount() {
        ReactGA.initialize(this.state.trackingId);
        ReactGA.pageview(window.location.pathname + window.location.search);
    }

    render() {
        return (''
        );
      }
}

export default Analytics;