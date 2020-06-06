import { PAGING_STOP, PAGING_START, CATEGORY,MENU } from "../actioncreators/actions"

const initialState = {
    categoryMenu: 'flex',
    Menu: 'none',
    pageload:false
}

const EffectReducer = (state = initialState, action) => {
    switch (action.type) {
        case CATEGORY:
            return {
                ...state,
                categoryMenu:action.payload
            }
        case MENU:
            return {
                ...state,
                Menu:action.payload
            }
        case PAGING_START:
            return {
                ...state,
                pageload:true
            }
        case PAGING_STOP:
            return {
                ...state,
                pageload:false
            }
        default:
            return state;
    }
}

export default EffectReducer