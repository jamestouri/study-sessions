import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
})


const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
})


export const signup = user => {
  return APIUtil.signup(user)
    .then(user => dispatch(receiveCurrentUser(user)))
}

export const signout = () => {
  return APIUtil.logout()
    .then(() => dispatch(logoutCurrentUser()))
}

export const login = user => {
  return APIUtil.login(user)
    .then(user => dispatch(receiveCurrentUser(user)))
}
