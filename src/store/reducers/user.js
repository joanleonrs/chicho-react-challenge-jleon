import { UPDATE_USER } from '../types/user'
import { USERS } from '../../utils'

const initialState = {
  users: USERS
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_USER:
      return {
        users: action.payload
      }
    default:
      return state
  }
}
