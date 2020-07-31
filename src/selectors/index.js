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
