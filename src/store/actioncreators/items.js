import Axios from "axios"
import arrangeData from "../../lib/arrangeData"
import mixData from "../../lib/mixData"


export const fetchData = (url = "") => async (dispatch) => {
    dispatch({ type: 'Loading' })
    try {
        console.log("bread")
        const result = await Axios.get(`http://localhost:3000/${url}`)
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

export const search = (url = "") => async (dispatch) => {

    if (url === " ") {
        return;
    }

    dispatch({ type: 'Loading' })
    try {
        const result = await (await Axios.get(url)).data
        const arrange = arrangeData(result)
        dispatch({ type: 'Fetch_data', payload: mixData(arrange) })
    } catch (error) {
        dispatch({ type: "Error" })
    }
}