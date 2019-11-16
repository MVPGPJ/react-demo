import { Map, List, fromJS } from 'immutable'

import { Planet_USER_Msg } from './actionType'

const defaultState = Map({
    userMsg: List([])
})

export const reducer = (state=defaultState, action) => {
    switch (action.type){
        case Planet_USER_Msg:
            return state.set('userMsg', fromJS(action.data))
        default: 
            return state
    }
}

