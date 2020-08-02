import { connect } from 'react-redux';

import Produits from 'src/components/BackOffice/Produits';
import { openModal, closeModal } from 'src/actions/modal';

const mapStateToProps = (state) => ({
  wines: state.wines.winesList,
  cheeses: state.cheeses.cheesesList,
  open: state.modal.open,
});

const mapDispatchToProps = (dispatch) => ({
  openModal: () => dispatch(openModal()),
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Produits);
