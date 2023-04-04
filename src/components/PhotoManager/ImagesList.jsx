import PropTypes from "prop-types";
import ClearIcon from "@mui/icons-material/Clear";

const ImagesList = ({ files, onDeleteFile }) => {
  const selectImage = (e, fileId) => {
    onDeleteFile(fileId);
  };

  const imgs = files.map((file) => {
    const { id, src, name } = file;
    return (
      <div className="image-wrapper" key={id}>
        <img className="img" src={src} alt={name} />
        <button
          className="delete-btn"
          aria-label="delete image"
          onClick={(e) => selectImage(e, id)}
        >
          <ClearIcon />
        </button>
      </div>
    );
  });

  const imagesWrapper = imgs.length ? (
    <div className="images-wrapper">{imgs}</div>
  ) : null;

  return <>{imagesWrapper}</>;
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
