import React, { useState } from "react";
import { useSelector } from "react-redux";
import { ShoppingCart } from "react-feather";

// Components
import ProductItem from "./ProductItem";
import CartDropdown from "./CartDropdown";

// Styles
import "./ProductList.css";

const ProductList = () => {
  const filteredItems = useSelector((state) => state.products.filteredItems);

  const cartItems = useSelector((state) => state.products.cart);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [sortOrder, setSortOrder] = useState("asc");
  const [filter, setFilter] = useState("");

  const [updateBasket, setUpdateBasket] = useState(true);

  const handleCloseDropdown = () => {
    setIsDropdownOpen(false);
  };

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredProducts = filteredItems
    .filter((product) =>
      product.title.toLowerCase().includes((filter ?? "").toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === "asc") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });

  if (!filteredItems) {
    return <div>Loading...</div>;
  }

  const handleCartIconClick = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div className="product-list">
      <div className="controls">
        <input
          type="text"
          placeholder="Filter by name"
          value={filter}
          onChange={handleFilterChange}
          className="price-input"
        />
        <select
          value={sortOrder}
          onChange={handleSortChange}
          className="price-dropdown"
        >
          <option value="asc">Sort by Price: Low to High</option>
          <option value="desc">Sort by Price: High to Low</option>
        </select>
        <div className="cart-icon-container" onClick={handleCartIconClick}>
          <ShoppingCart color="black" size={18} />
          {isDropdownOpen && (
            <CartDropdown cartItems={cartItems} onClose={handleCloseDropdown} />
          )}
        </div>
      </div>
      <div className="product-list">
        {filteredProducts.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            setUpdateBasket={setUpdateBasket}
            updateBasket={updateBasket}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
