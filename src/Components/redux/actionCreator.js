import * as actionTypes from './actionTypes'
import DISHES from '../../data/dishes'

export const addComment=(dishId,author,rating,comment)=>{
    return{
        type:actionTypes.ADD_COMMENT,
        payload:{
            dishId:dishId,
            author:author,
            rating:rating,
            comment:comment
        }
    }
}

export const dishLoading=()=>{
    return{
        type:actionTypes.DISH_LOADING
    }
}
export const loadDishes=(dishes)=>{
    return{
        type:actionTypes.LOAD_DISHES,
        payload:dishes
    }
}

export const fetchDishes=()=>{
    return (dispatch)=>{
        dispatch(dishLoading())

        setTimeout(()=>{
            dispatch(loadDishes(DISHES))
        },2000)
        
    }
}