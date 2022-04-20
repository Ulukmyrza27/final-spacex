import { Empty, Input, Pagination } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { productsContext } from "../contexts/ShopContext";
import Filters from "../Filter/Filter";
import "./ProductsList.css";
import ProductsCard from "./ProductsCard";

const ProductsList = () => {
  const { getProducts, products, productsCount } = useContext(productsContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  const [searchValue, setSearchValue] = useState(
    searchParams.get("q") ? searchParams.get("q") : ""
  );
  const [type, setType] = useState([]);
  const [price, setPrice] = useState([100, 1000]);
  const [page, setPage] = useState(
    searchParams.get("_page") ? searchParams.get("_page") : 1
  );
  const [limit, setLimit] = useState(3);
  useEffect(() => {
    getProducts();
  }, []);
  useEffect(() => {
    setSearchParams({
      q: searchValue,
      type: type,
      price_gte: price[0],
      price_lte: price[1],
      _page: page,
      _limit: limit,
    });
  }, [searchValue, type, price, page, limit]);
  useEffect(() => {
    getProducts();
  }, [searchParams]);
  return (
    <div className="container" style={{ backgroundColor: "white" }}>
      <div className="products-search">
        <div
          style={{ cursor: "pointer", marginLeft: "7px" }}
          onClick={() => setShowFilters(!showFilters)}
        >
          {showFilters ? "HIDE FILTERS" : "SHOW FILTERS"}
        </div>
        <Input.Search
          className="products-list-search"
          placeholder="Search..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      {showFilters ? (
        <Filters
          type={type}
          setType={setType}
          price={price}
          setPrice={setPrice}
        />
      ) : null}
      <div className="products-list">
        {products.length > 0 ? (
          products.map((item) => <ProductsCard key={item.id} item={item} />)
        ) : (
          <Empty />
        )}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "30px",
          marginBottom: "50px",
        }}
      >
        <Pagination
          total={+productsCount}
          current={+page}
          pageSize={+limit}
          defaultCurrent={1}
          onChange={(page, limit) => {
            setPage(page);
            setLimit(limit);
          }}
        />
      </div>
    </div>
  );
};

export default ProductsList;
