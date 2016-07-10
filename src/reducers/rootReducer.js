// import {combineReducers} from 'redux'
// actions
import {
    REQUEST_USER,
    RECEIVE_USER
} from '../actions/user'
import {
    REQUEST_ROOMS,
    RECEIVE_ROOMS
} from '../actions/rooms'
import {
    ROOM_SELECT,
    JOIN_TO_ROOM,
    LEAVE_ROOM,
    PATCH_ROOM
} from '../actions/room'
import {
    REQUEST_MESSAGES,
    RECEIVE_MESSAGES,
    LOAD_MORE,
    NEW_MESSAGE
} from '../actions/messages'
import {
    SEARCH_QUERY,
    REQUEST_SEARCH,
    RECEIVE_SEARCH
} from '../actions/search'
// reducers
import user from './user'
import rooms from './rooms'
import room from './room'
import messages from './messages'
import search from './search'

// todo: need combine reducers?
const rootReducer = (state, action) => {
    switch (action.type) {
        case REQUEST_USER:
        case RECEIVE_USER:
            return user(state, action)
        case RECEIVE_ROOMS:
        case REQUEST_ROOMS:
            return rooms(state, action)
        case ROOM_SELECT:
        case JOIN_TO_ROOM:
        case LEAVE_ROOM:
        case PATCH_ROOM:
            return room(state, action)
        case REQUEST_MESSAGES:
        case RECEIVE_MESSAGES:
        case LOAD_MORE:
        case NEW_MESSAGE:
            return messages(state, action)
        case SEARCH_QUERY:
        case REQUEST_SEARCH:
        case RECEIVE_SEARCH:
            return search(state, action)
        default:
            return state
    }
}

export default rootReducer