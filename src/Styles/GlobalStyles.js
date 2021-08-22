import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body,html,#root{
    width: 100%;
    min-height: 100%;
    font-family: ${(props)=> props.theme.fonts.texto};
    background-color: ${({theme}) => theme.cores.primaria};

}
button, input{
    border: 0;
    outline: 0;
}
button{
    cursor:pointer;

}


` 