import { connect } from 'react-redux';

import AddWineProposal from 'src/components/AddWineProposal';
import { openModal, closeModal } from 'src/actions/modal';

const mapStateToProps = (state) => ({
  open: state.modal.open,
});

const mapDispatchToProps = (dispatch) => ({
  openModal: () => dispatch(openModal()),
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddWineProposal);
