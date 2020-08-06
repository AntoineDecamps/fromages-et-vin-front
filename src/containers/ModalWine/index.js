import { connect } from 'react-redux';

import ModalWine from 'src/components/BackOffice/ModalWine';
import { openModal, closeModal } from 'src/actions/modal';
import { openEdit, closeEdit } from 'src/actions/edit';
import { getProductBySlug } from 'src/selectors';

const mapStateToProps = (state, ownProps) => {
  const productDetail = getProductBySlug(state.wines.winesList, ownProps.slug);
  return {
    name: productDetail.name,
    picture: productDetail.picture,
    description: productDetail.description,
    appellation: productDetail.appellation,
    id: productDetail.id,
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalWine);
