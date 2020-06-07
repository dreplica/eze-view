import {
    showfilter
} from './actions'


export const displayFilter = (payload) => dispatch => {
    dispatch(showfilter(payload))
}