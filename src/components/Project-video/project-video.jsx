import React from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
import Parser from "html-react-parser";

const ProjectVideo = ({ projectVideoDate }) => {
  console.clear();
  const [isOpen, setOpen] = React.useState(false);
  return (
    <section>
      <div className="container-fluid">
        <div
          className="video-wrapper section-padding bg-img parallaxie valign"
          style={{
            backgroundImage: `url(${projectVideoDate.work_image[0].image})`,
          }}
          data-overlay-dark="4"
        >
          <div className="full-width text-center">
            {typeof window !== "undefined" && (
              <ModalVideo
                channel="youtube"
                autoplay
                theme="dark"
                isOpen={isOpen}
                videoId={projectVideoDate.small_video}
                onClose={() => setOpen(false)}
              />
            )}
            <a
              className="vid"
              onClick={(e) => {
                e.preventDefault();
                setOpen(true);
              }}
            >
              <div className="vid-butn">
                <span className="icon">
                  <i className="fas fa-play"></i>
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectVideo;
