import { connect } from 'react-redux';

import ModalPage from 'src/components/BackOffice/ModalPage';
import { openModal, closeModal } from 'src/actions/modal';
import { getProductBySlug } from 'src/selectors';

const mapStateToProps = (state, ownProps) => {
  const productDetail = getProductBySlug(state.cheeses.cheesesList, ownProps.slug);
  console.log(ownProps.slug);
  return {
    name: productDetail.name,
    picture: productDetail.picture,
    description: productDetail.description,
    id: productDetail.id,
    open: state.modal.open,
  };
};

const mapDispatchToProps = (dispatch) => ({
  openModal: () => dispatch(openModal()),
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalPage);
