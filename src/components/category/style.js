import styled from 'styled-components';

export const Container = styled.div`
  width:25%;
  position:sticky;
  top:20px;
  height:auto;
  padding-bottom:10px;
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
    justify-content:flex-start;
    border:2px solid white;
    border-radius:10px;
    left:10%;
    z-index:4;
    top:10vh;
    min-height:80vh;
  }

`;

export const Filter = styled.div`
    color:white;
    text-align:center;
    padding:10px;
    position:relative;
    height:auto;
    border-bottom:2px solid white;
    border-radius:0px 10px 0px 0px;
    background:black;
    width:100%;
`;
    
export const Actions = styled.div`
    width:60%;
    height:50px;
    margin:5px 15%;
    align-self:flex-start;
    display:flex;
    justify-content:space-around;
    align-items:flex-start;
`;

export const Button = styled.button`
    text-decoration:none;
    color:black;
    width:40%;
    padding:5px;
    margin-top:5px;
    border:1px solid black;
    border-radius:10px;
    background-color:white;
    outline-width:0;

    :hover{
            color:white;
            background:black;
            transform:scale(1.2);
        }
`;
    
export const Context = styled.h3`
    color:white;
    width:70%;
    margin-top:10px;
`;
    
    
export const DropMenu = styled.div`
    display: flex;
    margin-top:10px;
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

export const Line = styled.div`
    width:1px;
    height:15px;
    align-self:flex-start;
    margin:3px 35% !important;
    background:white;
`;

export const Sort = styled.input`
    width:55%;
    height:35px;
    padding-left:10px;
    align-self:flex-start;
    margin-left:15% !important;
    border:2px solid white;
    border-radius:5px;
    margin:6px 5px;
`;