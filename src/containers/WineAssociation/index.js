import { connect } from 'react-redux';

import WineAssociation from 'src/components/WineAssociation';

const mapStateToProps = (state) => ({
  open: state.toggler.open,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(WineAssociation);
