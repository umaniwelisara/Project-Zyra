import React from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();

  return <main>Single Product: {id}</main>;
};

export default Product;
