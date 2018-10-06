import React from "react";
import styled from "styled-components";

export default class Terminal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      windowX: window.screen.width / 2,
      windowY: window.screen.height / 2
    };
  }
  render() {
    return (
      <Term windowX={this.state.windowX} windowY={this.state.windowY}>
        こんにtははろー こんにtははろー こんにtははろー こんにtははろー
        こんにtははろー こんにtははろー こんにtははろー こんにtははろー
      </Term>
    );
  }
}
const Term = styled.div`
  position: absolute;
  top: ${props => props.windowX};
  left: ${props => props.windowY};
  width: 1000px;
  height: 300px;
  border-radius: 8px;
  background: #000;
  color: white;
  transform: translate3d(-50%, -50%, 0);
`;
