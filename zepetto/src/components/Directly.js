import React from "react";
import styled from "styled-components";

export default class Directly extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
      posX: 0,
      posY: 0
    };
  }
  dragMove = e => {
    this.setState({
      x: e.pageX - this.state.posX,
      y: e.pageY - this.state.posY
    });
    document.body.addEventListener("mousemove", this.bodyDrag, false);
  };
  bodyDrag = e => {
    e.preventDefault();
    this.setState({
      posX: e.pageX - this.state.x,
      posY: e.pageY - this.state.y
    });
    document.body.addEventListener("mouseleave", this.endDrag, false);
  };
  endDrag = () => {
    document.body.removeEventListener("mousemove", this.bodyDrag, false);
    document.body.removeEventListener("mouseleave", this.endDrag, false);
  };
  render() {
    return (
      <IconCase
        onMouseDown={this.dragMove}
        onMouseUp={this.endDrag}
        onClick={this.props.terminalOpen}
        posX={this.state.posX}
        posY={this.state.posY}
        nowPosX={this.state.nowPosX}
        nowPosY={this.state.nowPosY}
      >
        <Icon />
        <Text>{this.props.directlyName}</Text>
      </IconCase>
    );
  }
}

const IconCase = styled.div`
  position: absolute;
  top: ${props => `${props.posY}px`};
  left: ${props => `${props.posX}px`};
  /* transform: ${props =>
    `translate3d(${props.posX}px, ${props.posY}px, 0)`}; */
  z-index: 1000;
  cursor: move;
`;
const Icon = styled.div`
  position: relative;
  z-index: 0;
  margin: 0 auto;
  width: 55px;
  height: 40px;
  border-radius: 2px;
  background: #ccc;
  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    height: 90%;
    box-shadow: 0 -4px 4px rgba(0, 0, 0, 0.3);
    border-radius: 2px;
    background: #f5f5f5;
  }
  &:after {
    content: "";
    position: absolute;
    top: -4px;
    left: 0;
    z-index: 1;
    width: 40%;
    height: 12px;
    border-radius: 2px;
    background: #ccc;
  }
`;

const Text = styled.span`
  display: block;
  margin-top: 12px;
  text-align: center;
  font-size: 12px;
  color: #f5f5f5;
`;
