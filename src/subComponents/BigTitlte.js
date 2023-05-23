import React from 'react';
import styled from 'styled-components';

const Text = styled.h1`
  position: fixed;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  color: ${(props) => `red`};
  font-size: calc(1rem + 1vw);
  z-index: 0;
`;

const BigTitlte = (props) => {
  return (
    <Text top={props.top} left={props.left} right={props.right}>
      {props.text}
    </Text>
  );
};

export default BigTitlte;
