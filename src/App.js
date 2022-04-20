import React from "react";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import ProductsContextProvider from "./components/contexts/ShopContext";
import Routing from "./components/Routing/Routing";
import "./App.css";
import AuthContextProvider from "./components/contexts/authContext";
import FollowContextProvider from "./components/contexts/followContext";
import CartContextProvider from "./components/contexts/cartContext";

const App = () => {
  return (
    <div className="App">
      <AuthContextProvider>
        <CartContextProvider>
          <ProductsContextProvider>
            <FollowContextProvider>
              <Routing />
            </FollowContextProvider>
          </ProductsContextProvider>
        </CartContextProvider>
      </AuthContextProvider>
    </div>
  );
};

export default App;
