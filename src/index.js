import React from 'react';
import ReactDOM from 'react-dom';
import Spinner from './Spinner';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
  state = { lat: null, errMessage: '' };
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errMessage: err.message })
    );
  }
  render() {
    if (this.state.errMessage && !this.state.lat) {
      return <div>Error: {this.state.errMessage}</div>;
    }
    if (!this.state.errMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    return (
      <div>
        <Spinner message="Please accept location request" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
