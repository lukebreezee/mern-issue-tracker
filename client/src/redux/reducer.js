import { persistReducer } from 'redux-persist';
import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';

//Initial state for redux store
const initialState = {

    userInfo: {
        username: null,
        teamUsername: null
    },
  
    teamInfo: {}
  
};

const persistConfig = {
    key: 'root',
    storage
};

const rootReducer = (state = initialState, action) => {

    const tmp = Object.assign({}, state);

    switch(action.type) {

        case 'USER LOGIN':

            tmp.userInfo = action.userObj;
            break;

        case 'USER LOGOUT':

            tmp.userInfo = { username: null, teamUsername: null };
            tmp.teamInfo = {};
            break;

        case 'TEAM LOGIN':

            tmp.teamInfo.username = action.username;
            break;

        default:
            
            return state;

    }

    return tmp;
};

const reducer = combineReducers({
    root: rootReducer
});

const persistedReducer = persistReducer(persistConfig, reducer);

export { persistedReducer };