import { Table, TableBody, TableCell, TableContainer, TableHead,Paper, TableRow } from '@material-ui/core'
import React from 'react'

function CoffeeTable({data}) {

    console.log('burakoffedir',data)
    return (
        <TableContainer component={Paper}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">TITLE</TableCell>
            <TableCell align="right">PRICE</TableCell>
            <TableCell align="right">COUNT</TableCell>
            <TableCell align="right">NOTE</TableCell>
            <TableCell align="right">STATUS</TableCell>
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
    )
}

export default CoffeeTable
