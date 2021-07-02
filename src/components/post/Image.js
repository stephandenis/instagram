import Proptypes from "prop-types";

const Image = ({ src, caption }) => {
  return <img src={src} alt={caption} />;
};

export default Image;

Image.propTypes = {
  src: Proptypes.string.isRequired,
  caption: Proptypes.string.isRequired,
};
