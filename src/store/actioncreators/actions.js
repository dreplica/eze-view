export const LOADING = 'LOADING'
export const ERROR = 'ERROR'
export const SORTING = 'SORTING'
export const MENU = 'MENU'
export const CATEGORY = 'CATEGORY'
export const SEARCH = 'SEARCHING'
export const FETCH = 'FETCH_DATA'
export const PAGING = 'PAGING_RESULT'
export const PAGING_START = 'PAGING_START'
export const PAGING_STOP = 'PAGING_STOP'
export const TOGGLE_FILTER = 'TOGGLE_FILTER'



export const load = { type: LOADING }

export const error = { type: ERROR }

export const showfilter =(payload)=> ({type:TOGGLE_FILTER,payload})

export const incomingResult = (payload, url) => ({ type: FETCH, payload, url })

export const paginResult = (payload, url) => ({ type: PAGING, payload, url })

export const pagingload = (type) => ({ type })

export const searchValue = (payload) => ({ type:SEARCH ,payload})

export const sortFilter = (payload)=>({type:SORTING,payload})