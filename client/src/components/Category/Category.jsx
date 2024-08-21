import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Products1 from "../Products/Products1";
import "./Category.scss";

const Category = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetch(
    `/api/products?populate=*&[filters][categories][id]=${id}`
  );
  if (loading) return <div>Loading...</div>; // Display loading indicator
  if (error) return <div>Error: {error.message}</div>; // Handle errors
  // console.log("Data fetched");
  // console.log(data);
  const products = data?.data || [];
  // console.log(products);
  return (
    <div className="category-main-content">
      <div className="layout">
        <div className="category-title">
          {data && data[0].attributes.categories.data[0].attributes.title}
        </div>
        <Products1 products={data} innerPage={true} />
      </div>
    </div>
  );
};

export default Category;
