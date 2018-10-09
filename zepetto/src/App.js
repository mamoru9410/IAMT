import React from "react";
import styled from "styled-components";

import ScreenBlockerBlocked from "./components/ScreenBlockerBlocked";
import ScreenBlockerSuccess from "./components/ScreenBlockerSuccess";
import DirectlyList from "./components/DirectlyList";

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
        <DirectlyList />
      </AppStyled>
    );
  }
}

export default App;

const AppStyled = styled.div`
  * {
    -ms-user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
  }
  overflow: hidden;
  height: 100vh;
  background: #202020;
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
