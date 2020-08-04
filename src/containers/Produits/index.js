import { connect } from 'react-redux';

import Produits from 'src/components/BackOffice/Produits';

const mapStateToProps = (state) => ({
  wines: state.wines.winesList,
  cheeses: state.cheeses.cheesesList,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Produits);
