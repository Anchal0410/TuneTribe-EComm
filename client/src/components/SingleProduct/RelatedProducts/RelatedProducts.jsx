import React from "react";
import Products1 from "../../Products/Products1";
import useFetch from "../../../hooks/useFetch";

const RelatedProducts = ({ productId, categoryId }) => {
  const { data, loading, error } = useFetch(
    `/api/products?populate=*&filters[id][$ne]=${productId}&filters[categories][id]=${categoryId}&pagination[start]=0&pagination[limit]=4`
  );
  if (loading) return <div>Loading...</div>; // Display loading indicator
  if (error) return <div>Error: {error.message}</div>; // Handle errors
  console.log("Related Product fetched");
  console.log(data);
  return (
    <div className="related-products">
      <Products1 headingText="Related Products" products={data} />
    </div>
  );
};
export default RelatedProducts;
