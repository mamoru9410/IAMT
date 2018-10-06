import React from "react";
import styled from "styled-components";

export default props => (
  <Blocker modalBlocked={props.modalBlocked}>
    <Modal>
      <ModalText>{props.modalText}</ModalText>
    </Modal>
  </Blocker>
);

const Blocker = styled.div`
  display: ${props => (props.modalBlocked ? "block" : "none")};
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
  @keyframes blocked {
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
  animation: blocked 1s steps(1, start) infinite;
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
