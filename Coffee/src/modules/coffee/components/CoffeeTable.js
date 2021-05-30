import { Table, TableBody, TableCell, TableContainer, TableHead, Paper, TableRow } from '@material-ui/core';
import React, { useState } from 'react';


function CoffeeTable({ data }) {
	const headers = [
		{ id: 'id', label: 'id', sortable: false },
		{ id: 'title', label: 'title', sortable: false },
		{ id: 'price', label: 'price', sortable: false },

		{ id: 'count', label: 'count', sortable: false },
		{ id: 'note', label: 'note', sortable: false },

		{ id: 'status', label: 'status', sortable: true },
	];

	const [sortField, setSortField] = useState();

	const [sortOrder, setSortOrder] = useState('asc');

	if (sortField) {
		data.sort((a, b) => {
			const isReversed = sortOrder === 'asc' ? 1 : -1;
			const stringCompareResult = a[sortField].localeCompare(b[sortField]);
			return stringCompareResult * isReversed;
		});
	}

	const handleDataSort = (head) => {
		if (head.sortable) {
			setSortField(head.id);
			setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
			console.log('sortable');
		}
	};

	
	return (
		<TableContainer component={Paper}>
			<Table aria-label="simple table">
				<TableHead>
					<TableRow>
						{headers.map((header) => (
							<TableCell
								style={{ cursor: header.sortable ? 'pointer' : 'default' }}
								className={`${header.sortable && 'bg-info'}`}
								onClick={() => handleDataSort(header)}
								key={header.id}
								align="right"
							>
								{header.label}
							</TableCell>
						))}
					</TableRow>
				</TableHead>
				<TableBody>
					{data.map((coffee) => (
						<TableRow key={coffee.id}>
							<TableCell component="th" scope="row">
								{coffee.id}
							</TableCell>
							<TableCell align="right">{coffee.title}</TableCell>
							<TableCell align="right">{coffee.price}$</TableCell>
							<TableCell align="right">{coffee.count}</TableCell>
							<TableCell align="right">{coffee.note}</TableCell>
							<TableCell align="right">{coffee.status}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}

export default CoffeeTable;
