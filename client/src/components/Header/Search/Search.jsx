import "./Search.scss";
import prod from "../../../assets/products/earbuds-prod-1.webp";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import useFetch from "../../../hooks/useFetch";
import { useNavigate } from "react-router-dom";

const Search = ({ setShowSearch }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  const { data, loading, error } = useFetch(
    `/api/products?populate=*&filters[title][$contains]=${query}`
  );
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  console.log("search  fetched");
  console.log(data);

  // if (!query.length) {
  //   data = null;
  // }
  return (
    <div className="search-model">
      <div className="form-field">
        <input
          type="text"
          autoFocus
          placeholder="Search for products"
          value={query}
          onChange={onChange}
        />
        <MdClose
          className="close-btn"
          onClick={() => {
            setShowSearch(false);
          }}
        />
      </div>
      <div className="search-result-content">
        {query && !data?.data?.length && (
          <div className="start-msg">No products found for "{query}".</div>
        )}
        {!query && (
          <div className="start-msg">
            Start typing to see products you are looking for.
          </div>
        )}
        <div className="search-results">
          {data?.map((item) => (
            <div
              className="search-result-item"
              key={item.id}
              onClick={() => {
                navigate("/product/" + item.id);
                setShowSearch(false);
              }}
            >
              <div className="image-container">
                <img
                  src={
                    process.env.REACT_APP_DEV_URL +
                    item.attributes.img.data[0].attributes.url
                  }
                  alt={item.attributes.title}
                />
              </div>
              <div className="prod-details">
                <span className="name">{item.attributes.title}</span>
                <span className="desc">{item.attributes.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
