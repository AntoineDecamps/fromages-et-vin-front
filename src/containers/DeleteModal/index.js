import { connect } from 'react-redux';
import { openDelete, closeDelete } from 'src/actions/modal';

import DeleteModal from 'src/components/BackOffice/DeleteModal';

const mapStateToProps = (state) => ({
  open: state.modal.delete,
});

const mapDispatchToProps = (dispatch) => ({
  openDelete: () => dispatch(openDelete()),
  closeDelete: () => dispatch(closeDelete()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DeleteModal);
