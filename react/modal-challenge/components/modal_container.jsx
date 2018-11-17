import React from 'react';
import {connect} from 'react-redux';
import {openModal, closeModal} from '../actions/actions'
import Modal from './modal'

const mapDispatchToProps = dispatch => {
  return {
    open: modal => dispatch(openModal),
    close: () => dispatch(closeModal)
  }
}

export default connect(null, mapDispatchToProps)(Modal)
