import React from "react";
import { useParams } from "react-router-dom";

const Item = () => {
  const { itemId } = useParams();
  return (
    <div>
      <h3>Item Details</h3>
      <p>You selected: {itemId}</p>
    </div>
  );
};

export default Item;
