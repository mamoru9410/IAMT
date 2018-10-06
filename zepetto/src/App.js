import React from "react";
import styled from "styled-components";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nowTime: new Date(),
      blockModal: false
    };
  }
  timer = () => {
    setInterval(() => {
      this.setState({
        nowTime: new Date()
      });
    }, 1000);
  };
  keyDown = () => {
    this.setState({
      blockModal: true
    });
  };
  componentDidMount() {
    this.timer();
    document.addEventListener("keydown", () => {
      this.keyDown();
    });
  }
  // getDerivedStateFromProps() {
  //   console.log("add getDerivedStateFromProps");
  // }
  render() {
    return (
      <AppStyled className="App">
        <ScreenBlocker
          blockModal={this.state.blockModal}
          modalText="ACCESS DENIDED"
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

export const ScreenBlocker = props => (
  <Blocker blockModal={props.blockModal}>
    <Modal>
      <ModalText>{props.modalText}</ModalText>
    </Modal>
  </Blocker>
);
const Blocker = styled.div`
  display: ${props => (props.blockModal ? "block" : "none")};
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1000;
`;

const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 380px;
  height: 120px;
  border: solid 2px #fc2c1e;
  background: #000;
  transform: translate3d(-50%, -50%, 0);
  animation: modalBackLight 1s steps(1, start) infinite;

  @keyframes modalBackLight {
    0% {
      background: #000;
    }
    50% {
      background: #000;
    }
    100% {
      background: #fc2c1e;
    }
  }
`;

const ModalText = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  height: 42px;
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  text-shadow: 2px 2px 4px #000;
  color: #fc2c1e;
`;
