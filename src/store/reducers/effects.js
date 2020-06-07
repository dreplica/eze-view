import { PAGING_STOP, PAGING_START,MENU, TOGGLE_FILTER } from "../actioncreators/actions"

const initialState = {
    categoryMenu: 'none',
    Menu: 'none',
    pageload:false
}

const EffectReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FILTER:
            const show = action.payload === 'open'?"flex":"none"
            return {
                ...state,
                categoryMenu:show
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