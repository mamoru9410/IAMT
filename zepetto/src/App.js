import React from "react";
import styled from "styled-components";

import ScreenBlockerBlocked from "./components/ScreenBlockerBlocked";
import ScreenBlockerSuccess from "./components/ScreenBlockerSuccess";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nowTime: new Date(),
      modalBlocked: false,
      modalSuccess: false
    };
  }
  timer = () => {
    setInterval(() => {
      this.setState({
        nowTime: new Date()
      });
    }, 1000);
  };
  keyDown = e => {
    if (e.altKey && e.ctrlKey && e.keyCode === 90) {
      this.setState({
        modalBlocked: false,
        modalSuccess: true
      });
      setTimeout(() => {
        this.setState({
          modalSuccess: false
        });
      }, 3000);
      return;
    }
    this.setState({
      modalBlocked: true
    });
  };
  componentDidMount() {
    this.timer();
    document.addEventListener("keydown", e => {
      this.keyDown(e);
    });
  }
  // getDerivedStateFromProps() {
  //   console.log("add getDerivedStateFromProps");
  // }
  render() {
    return (
      <AppStyled className="App">
        <ScreenBlockerBlocked
          modalBlocked={this.state.modalBlocked}
          modalText="ACCESS DENIDED"
        />
        <ScreenBlockerSuccess
          modalSuccess={this.state.modalSuccess}
          modalText="ACCESS GRANTED"
        />
        {this.state.nowTime.toLocaleTimeString()}
        <h1>
          Zepetto
          <span>puppet walk for MK</span>
        </h1>
        <img src="./images/logoMini.svg" alt="ロゴ" />
        <h3>
          Created by PSYCHO-PASS KURITA
          <br />
          Exploit by TAKU
        </h3>
        {/* <Hacks /> */}
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
        </DirectlyList>
      </AppStyled>
    );
  }
}

export default App;

const AppStyled = styled.div`
  overflow: hidden;
  height: 100vh;
  background: #303030;
  font-family: Avenir Next;
  h1 {
    margin: 120px auto 60px;
    letter-spacing: -3px;
    text-align: center;
    font-size: 100px;
    font-weight: normal;
    color: white;
    span {
      display: block;
      letter-spacing: 0;
      font-size: 32px;
      color: white;
    }
  }
  img {
    display: block;
    margin: 0 auto 24px;
    width: 120px;
  }
  h3 {
    margin-bottom: 140px;
    text-align: center;
    font-size: 16px;
    font-weight: normal;
    color: white;
  }
`;

const Hacks = styled.div`
  margin: 0 auto;
  width: 80%;
  height: 500px;
  border-radius: 8px;
  background: #000;
`;

const IconCase = styled.div`
  width: 100px;
`;

const DirectlyList = styled.ul`
  position: absolute;
  top: 64px;
  right: 36px;
  li {
    margin-bottom: 32px;
  }
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
