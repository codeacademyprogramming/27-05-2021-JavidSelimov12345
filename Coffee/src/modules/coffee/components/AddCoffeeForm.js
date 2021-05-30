import { Box, Button, Dialog, DialogContent, DialogTitle, FormGroup, MenuItem, Select, TextField } from '@material-ui/core'
import React, { useState } from 'react'

function AddCoffeeForm({ open , handleClose }) {

   

    const [status, setStatus] = useState('Done');
    const [name, setName] = useState('');
    const [price, setPrice] = useState(null);
    const [count,setCount] = useState(null)
    const [note,setNote] = useState('')

    const [coffee,setCoffee]= useState({})

    const handleCoffee =()=>{
         setCoffee({
             status,
             name,
             price,
             count,
             note
         })
    }

    const handleButton =()=>{
        handleCoffee()
        handleClose()
    }
    
    const handleStatus = (event) => {
        setStatus(event.target.value);
    };
    const handleName = (event) => {
        setName(event.target.value);
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
   
   
   
    // console.log(name)
    // console.log(price)
    // console.log(count)
    // console.log(note)
    // console.log(status)
    console.log(coffee)

    return (
        <Dialog open={open}>
            <DialogTitle>
                Coffee adding form
           </DialogTitle>
            <DialogContent>
                <FormGroup>
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
                    <Button onClick={handleButton} variant='outlined'>Order</Button>
                </Box>



            </DialogContent>
        </Dialog>
    )
}

export default AddCoffeeForm
