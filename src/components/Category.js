import React from "react";
import { Link, Outlet } from "react-router-dom";

const Category = () => {
  const items = ["Dresses", "Shoes", "Bags"];

  return (
    <div>
      <h2>Women Category</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <Link to={`/category/${item.toLowerCase()}`}>{item}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
};

export default Category;
