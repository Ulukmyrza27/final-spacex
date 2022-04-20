import React, { useContext, useEffect } from "react";
import { Select, Slider } from "antd";
import { productsContext } from "../contexts/ShopContext";

const Filters = ({ type, setType, price, setPrice }) => {
  return (
    <div style={{ marginTop: "20px" }}>
      <Select
        value={type}
        onChange={(e) => setType(e)}
        placeholder="Filter by type"
        style={{ width: "100%" }}
        allowClear
        mode="multiple"
      >
        <Select.Option value={"Female"}>Female</Select.Option>
        <Select.Option value={"Male"}>Male</Select.Option>
      </Select>
      <Slider
        value={price}
        onChange={(e) => setPrice(e)}
        defaultValue={[100, 1000]}
        min={0}
        max={1000}
        step={100}
        range
      />
    </div>
  );
};

export default Filters;
