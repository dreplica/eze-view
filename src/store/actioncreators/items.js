import Axios from "axios"
import mixData from "../../lib/mixData"
import {
    load, error, incomingResult,
    paginResult, sortFilter, pagingload,
    PAGING_START, PAGING_STOP, searchValue
} from './actions'


export const fetchData = (url = "", { sort = "", size = "" }) => async dispatch => {
    dispatch(load)
    try {
        const result = await Axios.get(`https://eze-test.herokuapp.com${url}&filter=${sort},${size}`)
        if (!sort) {
            return dispatch(incomingResult(mixData(result.data), url))
        }
        dispatch(incomingResult(result.data, url))
    } catch (err) {
        console.log(err)
        dispatch(error)
    }
}

export const sorting = (payload = { sort: "", size: "" }) => (dispatch) => {
    try {
        dispatch(sortFilter(payload))
    } catch (err) {
        dispatch(error)
    }
}

export const searchPhone = (url = "", { sort, size, search }, paging = false) => async (dispatch) => {

    const value = search.split(",").map((val) => val.trim())
    console.log("this is value", sort, search, size)
    try {
        !paging ? dispatch(load) : dispatch(pagingload(PAGING_START))
        const result = await Axios.post(`https://eze-test.herokuapp.com/${url}`, { search: value, filter: `${sort},${size}` })
        dispatch(searchValue(search))

        if (!sort) { 
            
            if (paging) {
                dispatch(paginResult(mixData(result.data), url))
                dispatch(pagingload(PAGING_STOP))
            }
            else dispatch(incomingResult(mixData(result.data), url))

        }
        if (!paging) return dispatch(incomingResult(result.data, url))

        dispatch(paginResult(result.data, url))
        dispatch(pagingload(PAGING_STOP))

    } catch (err) {
        dispatch(error)
    }
}


export const updateSpreadsheet = () => dispatch => {
    try {
        const url = `?page=1&limit=12`
        dispatch(load)
        Axios.get(`https://eze-test.herokuapp.com/update`)
            .then(async _ => {
                const result = await Axios.get(`https://eze-test.herokuapp.com/${url}`)
                dispatch(incomingResult(mixData(result.data), url))
            })
            .catch((err) => dispatch(error))

    } catch (err) {
        dispatch(error)
    }
}

export const paginate = (url, { sort = 0, size = "" }, search = 0) => async dispatch => {
    try {
        dispatch(pagingload(PAGING_START))
        const result = await Axios.get(`https://eze-test.herokuapp.com${url}&filter=${sort},${size}`)
        if (!sort) {
            dispatch(paginResult(mixData(result.data), url))
            dispatch(pagingload(PAGING_STOP))
            return
        }
        dispatch(paginResult(result.data, url))
        dispatch(pagingload(PAGING_STOP))

    } catch (err) {
        dispatch(error)
    }
}