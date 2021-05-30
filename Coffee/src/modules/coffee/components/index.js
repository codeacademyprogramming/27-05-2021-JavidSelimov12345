import { Box, Button, CircularProgress, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import * as React from 'react';
import { useState } from 'react';
import { ASYNC_STATUS } from '../../../redux/consts';
import CoffeeTable from './CoffeeTable';
import AddCoffeeForm from './AddCoffeeForm';

export function CoffeePage() {
	const coffeeBranch = useSelector((state) => state.coffee);

    const [open, setOpen] = useState(false)

    const handleFormOpen =()=>{
          setOpen(true)
    }
    const handleClose = () => {
        setOpen(false);
      };
	
	return (
		<div>
			<Box width="1024px" paddingTop={3} margin="0 auto">

                <Box display="flex" alignItems="center" justifyContent="center">	<Typography variant="h3">Coffee Orders List</Typography></Box>
			

                   {
                       coffeeBranch.status === ASYNC_STATUS.LOADING ?(
                           <Box height="20vh" display="flex" alignItems="center" justifyContent="center">
						<CircularProgress />
					</Box>
                       ):(
                           <>
                            <Button onClick={handleFormOpen} variant="contained">Add New Order</Button>
                            <br/>
                            <br/>
                            <CoffeeTable data={coffeeBranch.data}/>
                            <AddCoffeeForm open={open} handleClose={handleClose}/>
                           </>
                          
                       )
                   }
				
					
				
			</Box>
		</div>
	);
}
