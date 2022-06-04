
import { HttpClient } from '../httpClient';

class CoffeeService extends HttpClient {
	constructor() {
		super('https://javidselimov12345.github.io/app/');

		
	}
	getCoffee() {
		return this.get('dat.json');
	}

	addCoffee(data) {
		return this.post('https://jsonplaceholder.typicode.com/posts', data);
	}

	updateCoffee(data) {
		return this.post('https://jsonplaceholder.typicode.com/posts', data);
	}


}

export const coffeeService = new CoffeeService();
