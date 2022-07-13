import React from 'react'
// import './directory-item.styles.jsx'
import {DirectoryBody,BackgroundImage,DirectoryContainer} from  './directory-item.styles.jsx'
function DirectoryItem({category}) {
    const {title,imageUrl} = category
  return (
    <DirectoryContainer key={imageUrl} >
              <BackgroundImage style={{backgroundImage:`url(${imageUrl})`}}/>
              <DirectoryBody>
                <h2>{title}</h2>
                <p>Shop Now</p>
              </DirectoryBody>
            </DirectoryContainer>
  )
}

export default DirectoryItem;