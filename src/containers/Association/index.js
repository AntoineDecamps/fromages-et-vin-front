import { connect } from 'react-redux';

import Association from 'src/components/ProductDetail/Association';

const mapStateToProps = (state) => ({
  open: state.toggler.open,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Association);
