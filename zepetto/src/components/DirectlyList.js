import React from "react";
import styled from "styled-components";

import Directly from "./Directly";

export default class DirectlyList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <List>
        <li>
          <Directly directlyName="DL Data" />
        </li>
        <li>
          <Directly directlyName="Terminal" />
        </li>
        <li>
          <Directly directlyName="Decryptor" />
        </li>
        <li>
          <Directly directlyName="UserAgent" />
        </li>
      </List>
    );
  }
}

const List = styled.ul`
  position: absolute;
  z-index: 900;
  top: 64px;
  right: 36px;
  li {
    position: relative;
    width: 55px;
    height: 40px;
    margin-bottom: 64px;
  }
`;
