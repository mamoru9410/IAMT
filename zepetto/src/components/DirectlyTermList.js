import React from "react";
import styled from "styled-components";

export default class DirectlyTerm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
      posX: 0,
      posY: 0
    };
  }
  userAgentTerm = () => {
    // console.log(window.navigator);
    // .userAgent
    // .toLowerCase()
    // let element = document.querySelector("ul");
  };
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
      <DirectlyList>
        <li>
          <IconCase>
            <Directly />
            <DirectlyText>DL Data</DirectlyText>
          </IconCase>
        </li>
        <li>
          <IconCase>
            <Directly />
            <DirectlyText>Terminal</DirectlyText>
          </IconCase>
        </li>
        <li>
          <IconCase>
            <Directly />
            <DirectlyText>Decryptor</DirectlyText>
          </IconCase>
        </li>
        <li>
          <IconCase
            onMouseDown={this.dragMove}
            onMouseUp={this.endDrag}
            posX={this.state.posX}
            posY={this.state.posY}
            nowPosX={this.state.nowPosX}
            nowPosY={this.state.nowPosY}
            switch={this.state.switchDrag}
          >
            <Directly />
            <DirectlyText>UserAgent</DirectlyText>
          </IconCase>
        </li>
        {/* <div onClick={this.handleClick}>こんにtはすすすすす</div> */}
      </DirectlyList>
    );
  }
}

const DirectlyList = styled.ul`
  position: absolute;
  top: 64px;
  right: 36px;
  li {
    position: relative;
    width: 55px;
    height: 40px;
    margin-bottom: 64px;
  }
`;
const IconCase = styled.div`
  position: absolute;
  top: ${props => `${props.posY}px`};
  left: ${props => `${props.posX}px`};
  /* transform: ${props =>
    `translate3d(${props.posX}px, ${props.posY}px, 0)`}; */
  z-index: 1000;
  cursor: move;
`;
const Directly = styled.div`
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

const DirectlyText = styled.span`
  display: block;
  margin-top: 12px;
  text-align: center;
  font-size: 12px;
  color: #f5f5f5;
`;
