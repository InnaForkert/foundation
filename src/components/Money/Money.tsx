import React from "react";
import { money } from "../../data/money";
import { MoneyList, SubTitle, Title } from "./Money.styled";
import MoneyListItem from "./MoneyListItem/MoneyListItem";

function Money() {
 return (
  <>
   <SubTitle>Підтримай _____</SubTitle>
   <Title>Реквізити благодійного фонду</Title>
   <SubTitle>
    Ви можете зробити внесок до нашого благодійного фонду будь-яким зручним для
    вас способом
   </SubTitle>
   <hr />
   <MoneyList>
    {money.map(({ bank, account }) => (
     <MoneyListItem bank={bank} account={account} />
    ))}
   </MoneyList>
  </>
 );
}

export default Money;
