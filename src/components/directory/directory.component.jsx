import React from "react";
import DirectoryItem from "../directory-item-component/directory-item.component";
// import "./directory.styles.scss";
import {DirectoryContainer} from './directory.styles'
function Directory({ categories }) {
  return (
    <DirectoryContainer>
      {categories.map((category) => {
        return <DirectoryItem id={category.id} category={category} />;
      })}
    </DirectoryContainer>
  );
}

export default Directory;
