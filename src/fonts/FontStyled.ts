import RubikRegularWoff from "./Rubic/Rubik-Regular.woff";
import RubikRegularWoff2 from "./Rubic/Rubik-Regular.woff2";
import RubikMediumWoff from "./Rubic/Rubik-Medium.woff";
import RubikMediumWoff2 from "./Rubic/Rubik-Medium.woff2";
import RubikBoldWoff from "./Rubic/Rubik-Bold.woff";
import RubikBoldWoff2 from "./Rubic/Rubik-Bold.woff2";
import { createGlobalStyle } from "styled-components";

export const GlobalFontComponent = createGlobalStyle`
@font-face {
    font-family: 'RubikRegular';
        src: local('RubikRegular'), local('RubikRegular'),
        url(${RubikRegularWoff2}) format('woff2'),
        url(${RubikRegularWoff}) format('woff');
        font-weight: 400;
        font-style: normal;
}
font-face {
    font-family: 'RubikMedium';
        src: local('RubikMedium'), local('RubikMedium'),
        url(${RubikMediumWoff2}) format('woff2'),
        url(${RubikMediumWoff}) format('woff');     
        font-weight: 500;
        font-style: normal;
}
font-face {
    font-family: 'RubikBold';
        src: local('RubikBold'), local('RubikBold'),
       url(${RubikBoldWoff2}) format('woff2'),
        url(${RubikBoldWoff}) format('woff');
        font-weight: 700;
        font-style: normal;
}
`;
