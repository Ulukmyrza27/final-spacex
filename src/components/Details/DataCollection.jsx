import React, { Component } from "react";

const API = " http://localhost:8000/products";
class App extends React.Component {
  state = {
    isLoading: true,
    products: [],
    error: null,
  };
  getFetchProducts() {
    this.setState(
      {
        loading: true,
      },
      () => {
        fetch(API)
          .then((res) => res.json())
          .then((result) =>
            this.setState({
              loading: false,
              products: result,
            })
          )
          .catch(console.log);
      }
    );
  }
  componentDidMount() {
    this.getFetchProducts();
  }
  render() {
    const { products, error } = this.state;
    console.log(products);
    return (
      <React.Fragment>
        <h1>All products feedback data form </h1>
        {error ? <p>{error.message} </p> : null}{" "}
        {products.map((products) => {
          const { model, price, comments, likes, ratings } = products;
          return (
            <div key={[{ model }]}>
              <p>Model: [{model}]</p>
              <p>Price: [{price}]</p>
              <p>Comments: [{products.comments.comments}]</p>
              <p>Ratings: [ratings]</p>
              <p>Likes: [likes]</p>
              <hr />
            </div>
          );
        })}{" "}
      </React.Fragment>
    );
  }
}
export default App;
