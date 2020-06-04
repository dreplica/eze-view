import Axios from "axios"


export const appStarted = () => (dispatch) => async () => {
    dispatch({type:'Loading'})
    try {
        const result = await (await Axios.get('http://localhost/3000')).data
        

    } catch (error) {
        dispatch({type:"Error"})
    }
}