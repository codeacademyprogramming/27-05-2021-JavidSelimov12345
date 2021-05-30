import { COFFEE_ACTIONS } from '../actions/consts'
import { ASYNC_STATUS } from '../../../redux/consts'


const initialState = {

	data: [],
	status: ASYNC_STATUS.IDLE,
	error: null,
};

export function cofeeReducer(state = initialState, action) {

	switch (action.type) {

		case `${COFFEE_ACTIONS.GET_COFFEE}`:

			return {
				...state,
				status: ASYNC_STATUS.LOADING,
				data: [],
				error: null,
			}

		case `${COFFEE_ACTIONS.GET_COFFEE}_SUCCESS`:
			return {
				...state,
				status: ASYNC_STATUS.SUCCESS,
				data: action.payload,
				error: null,
			}
		case `${COFFEE_ACTIONS.GET_COFFEE}_ERROR`:

			return {
				...state,
				status: ASYNC_STATUS.ERROR,
				data: [],
				error: action.error,
			};

		case `${COFFEE_ACTIONS.ADD_COFFEE}`:
			return {
				...state,
				status: ASYNC_STATUS.LOADING,
				error: null,
			};
		case `${COFFEE_ACTIONS.ADD_COFFEE}_SUCCESS`:
			return {
				...state,
				status: ASYNC_STATUS.SUCCESS,
				data: [...state.data, action.payload],
				error: null,
			};
		case `${COFFEE_ACTIONS.ADD_COFFEE}_ERROR`:
			return {
				...state,
				status: ASYNC_STATUS.ERROR,
				error: action.error,
			};




		case `${COFFEE_ACTIONS.UPDATE_COFFEE}`:
			return {
				...state,
				status: ASYNC_STATUS.LOADING,
				error: null,
			};
		case `${COFFEE_ACTIONS.UPDATE_COFFEE}_SUCCESS`:
			return {
				...state,
				status: ASYNC_STATUS.SUCCESS,
				data: state.data.map((coffee) => {
					if (coffee.title === action.payload.title) {
						return {
							...action.payload,
						};
					}
					return coffee;
				}),
				error: null,
			};
		case `${COFFEE_ACTIONS.UPDATE_COFFEE}_ERROR`:
			return {
				...state,
				status: ASYNC_STATUS.ERROR,
				error: action.error,
			};

		default:
			break;
	}

	return state;
}



