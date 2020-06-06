import Axios from "axios"
import mixData from "../../lib/mixData"

export const load = { type: "Loading" }

export const error ={ type: "Error" }

export const incomingResult = (payload) =>({ type: 'Fetch_data', payload })


export const fetchData =   (url = "",sort="-1", size="" ) =>async  dispatch =>{
    dispatch(load)
    try {
        const result = await Axios.get(`http://localhost:3000/${url}`)
        dispatch(incomingResult(result.data))
    } catch (err) {
        console.log(err)
        dispatch(error)
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