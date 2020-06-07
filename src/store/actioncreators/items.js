import Axios from "axios"
import mixData from "../../lib/mixData"
import {
    load, error, incomingResult,
    paginResult, sortFilter, pagingload,
    PAGING_START, PAGING_STOP, searchValue
} from './actions'


export const fetchData = (url = "", {sort = "", size = ""}) => async dispatch => {
    dispatch(load)
    try {
        const result = await Axios.get(`http://localhost:3000${url}&filter=${sort},${size}`)
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

export const searchPhone = (url = "", { sort, size,search }) => async (dispatch) => {
    if ( search === " ") return;
    console.log("hello") 

    const value = search.split(",")
    console.log("this is value",sort,search,size)
    dispatch(load)
    try {
        const result = await Axios.post(`http://localhost:3000/${url}`, { search:value, filter:`${sort},${size}` })
        //watch out, if user provides filter, no need to mix data
        dispatch(searchValue(search))
         if (!sort) {
            return dispatch(incomingResult(mixData(result.data), url))
        }
        return dispatch(incomingResult(result.data, url))
    } catch (err) {
        dispatch(error)
    }
}


export const updateSpreadsheet = () => dispatch => {
    try {
        const url = `?page=1&limit=12`
        dispatch(load)
        Axios.get(`http://localhost:3000/update`)
            .then(async _ => {
                const result = await Axios.get(`http://localhost:3000/${url}`)
                dispatch(incomingResult(mixData(result.data), url))
            })
            .catch((err) => dispatch(error))

    } catch (err) {
        dispatch(error)
    }
}

export const paginate = (url, { sort=0, size="" }) => async dispatch => {
    try {
        dispatch(pagingload(PAGING_START))
        const result = await Axios.get(`http://localhost:3000${url}&filter=${sort},${size}`)
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