/* eslint-disable react/prop-types */
import {  NavLink } from "react-router-dom";

const Button = ({ buttons }) => {
  return (
    <div className="flex flex-col p-5 gap-2">
      <NavLink to={"/"} className="btn">
        All Product
      </NavLink>
      {buttons.map((button) => (
        <NavLink
          to={`/cards/${button.category}`}
          className="btn"
          key={button.product_id}
        >
          {button.category}
        </NavLink>
      ))}
    </div>
  );
};

export default Button;
