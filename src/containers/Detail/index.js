import { connect } from 'react-redux';

import Detail from 'src/components/ProductDetail/Detail';
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
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Detail);