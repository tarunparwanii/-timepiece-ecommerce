import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import persistReducer from "redux-persist/es/persistReducer";
import storage from 'redux-persist/lib/storage';
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";
import notificationReducer from "./notificationMessage/notification.reducer";
import loadingReducer from "./loading/loading.reducer";

const persistConfig = {
    key : 'root',
    storage,
    whitelist:[]
}

const rootReducer = combineReducers({
    user : userReducer,
    cart : cartReducer,
    directory : directoryReducer,
    shop : shopReducer,
    notification : notificationReducer,
    loading : loadingReducer

});

export default persistReducer(persistConfig, rootReducer);