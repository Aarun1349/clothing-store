import React from "react";
import { useNavigate } from "react-router-dom";
import {
  DirectoryBody,
  BackgroundImage,
  DirectoryContainer,
} from "./directory-item.styles.jsx";
function DirectoryItem({ category }) {
  const { title, imageUrl, route } = category;
  const navigate = useNavigate();
  const onNavigate = () => {
    navigate(route);
  };

  return (
    <DirectoryContainer onClick={onNavigate} >
      <BackgroundImage style={{ backgroundImage: `url(${imageUrl})` }} />
      <DirectoryBody>
        <h2>{title} </h2>
        <p>Shop Now</p>
      </DirectoryBody>
    </DirectoryContainer>
  );
}

export default DirectoryItem;
