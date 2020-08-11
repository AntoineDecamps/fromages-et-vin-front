import { connect } from 'react-redux';
import { handleSlider } from 'src/actions/slider';
import Association from 'src/components/Association';
import { getAssociationBySlug } from 'src/selectors';

const mapStateToProps = (state, ownProps) => {
  const associationDetail = getAssociationBySlug(state.proposals.proposalsList, ownProps.slug);
  return {
    open: state.toggler.open,
    slider: state.slider.open,
    associations: associationDetail,
  };
};

const mapDispatchToProps = (dispatch) => ({
  handleSlider: () => dispatch(handleSlider()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Association);
