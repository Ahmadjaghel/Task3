import React from "react";
import "./VideoView.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import ViewCard from "../ViewCard/ViewCard";
function VideoView() {
  return (
    <div className="view">
      <img className="backimg" src="/images/banner-03.jpg" />
      <div className="content">
        <div className="viewtitle">
          <SectionTitle title="VIDEO VIEW" />
          <p>
            Get Closer View
            <br /> & Different
            <br /> Feeling
          </p>
        </div>
        <div>
          <img className="videoFrame" src="/images/video-frame.jpg" />
        </div>
        <div className="viewcards">
          <ViewCard number="34" string="Buildings Finished Now" />
          <ViewCard number="12" string="Year Experience" />
          <ViewCard number="24" string="Awwards Won 2023" />
        </div>
      </div>
    </div>
  );
}

export default VideoView;
