import { css, Global, keyframes } from "@emotion/react";
import { AnimatedProps } from "@/types";
import styled from "@emotion/styled";

export const globalStyles = (
  <Global
    styles={css`
      html,
      body {
        padding: 1rem 1rem;
        margin: 0;
        background: papayawhip;
        min-height: 100%;
        font-family: monospace;
        font-size: 24px;
        background-color: #040005;
      }
      svg {
        margin-right: 0.5rem; 
      }
    `}
  />
);

export const buttonStyle = css`
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

export const Button = styled.button`
  ${buttonStyle};
`;

export const ButtonAction = styled.button`
  ${buttonStyle};
  background-color: red;
`;

export const centerStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const basicStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  color: cornflowerblue;
  border: 1px solid lightgreen;
  border-radius: 8px;
  border-right: none;
  border-bottom: none;
  box-shadow: 5px 5px 0 0 lightgreen, 10px 10px 0 0 lightyellow;
  transition: all 0.1s linear;
  margin: 2.5rem 0;
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

export const searchContainer = css`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem; 

  svg {
    margin-right: 0.5rem; 
    color: white;
  }

`;

export const searchInput = css`
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

export const Basic = styled.div`
  ${basicStyles};
`;

export const Container = styled.div`
  ${basicStyles};
  ${hoverStyles};
  & code {
    background-color: linen;
  }
  color: green;
  border: none;
  cursor: pointer;
  outline: none;

  :hover {
    color: cornflowerblue;
  }
`;

export const listContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const listItem = css`
  margin: 0.5rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f9f9f9;
  max-width: 400px;
  box-shadow: 5px 5px 0 0 lightgreen, 10px 10px 0 0 lightyellow;
  text-align: left;
  width: 100%;

  p {
    margin: 0;
  }

  ul {
    margin-left: 0.2rem;
  }
`;

export const SmallContainer = styled.div`
  ${basicStyles};
  & code {
    background-color: linen;
  }
  color: green;
  border: none;
  outline: none;
  font-size: 16px; 
  padding: 0.5rem 1rem; 

  :hover {
    color: cornflowerblue;
  }
`;

export const Animated = styled.div<AnimatedProps>`
  ${basicStyles};
  ${hoverStyles};
  & code {
    background-color: #470af0;
  }
  color: green;
  :hover {
    color: cornflowerblue;
  }
  animation: ${({ animation }) => animation} 0.2s infinite ease-in-out alternate;
`;
