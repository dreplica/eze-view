import styled from 'styled-components';

export const Container = styled.div`
  width:auto;
  margin:20px auto;
  text-align:center;

`;

export const Text = styled.h3`
  text-align:center;
  margin:30px auto;
  color:rgba(250,250,250,0.5);
`

export const Navigate = styled.button`
    width:150px;
    height:30px;
    background:transparent;
    border:2px solid white;
    color: white;
    border-radius:10px;
    transition:transform 0.5s;

    :hover{
      transform:scale(1.1);
    }
`;
