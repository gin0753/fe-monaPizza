import React, { useState } from "react";
import axios from 'axios';
// import { useSelector, useDispatch } from 'react-redux';

const MenuItems = ({ details: { _id, Img, PizzaName, Description, Price } }) => {

  const [currentSize, setCurrentSize] = useState('Small');
  let qty = 0;

  const handleChange = (e) => {
    e.preventDefault();
    setCurrentSize(e.target.value);
  };

  const handleAdd = async () => {
    qty+=1;
    const userId = sessionStorage.getItem('userID');
    const pizzaName = PizzaName;
    const pizzaSize = currentSize;
    const pizzaPrice = Price[currentSize];
    const totalPrice = qty * pizzaPrice;
    const pizzaSelected = {
      userId,
      pizzaName,
      pizzaSize,
      pizzaPrice,
      qty,
      totalPrice,
      status: "Pending"
    }
    console.log(pizzaSelected)
    console.log(`/cart?userId=${userId}&pizzaName=${pizzaName}&pizzaSize=${pizzaSize}`);
    try{
      const response = await axios.get(`/cart?userId=${userId}&pizzaName=${pizzaName}&pizzaSize=${pizzaSize}`);
      await console.log(response);
      if(response.status === 200){
        console.log(1);
      }
      else if(response.status === 404){
        await axios.post('/cart', pizzaSelected);
      }
    } catch(err){
      console.log(err)
    }

  }
  
  // const quantity = useSelector(state => state.orderPizzaReducer.quantity);

  // const dispatch = useDispatch();

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
            <input className="catelogue-button" value="ADD" onClick={handleAdd}/>
            <input className="catelogue-button" value="Remove" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default MenuItems;
