/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Button = ({ buttons }) => {
  return (
    <div className="flex flex-col p-5 gap-2">
      <Link to={"/"} className="btn">
        All Product
      </Link>
      {buttons.map((button) => (
        <Link
          to={`/cards/${button.category}`}
          className="btn"
          key={button.product_id}
        >
          {button.category}
        </Link>
      ))}
    </div>
  );
};

export default Button;
