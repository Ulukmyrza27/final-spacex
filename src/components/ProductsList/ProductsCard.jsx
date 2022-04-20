import React, { useContext, useState } from "react";
import { cartContext } from "../contexts/cartContext";
import { Card } from "antd";
import {
  EllipsisOutlined,
  HeartOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { followContext } from "../contexts/followContext";
const { Meta } = Card;

const ProductsCard = ({ item }) => {
  const { addProductToCart, checkItemInCart } = useContext(cartContext);
  const { addFollow, checkFollow } = useContext(followContext);
  const [checkInCart, setCheckInCart] = useState(checkItemInCart(item.id));
  const [like, setlike] = useState(checkFollow(item.id));

  function clickFollow() {
    addFollow(item);
    setlike(checkFollow(item.id));
  }
  return (
    <Card
      style={{ width: "330px", margin: "70px" }}
      cover={<img width="100px" alt="example" src={item.imageBlack} />}
      actions={[
        <HeartOutlined
          onClick={() => clickFollow()}
          key="icon-heart"
          style={{
            color: like ? "red" : "black",
            fontSize: "25px",
          }}
        />,
        <ShoppingOutlined
          key="icon-cart"
          style={{
            color: checkInCart ? "red" : "black",
            fontSize: "25px",
          }}
          onClick={() => {
            addProductToCart(item);
            setCheckInCart(checkItemInCart(item.id));
          }}
        />,
        <Link key="ellipsis" to={`/details/${item.id}`}>
          <EllipsisOutlined style={{ fontSize: "25px", color: "black" }} />
        </Link>,
      ]}
    >
      <Meta
        title={item.model}
        description={
          <>
            <h2 style={{ textAlign: "center" }}>{"$" + item.price}</h2>
          </>
        }
      />
    </Card>
  );
};

export default ProductsCard;
