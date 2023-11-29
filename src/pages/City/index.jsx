import React from "react";

export default class City extends React.Component {
  render() {
    return <div>{this.props.match.params.cityId}</div>;
  }
}
