import DeleteIcon from '@mui/icons-material/Delete'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TextField, FormControl, InputLabel, Select, MenuItem, Button, Table, TableContainer, Paper, TableHead, TableBody } from '@mui/material'
import { StyledTableCell, StyledTableRow } from '../../src/utils/mui'
import { updateUserAction } from '../store/actions/user'

const SecondChallenge = () => {
  const users = useSelector(state => state.user.users)
  const [ term, setTerm ] = React.useState('')
  const dispatch = useDispatch()

  const searchByFirstname = (value) => {
    setTerm(value)
  }

  const updateUser = list => dispatch(updateUserAction(list))

  const orderByAge = (value) => {
    let userList = [ ...users ]
    const listSorted = userList.sort((a, b) => {
      if(a.age < b.age) return value === 'asc' ? -1 : 1

      if(a.age > b.age) return value === 'asc' ? 1 : -1

      return 0
    })
    updateUser(listSorted)
  }

  const removeUser = (id) => {
    let userList = [ ...users ]
    const elementPosition = userList.findIndex(x => x.id === id)
    userList.splice(elementPosition, 1)
    updateUser(userList)
  }

  return (
    <div>
      <h1>Listado de Usuarios:</h1>
      <TextField
        id='outlined-required'
        label='Búsqueda por nombre:'
        onChange={(e) => searchByFirstname(e.target.value)}
        sx={{ minWidth: 300 }} />
      <FormControl sx={{ mb: 4, minWidth: 300, ml: 2 }}>
        <InputLabel id='order-age'>Ordenar por edad:</InputLabel>
        <Select
          label='Ordenar por edad:'
          labelId='order-age'
          onChange={(e) => orderByAge(e.target.value)}>
          <MenuItem value=''>Elija un valor:</MenuItem>
          <MenuItem value='asc'>De menor a mayor</MenuItem>
          <MenuItem value='desc'>De mayor a menor</MenuItem>
        </Select>
      </FormControl>
      <TableContainer component={Paper}>
        <Table aria-label='customized table' sx={{ minWidth: 640 }}>
          <TableHead>
            <StyledTableRow >
              <StyledTableCell>Id</StyledTableCell>
              <StyledTableCell>Avatar</StyledTableCell>
              <StyledTableCell>Nombre</StyledTableCell>
              <StyledTableCell>Apellido</StyledTableCell>
              <StyledTableCell>Edad</StyledTableCell>
              <StyledTableCell>Opciones</StyledTableCell>
            </StyledTableRow >
          </TableHead>
          <TableBody>
            {users
              .filter(x => x.firstName.toLowerCase().includes(term.toLowerCase()))
              .map((item, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell>{item.id}</StyledTableCell>
                  <StyledTableCell>
                    <img alt='avatar' src={item.avatar} />
                  </StyledTableCell>
                  <StyledTableCell>{item.firstName}</StyledTableCell>
                  <StyledTableCell>{item.lastName}</StyledTableCell>
                  <StyledTableCell>{item.age}</StyledTableCell>
                  <StyledTableCell>
                    <Button
                      onClick={() => removeUser(item.id)} startIcon={<DeleteIcon />}
                      variant='outlined'>
                      Eliminar
                    </Button>
                  </StyledTableCell>
                </StyledTableRow >
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default SecondChallenge
