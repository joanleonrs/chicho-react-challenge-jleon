import React from 'react'
import { Table, TableRow, TableContainer, Paper, TableHead, TableCell, TableBody } from '@mui/material'
import { getGifts } from '../utils'

const FirstChallenge = () => {
  const gifts = getGifts()
  // eslint-disable-next-line no-restricted-syntax
  console.log('FROM getGifts() ->', gifts)

  return (
    <div>
      <h1>Listado de Regalos [GIFTS])</h1>
      <TableContainer component={Paper}>
        <Table aria-label='simple table' sx={{ minWidth: 640 }}>
          <TableHead>
            <TableRow>
              <TableCell>Regalo</TableCell>
              <TableCell>Cantidad</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.entries(gifts).map(([ key, value ]) => (
              <TableRow key={1}>
                <TableCell>{key}</TableCell>
                <TableCell>{value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default FirstChallenge
