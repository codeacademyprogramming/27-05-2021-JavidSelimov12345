import {
	Box,
	Button,
	Dialog,
	DialogContent,
	DialogTitle,
	FormGroup,
	MenuItem,
	Select,
	TextField,
} from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCoffee } from '../actions';

function AddCoffeeForm({ open, handleClose }) {
	const [status, setStatus] = useState('Created');
	const [title, setTitle] = useState('Unname');
	const [id, setId] = useState(300);
	const [price, setPrice] = useState(0);
	const [count, setCount] = useState(0);
	const [note, setNote] = useState('Havent yet');

	

	const dispatch = useDispatch();

	const handleSave = React.useCallback(() => {
		const dispatchAddCoffee = addCoffee(dispatch);
		dispatchAddCoffee({ id, title, price, count, note, status });
	}, [dispatch, id, title, price, count, note, status]);

	const handleButton = () => {
		handleSave();

		handleClose();
	};

	const handleStatus = (event) => {
		setStatus(event.target.value);
	};
	const handId = (event) => {
		setId(event.target.value);
	};
	const handleName = (event) => {
		setTitle(event.target.value);
	};
	const handlePrice = (event) => {
		setPrice(event.target.value);
	};
	const handleCount = (event) => {
		setCount(event.target.value);
	};
	const handleNote = (event) => {
		setNote(event.target.value);
	};

	return (
		<Dialog open={open}>
			<DialogTitle>Coffee adding form</DialogTitle>
			<DialogContent>
				<FormGroup>
					<TextField
						autoFocus
						margin="dense"
						id="price"
						label="Id"
						type="number"
						fullWidth
						onChange={handId}
					/>
					<TextField
						autoFocus
						margin="dense"
						id="name"
						label="Coffee Name"
						type="text"
						fullWidth
						onChange={handleName}
					/>
					<TextField
						autoFocus
						margin="dense"
						id="price"
						label="Price"
						type="number"
						fullWidth
						onChange={handlePrice}
					/>
					<TextField
						autoFocus
						margin="dense"
						id="count"
						label="Count"
						type="Number"
						fullWidth
						onChange={handleCount}
					/>
					<TextField
						autoFocus
						margin="dense"
						id="note"
						label="Note"
						type="text"
						fullWidth
						onChange={handleNote}
					/>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={status}
						onChange={handleStatus}
					>
						<MenuItem value={'Done'}>Done</MenuItem>
						<MenuItem value={'Created'}>Created</MenuItem>
						<MenuItem value={'In Progress'}>In Pogress</MenuItem>
					</Select>
				</FormGroup>

				<br />
				<br />
				<Box display="flex" alignItems="center" justifyContent="center">
					<Button onClick={handleButton} variant="outlined">
						Order
					</Button>
				</Box>
			</DialogContent>
		</Dialog>
	);
}

export default AddCoffeeForm;
