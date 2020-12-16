import React, { useState } from "react";
import { viewCartItem, updateCartItem, addCartItem, removeCartItem } from '../../../api/index';


const MenuItems = ({ details: { _id, Img, PizzaName, Description, Price}, updateCart, toppings, toppingItemPrice}) => {

  const [currentSize, setCurrentSize] = useState('Small');

  const userId = sessionStorage.getItem('userID');
  const pizzaName = PizzaName;
  const pizzaSize = currentSize;
  const pizzaPrice = Price[currentSize];
  let totalPrice;

  const pizzaSelected = {
    userId,
    pizzaName,
    pizzaSize,
    pizzaPrice,
    totalPrice,
    toppings
  }

  const handleChange = (e) => {
    e.preventDefault();
    setCurrentSize(e.target.value);
  };

  const handleAdd = async () => {
    try{
      const response = await viewCartItem(userId, pizzaName, pizzaSize);
      if(response.status === 200){
        const pizzaId = response.data._id;
        let qty = response.data.qty + 1;
        pizzaSelected.qty = qty;
        pizzaSelected.totalPrice = pizzaSelected.qty * pizzaPrice + +(toppings.length * toppingItemPrice);
        await updateCartItem(pizzaId, pizzaSelected);
      }
      else if(response.status === 201){
        let qty = 1;
        pizzaSelected.qty = qty;
        
        pizzaSelected.totalPrice = pizzaPrice + +(toppings.length * toppingItemPrice);
        await addCartItem(pizzaSelected);
      }
      await updateCart();
    } catch(err){
      console.log(err)
    }
  }

  const handleRemove = async() => {
    try{
      const response = await viewCartItem(userId, pizzaName, pizzaSize);
      if(response.status === 200){
        const pizzaId = response.data._id;
        if(response.data.qty <= 1){
          await removeCartItem(pizzaId);
        }
        else{
          let qty = response.data.qty - 1;
          pizzaSelected.qty = qty;
          pizzaSelected.totalPrice = pizzaSelected.qty * pizzaPrice;
          await updateCartItem(pizzaId, pizzaSelected);
        }
      }
    } catch(err){
      console.log(err.response)
    }
    await updateCart();
  }

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
            <input className="catelogue-button" defaultValue="ADD" onClick={handleAdd}/>
            <input className="catelogue-button" defaultValue="Remove" onClick={handleRemove}/>
          </div>
        </div>
      </form>
    </div>
  );
};

export default MenuItems;
