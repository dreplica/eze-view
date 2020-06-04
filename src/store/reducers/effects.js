const initialState = {
    categoryMenu: 'flex',
    Menu:'none'
}

const EffectReducer = (state = initialState, action) => {
    switch (action.type) {
        case "Category":
            return {
                ...state,
                categoryMenu:action.payload
            }
        case "Menu":
            return {
                ...state,
                Menu:action.payload
            }
  
        default:
            return state;
    }
}

export default EffectReducer