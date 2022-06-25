import { UPDATE_USER } from '../types/user'

export function updateUserAction(list) {
  return dispatch => {
    dispatch(updateUser(list))
  }
}

const updateUser = list => ({
  payload: list,
  type   : UPDATE_USER
})
