// import React, { useContext } from "react";
// import SHOP_DATA from "../../shop-data.json";
// import { CategoryContext } from "../../context/category.context";
// import ProductCard from "../../components/product-card/product-card.component";
// import CategoryPreview from "../../components/category-preview/category-preview.component";
// const { categories } = useContext(CategoryContext);

import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import "./shop.component.styles.scss";

function Shop() {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />}></Route>
      <Route path=":category" element={<Category />}></Route>
    </Routes>

  
  );
}

export default Shop;


// <Fragment key={title}>
//   <h2>{title.toUpperCase()}</h2>
//   <div className="product-container">
//     {categories[title].map((prod) => {
//       return <ProductCard key={prod.id} product={prod} />;
//     })}
//   </div>
// </Fragment>


// {
//   /* <div className="product-container">
//   {/* {categoryMap.map((prod) => {
//     return <ProductCard product={prod} />;
//   })} */
// }
// {
//   /* </div> */
// }


  // <div className="shop-container">
    //   {Object.keys(categories).map((title) => {
    //     const product = categories[title];

    //     return <CategoryPreview key={product.id} title={title} product={product} />;
    //   })}
    // </div>
    // <>
    //   {{Object.keys(categoryMap).map((title) => {
    //     <Fragment key ={title}>
    //       <h2>{title}</h2>
    //       <div className="product-container">
    //         {console.log(categoryMap[title])}
    //         {categoryMap[title].map((prod) => {
    //           <ProductCard key={prod.id} product={prod} />;
    //         })}
    //       </div>
    //     </Fragment>;
    //   })}}
    // </>