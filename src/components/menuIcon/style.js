import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    margin-top:10px;
    width:100%;
    height:40px;
    align-items:center;
    justify-content:space-between;
`;

export const Filter = styled.img`
  transition:transform 0.5s;

  :hover{
    transform:scale(1.2);
    cursor:pointer;
  }
`