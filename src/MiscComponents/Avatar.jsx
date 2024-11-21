import React from "react";
import "./Avatar.css";

const Avatar = ({ src, alt, size = "medium", shape = "circle" }) => {
  return (
    <div className={`avatar avatar-${size} avatar-${shape}`}>
      <img src={src} alt={alt} className="avatar-image" />
    </div>
  );
};

const AvatarExamples = () => (
  <div className="avatar-examples">
    <h3>Avatar Examples</h3>
    <Avatar
      src="https://via.placeholder.com/150"
      alt="Small Circle Avatar"
      size="small"
      shape="circle"
    />
    <Avatar
      src="https://via.placeholder.com/150"
      alt="Medium Square Avatar"
      size="medium"
      shape="square"
    />
    <Avatar
      src="https://via.placeholder.com/150"
      alt="Large Rounded Avatar"
      size="large"
      shape="rounded"
    />
  </div>
);

export default AvatarExamples;
