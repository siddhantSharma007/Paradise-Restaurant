export const getAllFoodReducer=(state={foods:[]},action)=>{
    switch(action.type){
        case 'GET_FOOD_REQUEST':
            return{
                ...state,
                loading:true
            }
            case 'GET_FOOD_SUCCCESS':
                return{
                    foods:action.payload,
                    loading:false
                }  
                case 'GET_FOOD_FAIL':
            return{
                error:action.payload,
                loading:false
            }  
            default: return state 
    }
}