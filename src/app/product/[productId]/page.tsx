import Product from "@/components/core/product";
import React from "react";

const ProductPage = ({
  params,
}: {
  params: {
    productId: string;
  };
}) => {
  return (
    <div>
      <Product productId={params.productId} />
    </div>
  );
};

export default ProductPage;
