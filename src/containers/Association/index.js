import { connect } from 'react-redux';
import { handleSlider } from 'src/actions/slider';
import Association from 'src/components/Association';

const mapStateToProps = (state) => ({
  open: state.toggler.open,
  slider: state.slider.open,
});

const mapDispatchToProps = (dispatch) => ({
  handleSlider: () => dispatch(handleSlider()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Association);
