// class App extends React.Component {
//   state = { lat: null, errorMessage: '' }; //This will auto create a constructor equivalent

//   componentDidMount() {
//     window.navigator.geolocation.getCurrentPosition(
//       (position) => {
//         this.setState({ lat: position.coords.latitude });
//       },
//       (err) => {
//         this.setState({ errorMessage: err.message });
//       }
//     );
//   }

//   renderContent() {
//     if (this.state.errorMessage && !this.state.lat) {
//       return <Error error={this.state.errorMessage} />;
//     }

//     if (!this.state.errorMessage && this.state.lat) {
//       return <SeasonDisplay lat={this.state.lat} />;
//     }
//     return <Spinner message='Please allow access to location' />;
//   }

//   render() {
//     return <>{this.renderContent()}</>;
//   }
// }
