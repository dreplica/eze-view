const initialState = {
    currentData: [],
    loading: false,
    error:{error:"",check:false}
}

const initialAction ={
    type: "",
    payload:""
}

const ItemsReducer = (state = initialState, action=initialAction) => {
    switch (action.type) {
        case 'Fetch_data':
            return {
                ...state,
                currentData: action.payload,
                loading: false,
                error:{error:"",check:false}
            }
        case 'Loading':
            return {
                ...state,
                loading:true
            }
        case 'Error':
            return {
                ...state,
                error:{error:action.payload,check:true}
            }
            
    
        default:
            return state;
    }
}

export default ItemsReducer