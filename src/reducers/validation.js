import { LOADINGETHERIUMADRESS_REQUEST, LOADINGETHERIUMADRESS_SUCCESS } from '../actions/actionTypes'

const initialState = {
    value: false,
    // isLoading: false,
    Adress: [{"adress":"https://query"}],
    errorMsg: null,
}

export default (state = initialState, action) => {
    //{type:LOADINGGENRES_SUCCESS, payload:genres}
    switch (action.type) {

        case LOADINGETHERIUMADRESS_REQUEST:
            return { ...state, value: true, errorMsg: null }
        case LOADINGETHERIUMADRESS_SUCCESS:
            return { ...state, value: action.payload, isLoading: false }
        default:
            return state
    }
}
