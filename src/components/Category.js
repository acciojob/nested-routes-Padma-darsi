import React from "react";
import { Link, Outlet } from "react-router-dom";

const Category = () => {
  const items = ["Dresses", "Shoes", "Bags"];

  return (
    <div>
      <h2>Women’s Collection</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <Link to={`/women/${item.toLowerCase()}`}>{item}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
};

export default Category;
