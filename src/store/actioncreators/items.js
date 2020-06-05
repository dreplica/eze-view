import Axios from "axios"
import mixData from "../../lib/mixData"


export const fetchData = (url = "", { sort, size }) => async (dispatch) => {
    dispatch({ type: 'Loading' })
    try {
        console.log("bread")
        const result = await Axios.get(`http://localhost:3000/${url}&sort=${sort}&size=${sort}`)
        dispatch({ type: 'Fetch_data', payload: mixData(result.data) })
    } catch (error) {
        console.log(error)
        dispatch({ type: "Error" })
    }
}

export const sorting = (payload = { sort: "", size: "" }) => (dispatch) => {
    dispatch({ type: 'Loading' })
    try {
        dispatch({ type: 'Sorting', payload })
    } catch (error) {
        dispatch({ type: "Error" })
    }
}

export const search = (search = "", { sort, size }) => async (dispatch) => {

    if (search === " ") {
        return;
    }

    dispatch({ type: 'Loading' })
    try {
        const result = await Axios.post(`http://localhost:3000/search`, { search, size, sort }).data
        //watch out, if user provides filter, no need to mix data
        dispatch({ type: 'Fetch_data', payload: mixData(result.data) })
    } catch (error) {
        dispatch({ type: "Error" })
    }
}