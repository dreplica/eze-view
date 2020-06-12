import Axios from "axios"

import mixData from "../../lib/functions/mixData"
import {
    load, error, incomingResult, addCat, sortFilter
} from './actions'


export const fetchData = ({ min = "",max="", size = "", phone = "iphone", condition = "", sell = "", page = 1 }) => async dispatch => {
    // alert("shorts fired")
    dispatch(load)
    dispatch(addCat)
    try {
        const result = await Axios.get(`https://eze-test.herokuapp.com/api?limit=6&page=${page}&min=${min}&max=${max}&phone=${phone}&sell=${sell}&size=${size}&condition=${condition}`)

        dispatch(sortFilter({ min,max, phone, sell, page, condition, size }))

        if (!min || !max) {
            return dispatch(incomingResult(mixData(result.data)))
        }
        dispatch(incomingResult(result.data))
    } catch (err) {
        console.log(err)
        dispatch(error)
    }
}

export const updateFilter = ({ min = "",max="" ,size = "", phone = "iphone", condition = "", sell = "", page = 1 }) => dispatch => {
    dispatch(sortFilter({ min,max, phone, condition, sell, page, size }))
}

export const updateSpreadsheet = () => dispatch => {
    try {
        const url = `?page=1&limit=12`
        dispatch(load)
        Axios.get(`https://eze-test.herokuapp.com/api`)
            .then(async _ => {
                const result = await Axios.get(`https://eze-test.herokuapp.com/api?limit=6&page=1`)

                dispatch(sortFilter({ min: "",max:"", phone: "iphone", condition: "", sell: "", page: 1, size: "" }))
                dispatch(incomingResult(mixData(result.data), url))
            })
            .catch((err) => dispatch(error))

    } catch (err) {
        dispatch(error)
    }
}
