import Redux from 'redux'
const defaultState = {
    myFocusList: [],
    focusMeList: []
}
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'getMyFocus':
            return {
                myFocusList: action.payload,
                focusMeList: state.focusMeList
            }
        case 'getFocusMe':
            return {
                focusMeList: action.payload,
                myFocusList: state.myFocusList
            }
        case 'getAll':
            return {
                myFocusList: action.payload.myFocusList,
                focusMeList: action.payload.focusMeList
            }
        default:
            return state
    }
}

export default reducer