import React from 'react'
import { Table, TableContainer, Paper, TableHead, TableBody } from '@mui/material'
import { getGifts } from '../utils'
import { StyledTableCell, StyledTableRow } from '../utils/mui'

const FirstChallenge = () => {
  const gifts = getGifts()

  return (
    <div>
      <h1>Listado de Regalos:</h1>
      <TableContainer component={Paper}>
        <Table aria-label='customized table' sx={{ minWidth: 320 }}>
          <TableHead>
            <StyledTableRow>
              <StyledTableCell>Regalo</StyledTableCell>
              <StyledTableCell>Cantidad</StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {Object.entries(gifts).map(([ key, value ]) => (
              <StyledTableRow key={1}>
                <StyledTableCell>{key}</StyledTableCell>
                <StyledTableCell>{value}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default FirstChallenge
