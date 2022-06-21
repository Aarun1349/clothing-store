import React from 'react'
import CatgeoryItem from '../category-item-component/category-item.component';
import './directory.styles.scss'
function Directory({categories}) {
  return (
    <div className="directory-container">
        {categories.map((category) => {
          return (
            <CatgeoryItem id={category.id} catgory={category}/>
          );
        })}
      </div>
  )
}

export default Directory;



