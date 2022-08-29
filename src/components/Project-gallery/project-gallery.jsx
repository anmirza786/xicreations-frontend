/* eslint-disable @next/next/no-img-element */
import React from "react";

const ProjectGallery = ({images}) => {
  return (
    <section className="projdtal">
      <div className="popup-img">
        <div className="row">
          {images.map((image) => (
            <div className="col-md-3 popimg" key={image.id}>
              <img alt="" src={image.image} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
