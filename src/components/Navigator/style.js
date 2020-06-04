import styled from 'styled-components';

export const Container = styled.div`
  width:100%;
  height:30px;
  display:flex;
  justify-content:space-around;
  align-items:flex-end;


  a{
      width:30%;
      height:30px;
      padding-bottom:5px;
      color:white;
      text-align:center;
      text-decoration:none;

      :hover{
          color:white !important;
          font-size:1.1em;
      }
      
  }
`;
