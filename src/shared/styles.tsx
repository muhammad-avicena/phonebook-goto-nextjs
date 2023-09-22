import { css, Global, keyframes } from "@emotion/react";
import { AnimatedProps } from "@/types";
import styled from "@emotion/styled";

export const globalStyles = (
  <Global
    styles={css`
      html,
      body {
        padding: 3rem 1rem;
        margin: 0;
        background: papayawhip;
        min-height: 100%;
        font-family: Helvetica, Arial, sans-serif;
        font-size: 24px;
        background-color: #0b0c0e;
      }
    `}
  />
);

export const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 1rem;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

export const basicStyles = css`
  background-color: white;
  color: cornflowerblue;
  border: 1px solid lightgreen;
  border-radius: 8px;
  border-right: none;
  border-bottom: none;
  box-shadow: 5px 5px 0 0 lightgreen, 10px 10px 0 0 lightyellow;
  transition: all 0.1s linear;
  margin: 3rem 0;
  padding: 1rem 0.5rem;
`;

export const hoverStyles = css`
  &:hover {
    border-color: aqua;
    box-shadow: -15px -15px 0 0 aqua, -30px -30px 0 0 cornflowerblue;
  }
`;
export const bounce = keyframes`
  from {
    transform: scale(1.01);
  }
  to {
    transform: scale(0.99);
  }
`;

export const Basic = styled.div`
  ${basicStyles};
`;

export const Combined = styled.div`
  ${basicStyles};
  ${hoverStyles};
  & code {
    background-color: linen;
  }
  border: none;
  cursor: pointer;
  outline: none;
`;

export const Animated = styled.div<AnimatedProps>`
  ${basicStyles};
  ${hoverStyles};
  & code {
    background-color: #470af0;
  }
  align-items: center;
  display: flex;
  justify-content: center;
  animation: ${({ animation }) => animation} 0.2s infinite ease-in-out alternate;
`;
