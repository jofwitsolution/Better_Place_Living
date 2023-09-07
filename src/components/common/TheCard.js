import React from "react";

const TheCard = ({ title, text, imageClass }) => {
  return (
    <div className="the-card">
      <div className={`the-card__main ${imageClass}`}>
        <div className="the-card__main-border"></div>
        <div className="the-card__main-text">
          <div className="the-card__main-title">{title}</div>
          <div className="the-card__main-icon">
            <i className="bi bi-arrow-right-circle-fill"></i>
          </div>
        </div>
      </div>
      <div className="the-card__alt">
        <p className="the-card__alt-text">{text}</p>
      </div>
    </div>
  );
};

export default TheCard;
