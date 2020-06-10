import styled, { withTheme } from 'styled-components';

export const Container = styled.div`
  
`;

export const Title = styled.div`
  
`;

export const customStyle = {
    menu: (provided, state) => ({
        ...provided,
        background:"white"
    }),
    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isFocused ? 'white' : "white",
        backgroundColor: state.isSelected ? 'black' : "white",
        color: state.isSelected ? 'white' : "black",
        ":hover": {
            backgroundColor: state.isSelected?"white":"black",
            color: state.isSelected?"black":"white"
        },
        
    }),
    input: (provided) => ({
        ...provided,
        background: "red",
    }),
    placeholder: (provided) => ({
        ...provided,
        color:"white",
    }),
    
    control: () => ({
        width: 300,
        display: 'flex',
        border: '3px solid white',
        borderRadius:10
    }),
    singleValue:()=>({
        // background: "red",
        color: "white",
        display: 'flex',
        alignItems:"center"
    })

}