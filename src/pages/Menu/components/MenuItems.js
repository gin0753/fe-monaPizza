import React, { useState } from "react";
import axios from 'axios';


const MenuItems = ({ details: { _id, Img, PizzaName, Description, Price } }) => {

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
    status: "Pending"
  }

  const handleChange = (e) => {
    e.preventDefault();
    setCurrentSize(e.target.value);
  };

  const handleAdd = async () => {

    try{
      const response = await axios.get(`/cart?userId=${userId}&pizzaName=${pizzaName}&pizzaSize=${pizzaSize}`);
      if(response.status === 200){
        const pizzaId = response.data._id;
        let qty = response.data.qty + 1;
        pizzaSelected.qty = qty;
        pizzaSelected.totalPrice = pizzaSelected.qty * pizzaPrice;
        await axios.put(`/cart/${pizzaId}`, pizzaSelected);
      }
    } catch(err){
      console.log(err.response)
      if(err.response.data.message === 'Failed to find the record'){
        let qty = 1;
        pizzaSelected.qty = qty;
        pizzaSelected.totalPrice = pizzaPrice;
        await axios.post('/cart', pizzaSelected);
      }
    }

  }

  const handleRemove = async() => {
        
    try{
      const response = await axios.get(`/cart?userId=${userId}&pizzaName=${pizzaName}&pizzaSize=${pizzaSize}`);
      if(response.status === 200){
        const pizzaId = response.data._id;
        if(response.data.qty <= 1){
          await axios.delete(`/cart/${pizzaId}`);
        }
        else{
          let qty = response.data.qty - 1;
          pizzaSelected.qty = qty;
          pizzaSelected.totalPrice = pizzaSelected.qty * pizzaPrice;
          await axios.put(`/cart/${pizzaId}`, pizzaSelected);
        }
      }
    } catch(err){
      console.log(err.response)
    }

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
            <input className="catelogue-button" value="ADD" onClick={handleAdd}/>
            <input className="catelogue-button" value="Remove" onClick={handleRemove}/>
          </div>
        </div>
      </form>
    </div>
  );
};

export default MenuItems;
