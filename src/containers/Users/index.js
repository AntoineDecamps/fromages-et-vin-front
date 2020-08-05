import { connect } from 'react-redux';

import Users from 'src/components/BackOffice/Users';

const mapStateToProps = (state) => ({
  users: state.user.usersList,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
