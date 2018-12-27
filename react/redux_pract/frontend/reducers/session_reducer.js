import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER
} from '../actions/session_actions';

const nullUser = Object.freeze({
  id: null
})


const sessionReducer = (state, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {id: action.currentUser.id};
      break;
    case LOGOUT_CURRENT_USER:
      return nullUser;
      break;
    default:

  }
}


export default sessionReducer;
