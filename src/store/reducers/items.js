import { LOADING, ERROR, FETCH, PAGING, SORTING,SEARCH } from "../actioncreators/actions"

const initialState = {
    currentData: [],
    filter: { sort: "", size: "" },
    currentUrl: ``,
    search:'',
    pagination: { previous:  { page:"", limit:""} , forward: {page:"",limit:""} },
    loading: false,
    error: { error: "", check: false }
}

const initialAction = {
    type: "",
    payload: ""
}

const ItemsReducer = (state = initialState, action = initialAction) => {
    switch (action.type) {
        case FETCH:
            console.log("url follor",action.url)
            return {
                ...state,
                currentData: action.payload.result,
                pagination: { previous: action.payload.previous, forward: action.payload.forward },
                loading: false,
                currentUrl: action.url,
                error: { error: "", check: false }
            }

        case PAGING:
            const result = state.currentData
            
            return {
                ...state,
                currentData: [...result, ...action.payload.result],
                pagination: { previous: action.payload.previous, forward: action.payload.forward },
                currentUrl: action.url,
                loading:false,
                error: { error: "", check: false }
            }

        case LOADING:
            return {
                ...state,
                loading: true
            }
        case SEARCH:
            return {
                ...state,
                search: action.payload
            }
        
        case SORTING:
            return {
                ...state,
                filter: { sort: action.payload.sort, size: action.payload.size }
            }
        case ERROR:
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