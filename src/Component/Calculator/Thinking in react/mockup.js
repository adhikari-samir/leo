import React from "react";
import "./mockup.css";

class MockUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchBar: "",
      displayStock: false,
    };
  }

  handleChange = (event) => {
    this.setState({ searchBar: event.target.value });
  };

  handleCheckboxChange = () => {
    this.setState((prevState) => ({ displayStock: !prevState.displayStock }));
  };

  render() {
    const productsData = [
      {
        category: "Sporting Goods",
        products: [
          { price: "$49.99", stocked: true, name: "Football" },
          { price: "$9.99", stocked: true, name: "Baseball" },
          { price: "$29.99", stocked: false, name: "Basketball" },
        ],
      },
      {
        category: "Electronics",
        products: [
          { price: "$99.99", stocked: true, name: "iPod Touch" },
          { price: "$399.99", stocked: false, name: "iPhone 5" },
          { price: "$199.99", stocked: true, name: "Nexus 7" },
        ],
      },
    ];

    const filteredProducts = productsData.map((categoryData) => ({
      category: categoryData.category,
      products: categoryData.products
        .filter((product) =>
          product.name
            .toLowerCase()
            .includes(this.state.searchBar.toLowerCase())
        )
        .filter((product) =>
          this.state.displayStock ? product.stocked : true
        ),
    }));

    return (
      <div className="boxsize">
        <input
          type="text"
          className="inputfield"
          placeholder="Search..."
          value={this.state.searchBar}
          onChange={this.handleChange}
        />
        <br />
        <label>
          <input
            type="checkbox"
            checked={this.state.displayStock}
            onChange={this.handleCheckboxChange}
          />
          Only show products in stock
        </label>
        <div className="flexingtxt">
          <h5>Name</h5>
          <h5>Price</h5>
        </div>
        {filteredProducts.map((categoryData) => (
          <div key={categoryData.category}>
            <h3>{categoryData.category}</h3>
            {categoryData.products.map((product) => (
              <div className="flexing_data" key={product.name}>
                <p>{product.name}</p>
                <p>{product.price}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default MockUp;
