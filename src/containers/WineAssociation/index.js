import { connect } from 'react-redux';
import { handleSlider } from 'src/actions/slider';
import WineAssociation from 'src/components/WineAssociation';

const mapStateToProps = (state) => ({
  open: state.toggler.open,
  slider: state.slider.open,
});

const mapDispatchToProps = (dispatch) => ({
  handleSlider: () => dispatch(handleSlider()),
});

export default connect(mapStateToProps, mapDispatchToProps)(WineAssociation);
