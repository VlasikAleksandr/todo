import { Authstate, AuthAction, AuthActionEnum } from './authReducerType';

const initialState:Authstate = {
    isAuth: false
}

export default function authReducer (state=initialState, action:AuthAction):Authstate {
    switch(action.type){
        case AuthActionEnum.SET_AUTH:
            return {...state, isAuth:action.payload}
        default:
            return state 
    }
}