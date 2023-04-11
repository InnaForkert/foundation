import React, { useState } from "react";
import copyImg from "../../../assets/copy.png";
import {
 Button,
 ButtonIcon,
 ListItem,
 ListText,
 Message,
} from "./MoneyListItem.styled";
import { copy } from "../../../utils/Copy";

function MoneyListItem({ bank, account }: { bank: string; account: string }) {
 const [text, setText] = useState("Натисність, щоб скопіювати реквізити");

 function handleClick() {
  copy(account);
  setText("Реквізити скопійовано");
  setTimeout(() => setText("Натисність, щоб скопіювати реквізити"), 4000);
 }

 return (
  <ListItem>
   <ListText>{bank}:</ListText>
   <ListText>{account}</ListText>
   <Button onClick={handleClick}>
    <ButtonIcon src={copyImg} alt="copy icon" />
    копіювати
   </Button>
   <Message>{text}</Message>
  </ListItem>
 );
}

export default MoneyListItem;
