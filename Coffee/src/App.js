import * as React from 'react';

import {getCoffee} from './modules/coffee/actions'

import { useDispatch } from 'react-redux';
import { CoffeePage } from './modules/coffee/components';


const App = () => {

	
	const dispatch = useDispatch();
	React.useEffect(() => {
		getCoffee(dispatch);
		
	}, [dispatch]);
	 return <CoffeePage />;
};

export default App;
