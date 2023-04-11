import styled from "styled-components";

export const Message = styled.p`
 font-size: 12px;
 background-color: rgba(0, 0, 0, 0.1);
 display: inline-block;
 padding: 2px 4px;
 border-radius: 4px;
 transition: opacity 250ms ease-in-out;
 opacity: 0;
`;

export const Button = styled.button`
 display: flex;
 margin-inline: auto;
 align-items: center;
 gap: 5px;
 text-transform: uppercase;
 background-color: transparent;
 border: none;
 outline: none;
 cursor: pointer;
 padding: 5px 10px;
 border-radius: 14px;
 transition: background-color 250ms ease-in-out;

 &:hover {
  background-color: rgba(0, 0, 0, 0.1);

  & + ${Message} {
   opacity: 1;
  }
 }
`;

export const ButtonIcon = styled.img`
 width: 25px;
 height: 25px;
`;

export const ListItem = styled.li`
 position: relative;
 text-align: center;
 padding: 10px;

 &::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 50vw;
  height: 1px;
  background-color: black;
 }
`;

export const ListText = styled.p`
 text-transform: uppercase;
 margin-bottom: 10px;
`;
