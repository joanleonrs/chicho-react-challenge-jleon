import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TextField, FormControl, InputLabel, Select, MenuItem, Button, Table, TableRow, TableContainer, Paper, TableHead, TableCell, TableBody } from '@mui/material'

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
      <h1>Lista de Usuarios:</h1>
      <TextField
        id='outlined-required'
        label='Búsqueda por nombre'
        onChange={(e) => searchByFirstname(e.target.value)}
        sx={{ minWidth: 300 }} />
      <FormControl sx={{ mb: 4, minWidth: 300, ml: 2 }}>
        <InputLabel id='order-age'>Ordenar por edad:</InputLabel>
        <Select
          label='Ordenar por edad'
          labelId='order-age'
          onChange={(e) => orderByAge(e.target.value)}>
          <MenuItem value=''>Seleccione</MenuItem>
          <MenuItem value='asc'>De menor a mayor</MenuItem>
          <MenuItem value='desc'>De mayor a menor</MenuItem>
        </Select>
      </FormControl>
      <TableContainer component={Paper}>
        <Table aria-label='simple table' sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Avatar</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell>Apellido</TableCell>
              <TableCell>Edad</TableCell>
              <TableCell>Acción</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users
              .filter(x => x.firstName.toLowerCase().includes(term.toLowerCase()))
              .map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>
                    <img alt='avatar' src={item.avatar} />
                  </TableCell>
                  <TableCell>{item.firstName}</TableCell>
                  <TableCell>{item.lastName}</TableCell>
                  <TableCell>{item.age}</TableCell>
                  <TableCell>
                    <Button color='error' onClick={() => removeUser(item.id)} variant='outlined'>
                      Eliminar
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default SecondChallenge
