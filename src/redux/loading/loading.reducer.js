import loadingActionTypes from "./loading.types"


const loadingReducer = (state=false, action)=>{

    switch(action.type) {
        case loadingActionTypes.SET_LOADING_STATE : 
        return action.payload;
        default : return state;
    }
}

export default loadingReducer