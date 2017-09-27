import React from "react";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello world! {this.props.name}</h1>
      </div>
    );
  }
}

export default App;
