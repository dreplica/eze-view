import styled from 'styled-components';

export const Container = styled.div`
  width:100%;
  height:35px;
  display:flex;
  justify-content:space-around;
  align-items:flex-end;


  a{
      width:30%;
      height:35px;
      padding-top:6px ;
      padding-bottom:5px ;
      color:white;
      border-radius:10px 10px 0px 0px;
      text-align:center;
      text-decoration:none;

      :hover{
          color:white !important;
          font-size:1.1em;
      }
      
  }
`;
