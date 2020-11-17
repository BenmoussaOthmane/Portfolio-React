import styled , {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Source Sans Pro', sans-serif;
 } 
`;

export const Container = styled.div`
    z-index : 1;
    width : 100%;
    max-width : 1300;
    margin-right : auto;
    margin-left : auto;
    padding-right :50;
    padding-left : 50;

 @media screen and (max-width : 991){
    padding-left:30;
    padding-right:30;
 }
`;

export default GlobalStyle;