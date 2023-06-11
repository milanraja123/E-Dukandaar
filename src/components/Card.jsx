
import { NavLink } from "react-router-dom";
import FormatPrice from "../helpers/FormatPrice";


const Product = (currEle) => {
  const { id, title, price, category,thumbnail } = currEle;

  return (
    <NavLink to={`/singleproduct/${id}`}>
      <div className="card">
        <figure>
          <img src={thumbnail} alt={title} />
          <figcaption className="caption">{category}</figcaption>
        </figure>

        <div className="card-data">
          <div className="card-data-flex">
            <h3>{title}</h3>
            <p className="card-data--price">
            <FormatPrice price={price} />
           
            </p>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default Product;
