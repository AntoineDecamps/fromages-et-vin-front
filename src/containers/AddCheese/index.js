import { connect } from 'react-redux';

import AddCheese from 'src/components/BackOffice/AddCheese';

const mapStateToProps = (state) => ({
  wines: state.wines.winesList,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AddCheese);
