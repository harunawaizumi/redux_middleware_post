/**
 * Created by haruna on 9/25/17.
 */
import { FETCH_POSTS, FETCH_POST } from '../actions'
import _ from 'lodash'
import {DELETE_POST} from '../actions/index'

export default function(state = {}, action) {
    console.log('data', state)
    switch(action.type) {
        case FETCH_POSTS:
            return _.mapKeys(action.payload.data, 'id')
        case FETCH_POST:
            return { ...state, [action.payload.data.id]: action.payload.data }
        case DELETE_POST:
            return _.omit(state, action.payload)
        default:
            return state;
    }
}

// _.mapKeys( NAME_OF_JSON, 'NAME_OF_KEY')
// 'NAME_OF_KEY' : PROPERTY
// DATA[ID] show the specific data you want to get

// _.omit ( STATE,  NAME_OF_PAYLOAD )

