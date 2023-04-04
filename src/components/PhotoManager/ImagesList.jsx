import PropTypes from "prop-types";

const ImagesList = ({ files, onDeleteFile }) => {
  const imgs = files.map((file) => {
    const { id, src, name } = file;
    return <img className="img" key={id} src={src} alt={name} />;
  });

  return <div className="images-wrapper">{imgs}</div>;
};

ImagesList.propTypes = {
  files: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired
  ),
  onDeleteFile: PropTypes.func.isRequired,
};

export default ImagesList;
