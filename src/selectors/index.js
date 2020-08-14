import slugify from 'slugify';

// eslint-disable-next-line import/prefer-default-export
export const getSlugFromName = (name = '') => {
  const modifiedTitle = name.replace(/[&]/g, '').replace(/[_]/g, '-');

  const slug = slugify(modifiedTitle, {
    lower: true,
    remove: /[*+~.()'"!:@&]/g,
  });

  return slug;
};

export const getProductBySlug = (productList, slug) => productList.find(
  (product) => getSlugFromName(product.name) === slug,
);

export const getAssociationBySlug = (associationList, slug) => associationList.filter(
  (association) => getSlugFromName(association.mainProduct) === slug,
);

export const redirectToCheeses = () => {
  document.location.href = '/admin/fromages';
};

export const redirectToWines = () => {
  document.location.href = '/admin/vins';
};

export const redirectToUsers = () => {
  document.location.href = '/admin/utilisateurs';
};

export const redirectToCheeseSlug = (slug) => {
  document.location.href = `/produit/fromage/${slug}`;
};

export const redirectToWineSlug = (slug) => {
  document.location.href = `/produit/vin/${slug}`;
};
