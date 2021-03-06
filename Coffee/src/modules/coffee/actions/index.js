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


export function addCoffee(dispatch) {
	return function (data) {
		dispatch({ type: COFFEE_ACTIONS.ADD_COFFEE });

		coffeeService
			.addCoffee(data)
			.then((resp) => {
				// console.log(resp);
				dispatch({
					type: `${COFFEE_ACTIONS.ADD_COFFEE}_SUCCESS`,

					payload: data,
				});
			})
			.catch((err) =>
				dispatch({
					type: `${COFFEE_ACTIONS.ADD_COFFEE}_ERROR`,

					error: err,
				})
			);
	};
}


export function updateCoffee(dispatch) {
	return function (data) {
		dispatch({ type: COFFEE_ACTIONS.UPDATE_COFFEE });

		coffeeService
			.addCoffee(data)
			.then((resp) => {
				console.log(resp);
				dispatch({
					type: `${COFFEE_ACTIONS.UPDATE_UPDATE_COFFEE}_SUCCESS`,

					payload: data,
				});
			})
			.catch((err) =>
				dispatch({
					type: `${COFFEE_ACTIONS.UPDATE_UPDATE_COFFEE}_ERROR`,

					error: err,
				})
			);
	};
}






