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
					data:action.payload,
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



// import { ASYNC_STATUS } from '../../../redux/consts';
// import { ATTENDENCE_ACTIONS } from '../actions/consts';

// const initialState = {
// 	data: [],
// 	status: ASYNC_STATUS.IDLE,
// 	error: null,
// };

// export function attendenceReducer(state = initialState, action) {
// 	switch (action.type) {
// 		case ATTENDENCE_ACTIONS.GET_ATTENDENCE:
// 			return {
// 				...state,
// 				status: ASYNC_STATUS.LOADING,
// 				data: [],
// 				error: null,
// 			};

// 		case `${ATTENDENCE_ACTIONS.GET_ATTENDENCE}_SUCCESS`:
// 			return {
// 				...state,
// 				status: ASYNC_STATUS.SUCCESS,
// 				data: action.payload,
// 				error: null,
// 			};

// 		case `${ATTENDENCE_ACTIONS.GET_ATTENDENCE}_ERROR`:
// 			return {
// 				...state,
// 				status: ASYNC_STATUS.ERROR,
// 				data: [],
// 				error: action.error,
// 			};
// 		case `${ATTENDENCE_ACTIONS.ADD_ATTENDENCE}`:
// 			return {
// 				...state,
// 				status: ASYNC_STATUS.LOADING,
// 				error: null,
// 			};
// 		case `${ATTENDENCE_ACTIONS.ADD_ATTENDENCE}_SUCCESS`:
// 			return {
// 				...state,
// 				status: ASYNC_STATUS.SUCCESS,
// 				data: [...state.data, action.payload],
// 				error: null,
// 			};
// 		case `${ATTENDENCE_ACTIONS.ADD_ATTENDENCE}_ERROR`:
// 			return {
// 				...state,
// 				status: ASYNC_STATUS.ERROR,
// 				error: action.error,
// 			};
// 		case `${ATTENDENCE_ACTIONS.UPDATE_ATTENDENCE}`:
// 			return {
// 				...state,
// 				status: ASYNC_STATUS.LOADING,
// 				error: null,
// 			};
// 		case `${ATTENDENCE_ACTIONS.UPDATE_ATTENDENCE}_SUCCESS`:
// 			return {
// 				...state,
// 				status: ASYNC_STATUS.SUCCESS,
// 				data: state.data.map((attendence) => {
// 					if (attendence.date === action.payload.date) {
// 						return {
// 							...action.payload,
// 						};
// 					}
// 					return attendence;
// 				}),
// 				error: null,
// 			};
// 		case `${ATTENDENCE_ACTIONS.UPDATE_ATTENDENCE}_ERROR`:
// 			return {
// 				...state,
// 				status: ASYNC_STATUS.ERROR,
// 				error: action.error,
// 			};
// 		default:
// 			break;
// 	}

// 	return state;
// }
