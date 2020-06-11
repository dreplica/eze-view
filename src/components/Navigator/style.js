import styled from 'styled-components';

export const Container = styled.div`
  width:100%;
  height:35px;
  margin-bottom:40px;
  display:flex;
  justify-content:flex-end;
  align-items:center;

  @media  (max-width:500px){
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:flex-end;
  }

`;



export const Val = styled.div`
  width:250px;
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  align-content:flex-end;
`

export const customStyle = {
  menu: (provided, state) => ({
    ...provided,
    background: "white",
    width: '80%'
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? 'white' : "white",
    backgroundColor: state.isSelected ? 'black' : "white",
    color: state.isSelected ? 'white' : "black",
    ":hover": {
      backgroundColor: "black",
      color: "white"
    },
    cursor: "pointer"

  }),
  input: (provided) => ({
    ...provided,
    background: "red",
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "white",
  }),

  control: () => ({
    width: '80%',
    display: 'flex',
    marginTop: 8,
    border: '3px solid white',
    borderRadius: 10,
    cursor: "pointer"
  }),
  singleValue: () => ({
    // background: "red",
    color: "white",
    display: 'flex',
    alignItems: "center"
  })

}