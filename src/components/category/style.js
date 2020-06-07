import styled from 'styled-components';

export const Container = styled.div`
  width:25%;
  position:sticky;
  top:20px;
  display:flex;
  border-radius:0px 10px 10px 0px;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  background-color: rgba(10,24,46,1);

  @media (max-width:850px){
    position:fixed;
    overflow-Y:auto;
    width:80%;
    border:2px solid white;
    border-radius:10px;
    left:10%;
    z-index:4;
    top:15vh;
    height:70vh;
  }

`;

export const Filter = styled.h2`
    color:white;
    display:flex;
    justify-content:space-between;
    width:70%;
    margin:10px 0px;

    a{
        text-decoration:none;
        color:grey;

        :hover{
            color:white;
            transform:scale(1.2);
        }
    }
`;
    
export const Phones = styled.div`
    display:flex;
    flex-direction:column;
    width:70%;
    margin-bottom:20px;

    a{
        color:white;
        text-decoration:none;
        width:auto;
        :hover{
            font-weight:bolder;
        }
    }
`;
    
export const Context = styled.h3`
    color:white;
    width:70%;
    margin-top:10px;
`;
    
    
export const Price = styled.div`
    display: flex;
    flex-direction:column;
    align-self:center;
    justify-content:center;
    width:70%;
    justify-content:space-between;
`;
    
export const Item = styled.button`
    width:100%;
    margin:10px auto;
    height:40px;
    border:0px;
    padding-left:10px;
    border-radius:5px;
    text-align:left;
    background:white;

    :hover{
        cursor: pointer;
        padding-left:8px;
        border:2px solid black;
    }
`
