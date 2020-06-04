const initialState = {
    currentData: [],
    filter: { sort: "", size: "" },
    loading: false,
    error: { error: "", check: false }
}

const initialAction = {
    type: "",
    payload: ""
}

const ItemsReducer = (state = initialState, action = initialAction) => {
    switch (action.type) {
        case 'Fetch_data':
            console.log("hafa e enter", action.payload)
            return {
                ...state,
                currentData: action.payload,
                loading: false,
                error: { error: "", check: false }
            }
        case 'Loading':
            console.log("i got fired up")
            return {
                ...state,
                loading: true
            }
        case 'Sorting':
            return {
                ...state,
                filter: { sort: action.payload.sort, size: action.payload.size }
            }
        case 'Error':
            return {
                ...state,
                error: { error: action.payload, check: true },
                loading: false,
            }


        default:
            return state;
    }
}

export default ItemsReducer