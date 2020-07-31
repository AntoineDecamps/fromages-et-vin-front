import { useParams } from 'react-router-dom';

const getSlugFromNav = () => {
  const { slug } = useParams();
  return slug;
};

export default getSlugFromNav;
