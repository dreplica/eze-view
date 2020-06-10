import Axios from "axios"
import mixData from "../../lib/mixData"
import {
    load, error, incomingResult, addCat,
} from './actions'


export const fetchData = ({ sort="", storage="", phone="iphone", sell="", page=1}) => async dispatch => {
    dispatch(load)
    dispatch(addCat)
    try {
        const result = await Axios.get(`http://localhost:3000/api?limit=9&page=${page}&size=${storage}&sort=${sort},&phone=${phone}&sell=${sell}`)

        dispatch(sorting({ sort:sort, storage:storage, phone:phone, sell:sell, page:page}))

        if (!sort) {
            return dispatch(incomingResult(mixData(result.data), url))
        }
        dispatch(incomingResult(result.data, url))
    } catch (err) {
        console.log(err)
        dispatch(error)
    }
}

export const updateSpreadsheet = () => dispatch => {
    try {
        const url = `?page=1&limit=12`
        dispatch(load)
        Axios.get(`http://localhost:3000/api`)
            .then(async _ => {
                const result = await Axios.get(`http://localhost:3000/api?limit=6&page=1`)
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