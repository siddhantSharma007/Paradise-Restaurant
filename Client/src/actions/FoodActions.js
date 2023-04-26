import axios from 'axios'

export const getAllFood=()=>async dispatch=>{
   dispatch({type:'GET_FOOD_REQUEST'})
   try {
      const res=await axios.get('/api/foods/getAllFood')
      console.log(res);
      dispatch({type:'GET_FOOD_SUCCCESS',payload:res.data})
   }catch(error) {
    dispatch({type:'GET_FOOD_FAIL',payload:error})
   }
};