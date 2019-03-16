import React, { Component } from "react";
import PropTypes from "prop-types";
import "./ImageResults.css";

class ImageResults extends Component {
  render() {
    let imageListContent;
    const { images } = this.props;

    if (images) {
      imageListContent = (
        <div className="images">
          {images.map(img => (
            <div title={img.tags} key={img.id} className="images--card">
              <a href={img.largeImageURL} target="_blank">
                <img src={img.largeImageURL} alt="photos" />
              </a>
              <span>
                Tags: {img.tags}
                <br />
                Photo by <strong>{img.user}</strong>
              </span>
            </div>
          ))}
        </div>
      );
    } else {
      imageListContent = null;
    }
    return <div>{imageListContent}</div>;
  }
}

ImageResults.propTypes = {
  images: PropTypes.array.isRequired
};

export default ImageResults;
