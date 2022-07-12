import React, { useContext } from "react";
import { CategoryContext } from "../../context/category.context";
import "./categories-preview.styles.scss";
import CategoryPreview from "../../components/category-preview/category-preview.component";

function CategoriesPreview() {
  const { categories } = useContext(CategoryContext);

  return (
    <>
      {Object.keys(categories).map((title) => {
        const product = categories[title];

        return (
          <CategoryPreview key={product.id} title={title} product={product} />
        );
        
      })}
    </>
  );
}

export default CategoriesPreview;
