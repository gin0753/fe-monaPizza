import React, { useState } from "react";

const MenuItems = ({ details: { _id, Img, PizzaName, Description, Price } }) => {
  const [currentSize, setCurrentSize] = useState("Small");
  const handleChange = (e) => {
    e.preventDefault();
    setCurrentSize(e.target.value);
  };

  return (
    <div className="catelogue__product--name" key={_id}>
      <div><img src={Img} alt="Item_Image" /></div>
      <div className="pizza__description">
        <h3>{PizzaName}</h3>
        <p>
          {Description}
        </p>
      </div>
      <h4 className="product__price">{`$ ${Price[currentSize]}`}</h4>
      <form>
        <select name="product__size" className="product__size" onChange={handleChange}
        value={currentSize}>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
        <input className="add-button" type="submit" value="ADD" />
      </form>
    </div>
  );
};

export default MenuItems;
