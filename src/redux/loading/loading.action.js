import loadingActionTypes from './loading.types'
export const setLoadingState = (state)=>{
    return {
        type : loadingActionTypes.SET_LOADING_STATE,
        payload : state,
    }
}