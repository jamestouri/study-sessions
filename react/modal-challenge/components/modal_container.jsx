import React from 'react';
import {connect} from 'react-redux';
import {openModal, closeModal} from '../actions/actions'
import Modal from './modal'


const mapStateToProps = (state) => {
  return {
    modal: state.modals.modal
  }
}
const mapDispatchToProps = dispatch => {
  return {
    open: modal => dispatch(openModal(modal)),
    close: () => dispatch(closeModal())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)
