import { connect } from 'react-redux';

import WineDetail from 'src/components/WineDetail';
import { getProductBySlug } from 'src/selectors';

const mapStateToProps = (state, ownProps) => {
  const productDetail = getProductBySlug(state.wines.winesList, ownProps.slug);
  let toSend;
  if (typeof (productDetail.cheeses) === 'undefined' || productDetail.origin === null) {
    toSend = {
      name: productDetail.name,
      picture: productDetail.picture,
      description: productDetail.description,
      cheeses: [{
        name: 'Nous ne proposons pas encore de mariage pour ce produit',
        picture: 'test',
        description: 'N\'hésitez pas à en proposer un !',
      }],
      origin: '',
      type: productDetail.type,
      cheesesList: state.cheeses.cheesesList,
    };
  } else {
    toSend = {
      name: productDetail.name,
      picture: productDetail.picture,
      description: productDetail.description,
      cheeses: productDetail.cheeses,
      origin: productDetail.origin.name,
      cheesesList: state.cheeses.cheesesList,
      type: productDetail.type,
    };
  }
  return toSend;
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(WineDetail);
