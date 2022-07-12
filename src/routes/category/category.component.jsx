import ProductCard from "../../components/product-card/product-card.component";
import "./category.styles.scss";
import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { CategoryContext } from "../../context/category.context";

const Category = () => {
  const { category } = useParams();
  const { categories } = useContext(CategoryContext);
  const [products, setProducts] = useState(categories[category]);
  useEffect(() => {
    setProducts(categories[category]);
  }, [categories, category]);
  return (
    <div className="category-container">
      {products &&
        products.map((product) => {
          return <ProductCard key={product.is} product={product} />;
        })}
    </div>
  );
};

export default Category;
