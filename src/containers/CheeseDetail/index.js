import { connect } from 'react-redux';

import CheeseDetail from 'src/components/CheeseDetail';
import { getProductBySlug } from 'src/selectors';

const mapStateToProps = (state, ownProps) => {
  const productDetail = getProductBySlug(state.cheeses.cheesesList, ownProps.slug);
  let toSend;
  if (typeof (productDetail.wines) === 'undefined' || productDetail.origin === null)
  {
    toSend = {
      name: productDetail.name,
      picture: productDetail.picture,
      description: productDetail.description,
      milk: productDetail.milk,
      origin: '',
      wines: [{
        name: 'Nous ne proposons pas encore de mariage pour ce produit',
        picture: 'test',
        description: 'N\'hésitez pas à en proposer un !',
      }],
      winesList: state.wines.winesList,
    };
  } else {
    toSend = {
      name: productDetail.name,
      picture: productDetail.picture,
      description: productDetail.description,
      milk: productDetail.milk,
      origin: productDetail.origin.name,
      wines: productDetail.wines,
      winesList: state.wines.winesList,
    };
  }
  return toSend;
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CheeseDetail);
