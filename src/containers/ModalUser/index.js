import { connect } from 'react-redux';

import ModalUser from 'src/components/BackOffice/ModalUser';
import { openModal, closeModal } from 'src/actions/modal';
import { openEdit, closeEdit } from 'src/actions/edit';
import { getProductBySlug } from 'src/selectors';

const mapStateToProps = (state, ownProps) => {
  const userDetail = getProductBySlug(state.user.usersList, ownProps.slug);
  return {
    name: userDetail.name,
    role: userDetail.roles,
    email: userDetail.email,
    password: userDetail.password,
    id: userDetail.id,
    open: state.modal.open,
    edit: state.edit.open,
  };
};

const mapDispatchToProps = (dispatch) => ({
  openModal: () => dispatch(openModal()),
  closeModal: () => dispatch(closeModal()),
  openEdit: () => dispatch(openEdit()),
  closeEdit: () => dispatch(closeEdit()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);
