import { combineReducers } from 'redux';
import COMMENTS from '../../data/comments'
import * as actionTypes from './actionTypes'

export const dishReducer=(dishState={isLoading:false, dishes:[]},action)=>{
    switch(action.type){
        case actionTypes.DISH_LOADING:
            return{
                ...dishState,
                isLoading:true,
                dishes:[]
            }
        case actionTypes.LOAD_DISHES:
            return{
                ...dishState,
                isLoading:false,
                dishes:action.payload
            }
        default:
            return dishState
    }
}

export const commentReducer=(commentState=COMMENTS,action)=>{
    switch(action.type){
        case actionTypes.ADD_COMMENT:
            let comment=action.payload
            comment.id=commentState.length
            comment.date=new Date().toDateString()
            return commentState.concat(comment)
          
        default:
            return commentState
    }
}

export const reducer=combineReducers({
    dishes:dishReducer,
    comments:commentReducer
})