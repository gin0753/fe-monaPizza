import React, { useState } from "react";
import { addPizza, removePizza, resetQuantity } from '../../../action/orderPizzaActions';
import { useSelector, useDispatch } from 'react-redux';

const MenuItems = ({ details: { _id, Img, PizzaName, Description, Price } }) => {

  const [currentSize, setCurrentSize] = useState("Small");

  const handleChange = (e) => {
    e.preventDefault();
    setCurrentSize(e.target.value);
    console.log(_id);
    console.log(PizzaName);
    console.log(Price[currentSize]);
  };
  
  const quantity = useSelector(state => state.orderPizzaReducer.quantity);

  const dispatch = useDispatch();

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
        <div className="product__showcase">
          <select name="product__size" className="product__size" onChange={handleChange}
          value={currentSize}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
          <div className="product__button">
            <input className="catelogue-button" value="ADD" onClick={() => {
                dispatch(addPizza())
              }
            }/>
            <input className="catelogue-button" value="Remove" onClick={() => dispatch(removePizza())}/>
          </div>
        </div>
      </form>
    </div>
  );
};

export default MenuItems;
