import ImagesList from "./ImagesList";
import { useRef, useState } from "react";
import { nanoid } from "nanoid";

const PhotoManager = () => {
  const [files, setFileUrls] = useState([]);
  const fileInput = useRef();

  const openFileDialog = () => {
    fileInput.current.click();
  };

  const changeFiles = () => {
    const newFiles = fileInput.current.files;
    const urls = [];
    for (const file of newFiles) {
      urls.push({
        src: window.URL.createObjectURL(file),
        name: file.name,
        id: nanoid(),
      });
    }
    setFileUrls([...files, ...urls]);
  };

  const deleteFile = (fileId) => {
    const newFiles = files.filter((file) => file.id !== fileId);
    setFileUrls(newFiles);
  };

  return (
    <div className="wrapper">
      <div className="file-selection-area" onClick={openFileDialog}>
        <p>Click to select</p>
      </div>
      <input
        ref={fileInput}
        className="input-file"
        type="file"
        multiple
        accept="image/*"
        onChange={changeFiles}
      />

      <ImagesList files={files} onDeleteFile={deleteFile} />
    </div>
  );
};

export default PhotoManager;
