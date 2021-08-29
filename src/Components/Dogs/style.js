import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height:calc(100vh - 100px);
    padding: 20px;
    overflow-y: scroll;

` 

export const Table = styled.table`
    width: 95%;
    height: 85%;
    border-collapse: collapse;
    th,td{
        text-align: center;
        line-height: 50px;
        border: 1px solid;
    }

`
export const Modal = styled.div`
    width: 100vw;
    height: 100vh;
    
    display:block;
    position: absolute;
    top: 0;
    background-color: rgba(0,0,0,0.03);
    z-index: 2;
    
    


 

`
export const ModalContent = styled.div`
    width: 50%;
    height: 80%;
    margin:  30px auto;
    background-color: white;
   >img{
        width: 50px;
        height: 60px;
   }
   >input{
       width: 40%;
       height: 30px;
       padding: 2px;
       border:  1px solid;

   }

   >button{
       border: 1px solid;
       width: 50px;
       height: 30px;

   }
`


