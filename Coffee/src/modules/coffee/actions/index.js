import { COFFEE_ACTIONS } from "./consts";
import { coffeeService } from '../service'


export function getCoffee(dispatch) {
	dispatch({type:COFFEE_ACTIONS.GET_COFFEE})
    coffeeService.getCoffee().then(({data})=>{
		// console.log(data)
		dispatch({
			type:`${COFFEE_ACTIONS.GET_COFFEE}_SUCCESS`,
			payload: data,
		})
	}).catch((err)=>{
		dispatch({
			type:`${COFFEE_ACTIONS.GET_COFFEE}_ERROR`,
			error: err,
		})
	})
	

}






