const initialState = {
    currentData: [],
    filter: { sort: "", size: "" },
    pagination: { previous: {}, forward: {}},
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
            return {
                ...state,
                currentData: action.payload.result,
                pagination:{previous:action.payload.previous,forward:action.payload.forward},
                loading: false,
                error: { error: "", check: false }
            }
        case 'Loading':
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