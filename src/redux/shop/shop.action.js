import ShopActionTypes from "./shop.type";
import { getListOfCollections } from "../../firebase/firebase.utils"; 
import { setLoadingState } from "../loading/loading.action";
import { setNotification } from "../notificationMessage/notification.action";

export const fetchCollectionsFromDatabase = ()=>{
    return async(dispatch,getState)=>{
        dispatch(setLoadingState(true));
        try {
            const collections = await getListOfCollections();
            dispatch({
                type : ShopActionTypes.UPDATE_COLLECTIONS,
                payload : collections
            })
            dispatch(setLoadingState(false));
        }
        catch(err) {
            dispatch(setNotification(err.message));
            dispatch(setLoadingState(false));
        }
    }
    
}  