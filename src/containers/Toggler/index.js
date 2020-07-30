import { connect } from 'react-redux';

import Toggler from 'src/components/ProductDetail/Association/Toggler';
import { handleToggle } from 'src/actions/toggler';

const mapStateToProps = (state) => ({
  open: state.toggler.open,
});

// eslint-disable-next-line arrow-body-style
const mapDispatchToProps = (dispatch) => {
  return {
    handleToggle: () => dispatch(handleToggle()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Toggler);
