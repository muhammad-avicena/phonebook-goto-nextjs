'use client'
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
        font-size: 16px;
        background-color: #040005;
      }
      svg {
        margin-right: 0.5rem; 
      }
    `}
  />
);

export const buttonStyle = css`
  padding: 0.4rem 0.8rem;
  font-family: monospace;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.8rem;
  margin-top: 0.5rem;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

export const linkTextStyle = css`
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    color: #0056b3;
  }
`;

export const centerStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const spaceBetwenStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const rightStyle = css`
  display: flex;
  align-items: right;
  justify-content: right;
`;

export const centerColumnStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const addButtonStyles = css`
  background-color: #4caf50;

  &:hover {
    background-color: #388e3c;
  }
`;

export const deleteButtonStyles = css`
  background-color: #d11a2a;

  &:hover {
    background-color: #a21723;
  }
`;

export const deletePhoneButtonStyles = css`
 ${deleteButtonStyles};
 padding: 0.2rem 0.6rem;
 margin-left: 0.2rem;
 font-size: 12px;
`;


export const favouriteButtonStyles = css`
  background-color: #d41d6d;

  &:hover {
    background-color: #9f1652;
  }
`;

export const addPhoneButtonStyles = css`
  background-color: #6a31dd;
  padding: 0.2rem 0.4rem;
  font-size: 12px;

  &:hover {
    background-color: #36137a;
  }
`;

export const errorMessageStyle = css`
  color: red;
  font-size: 14px;
  margin-top: 4px;
`;

export const Button = styled.button`
  ${buttonStyle};
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
  margin-bottom: 0.2rem; 

  svg {
    margin-right: 0.5rem; 
    color: black;
  }

`;

export const searchInput = css`
  font-family: monospace;
  padding: 0.3rem 0.5rem;
  border: 1px solid #ccc;
  border-radius: 9px;
  font-size: 16px;
`;

export const dropdownInput = css`
  ${searchInput};
  margin-left: 0.5rem;
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

export const containerDropdown = css`
  padding: 1rem 1rem;
  display: flex;
  align-items: left;
  justify-content: left;
  color: white;
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

export const titleStyle = css`
  margin: 0.5rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f9f9f9;
  max-width: 400px;
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

export const TitleContainer = styled.div`
  ${listItem};
`;

export const HeaderContainer = styled.div`
  ${listItem};
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

export const AnimatedContainer = styled.div<AnimatedProps>`
  ${basicStyles};
  ${listItem};
  ${hoverStyles};
  margin: 2.5rem 2rem 1.5rem 2rem;
  color: green;
  :hover {
    color: cornflowerblue;
  }
  cursor: pointer;
  animation: ${({ animation }) => animation} 0.2s infinite ease-in-out alternate;
`;
