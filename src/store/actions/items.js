import Axios from "axios"

import mixData from "../../lib/functions/mixData"
import {
    load, error, incomingResult, addCat, sortFilter
} from './actions'


export const fetchData = ({ sort = "", size = "", phone = "iphone", condition = "", sell = "", page = 1 }) => async dispatch => {
    // alert("shorts fired")
    dispatch(load)
    dispatch(addCat)
    try {
        const result = await Axios.get(`http://localhost:3000/api?limit=6&page=${page}&size=${size}&sort=${sort}&phone=${phone}&sell=${sell}&condition=${condition}`)

        dispatch(sortFilter({ sort, phone, sell, page, condition, size }))

        if (!sort) {
            return dispatch(incomingResult(mixData(result.data)))
        }
        dispatch(incomingResult(result.data))
    } catch (err) {
        console.log(err)
        dispatch(error)
    }
}

export const updateFilter = ({ sort = "", size = "", phone = "iphone", condition = "", sell = "", page = 1 }) => dispatch => {
    dispatch(sortFilter({ sort, phone, condition, sell, page, size }))
}

export const updateSpreadsheet = () => dispatch => {
    try {
        const url = `?page=1&limit=12`
        dispatch(load)
        Axios.get(`http://localhost:3000/api`)
            .then(async _ => {
                const result = await Axios.get(`http://localhost:3000/api?limit=6&page=1`)

                dispatch(sortFilter({ sort:"", phone:"iphone", condition:"", sell:"", page:1, size:"" }))
                dispatch(incomingResult(mixData(result.data), url))
            })
            .catch((err) => dispatch(error))

    } catch (err) {
        dispatch(error)
    }
}


// export const paginate = (url, { sort = 0, size = "" }, search = 0) => async dispatch => {
//     try {
//         dispatch(pagingload(PAGING_START))
//         const result = await Axios.get(`https://eze-test.herokuapp.com${url}&filter=${sort},${size}`)
//         dispatch(sorting({ sort: sort, size: size }))

//         if (!sort) {
//             dispatch(paginResult(mixData(result.data), url))
//             dispatch(pagingload(PAGING_STOP))
//             return
//         }
//         dispatch(paginResult(result.data, url))
//         dispatch(pagingload(PAGING_STOP))

//     } catch (err) {
//         dispatch(error)
//     }
// }