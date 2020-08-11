import { connect } from 'react-redux';

import WineDetail from 'src/components/WineDetail';
import { getProductBySlug } from 'src/selectors';

const mapStateToProps = (state, ownProps) => {
  const productDetail = getProductBySlug(state.wines.winesList, ownProps.slug);
  return {
    name: productDetail.name,
    picture: productDetail.picture,
    description: productDetail.description,
    cheeses: productDetail.cheeses,
    cheesesList: state.cheeses.cheesesList,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(WineDetail);
