import React from "react";
import "../FalconHeavy/FalconHeavy.css";
const FalconHeavy = () => {
  return (
    <div className="inner-page">
      <video loop autoPlay>
        <source
          src="spacex.com/media/WebsiteFHFairings_Anim_Render_Desktop.webm"
          type="video"
        />
      </video>
    </div>
  );
};

export default FalconHeavy;
