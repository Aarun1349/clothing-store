import React, { useContext } from "react";
// import SHOP_DATA from "../../shop-data.json";
import { ProductContext } from "../../components/context/product.context";
import ProductCard from "../../components/product-card/product-card.component";
import "./shop.component.styles.scss";
function Shop() {
  const { products } = useContext(ProductContext);
  return (
    <div className="product-container">
      {products.map((prod) => {
        return <ProductCard product={prod} />;
      })}
    </div>
  );
}

export default Shop;
