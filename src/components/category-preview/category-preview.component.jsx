import "./category-preview.styles.scss";
import {Link} from 'react-router-dom'
import ProductCard from "../product-card/product-card.component";
const CategoryPreview = ({ title, product }) => {
  return (
    <div className="category-preview-container">
      <h2>
        <Link to={title} className="title">{title.toUpperCase()}</Link>
      </h2>
      <div className="preview">
        {product
          .filter((_, idx) => idx < 4)
          .map((prod) => {
            return <ProductCard key={prod.id} product={prod} />;
          })}
      </div>
    </div>
  );
};
export default CategoryPreview;
