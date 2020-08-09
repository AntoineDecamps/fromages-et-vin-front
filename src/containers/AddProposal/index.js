import { connect } from 'react-redux';

import AddProposal from 'src/components/AddProposal';
import { openModal, closeModal } from 'src/actions/modal';

const mapStateToProps = (state) => ({
  open: state.modal.open,
});

const mapDispatchToProps = (dispatch) => ({
  openModal: () => dispatch(openModal()),
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddProposal);
