import axios from 'axios';
import { HttpClient } from '../httpClient';

class CoffeeService extends HttpClient {
	constructor() {
		super('https://javidselimov12345.github.io/app/');

		
	}
	getCoffee() {
		return this.get('dat.json');
	}

	// getStudentAttendenceById(id, dates) {
	// 	return dates.map(({ date, list }) => {
	// 		const studentAttendence = list.find((attendence) => attendence.studentId === id);
	// 		return {
	// 			date,
	// 			attended: studentAttendence ? studentAttendence.attended : false,
	// 		};
	// 	});
	// }

	// addAttendence(data) {
	// 	return this.post('https://jsonplaceholder.typicode.com/posts', data);
	// }

	// updateAttendence(data) {
	// 	return this.post('https://jsonplaceholder.typicode.com/posts', data);
	// }
}

export const coffeeService = new CoffeeService();
