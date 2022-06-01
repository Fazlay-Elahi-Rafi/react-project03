import React, { Component } from "react";

import { CubeGrid } from "styled-loaders-react";

import Style from "./Component/style";

 
export default class App extends Component {
  state = {
    loading: true,
  };

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        loading: false,
      });
    }, 300);
  };

  render() {
    return (
      <>
        <div>
          {this.state.loading ? (
            <CubeGrid color="#00b9f1" size="6rem" />
          ) : (
            <Style />
          )}
        </div>
      </>
    );
  }
}
