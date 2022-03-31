import React from 'react';
import './Years.scss'

class Years extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      years: this.calculateYears()
    };
  }

  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );
  }

  tick() {
    this.setState({
        years: this.calculateYears()
    });
  }

  calculateYears() {
      return parseFloat((new Date() - new Date(this.props.startDate)) / 31536000000).toFixed(this.props.digits);
  }

  render() {
    return (
      <span className="years-component">
        {this.state.years}
      </span>
    );
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
}

export default Years;