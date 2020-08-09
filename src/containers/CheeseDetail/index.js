import { connect } from 'react-redux';

import CheeseDetail from 'src/components/CheeseDetail';
import { getProductBySlug } from 'src/selectors';

const mapStateToProps = (state, ownProps) => {
  // const wines = state.wines.winesList;
  // const cheeses = state.cheeses.cheesesList;
  // const products = [];
  // products.push(wines, cheeses);
  const productDetail = getProductBySlug(state.cheeses.cheesesList, ownProps.slug);
  return {
    name: productDetail.name,
    picture: productDetail.picture,
    description: productDetail.description,
    wines: productDetail.wines,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CheeseDetail);
