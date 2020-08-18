import { connect } from 'react-redux';
import { openDelete, closeDelete } from 'src/actions/modal';
import { getCheeses } from 'src/actions/cheese';
import { getWines } from 'src/actions/wine';
import { getUsers } from 'src/actions/user';

import DeleteModal from 'src/components/BackOffice/DeleteModal';

const mapStateToProps = (state) => ({
  open: state.modal.delete,
});

const mapDispatchToProps = (dispatch) => ({
  openDelete: () => dispatch(openDelete()),
  closeDelete: () => dispatch(closeDelete()),
  getCheeses: () => dispatch(getCheeses()),
  getWines: () => dispatch(getWines()),
  getUsers: () => dispatch(getUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DeleteModal);
