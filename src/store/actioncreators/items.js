import Axios from "axios"
import mixData from "../../lib/mixData"

export const load = () => dispatch => dispatch({ type: "Loading" })

export const error = () => dispatch => dispatch({ type: "Error" })

export const result = (payload) => dispatch => dispatch({ type: 'Fetch_data', payload })

export const fetchData = (url = "", { sort, size }) => async (dispatch) => {
    load()
    try {
        console.log("bread")
        const result = await Axios.get(`http://localhost:3000/${url}?sort=${sort}&size=${sort}`)
        result(mixData(result.data))
    } catch (error) {
        console.log(error)
        error()
    }
}

export const sorting = (payload = { sort: "", size: "" }) => (dispatch) => {
    load()
    try {
        dispatch({ type: 'Sorting', payload })
    } catch (error) {
        error()
    }
}

export const search = (search = "", { sort, size }) => async (dispatch) => {

    if (search === " ") return;

    load()
    try {
        const result = await Axios.post(`http://localhost:3000/search`, { search, size, sort }).data
        //watch out, if user provides filter, no need to mix data
        result(mixData(result.data))
    } catch (error) {
        error()
    }
}