import React from 'react';
import '../Dashboard.css';
import UserBar from '../../../components/UserBar/UserBar/UserBar';
import Axios from 'axios';

class managePizza extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            PizzaName: '',
            Description: '',
            priceSM: '',
            priceMD: '',
            priceLG: '',
            isAdded: false,
            isRemoved: false
        } 
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClick = async(e) => {
        try{
            const {PizzaName, Description, priceSM, priceMD, priceLG} = this.state;
            const addPizza = {
                PizzaName,
                Description,
                Price: {
                    Small: priceSM,
                    Medium: priceMD,
                    Large: priceLG
                }
            }
            const res = await Axios.post('./menu', addPizza);
            if(res.status === 201){
                await new Promise((resolve) => {    
                    this.setState({isAdded: true});
                    resolve();
                }); 
        
                await new Promise((resolve)=>setTimeout(() => {
                    this.setState({isAdded: false});
                    resolve();
                }, 3000)); 
            }
        }
        catch(err){
            console.log(err);
        }
    }

    render() {
        const {isAdded} = this.state;
        return (
            <div className="dashboard">
                <div className="dashboard__managePizza">
                    <UserBar />
                    <section>
                        <h3>Add Pizza to the Menu</h3>
                        <label>Pizza Name</label>
                        <input name="PizzaName" placeholder="Peri-peri" onChange={this.handleChange}/>
                        <label>Description</label>
                        <input name="Description" placeholder="A very hot sauce made with red chilli peppers." onChange={this.handleChange}/>
                        
                        <div class="dashboard__managePizza--sizeWrapper">
                            <label>Price-Small</label>
                            <input name="priceSM" className="input" placeholder="Price-sm" onChange={this.handleChange}/>
                        </div>
                        <div class="dashboard__managePizza--sizeWrapper">
                            <label>Price-Medium</label>
                            <input name="priceMD" className="input" placeholder="Price-md" onChange={this.handleChange}/>
                        </div>
                        <div class="dashboard__managePizza--sizeWrapper">
                            <label>Price-Large</label>
                            <input name="priceLG" className="input" placeholder="Price-lg" onChange={this.handleChange}/>
                        </div>

                        <div class="dashboard__managePizza--buttonWrapper">
                            <button className="addBtn" onClick={this.handleClick}>Add Pizza</button>
                        </div>
                        {!isAdded ? <></>:<div className="dashboard__managePizza--isUpdated">Pizza Added Successfully</div>}
                    </section>
                </div>
            </div>
        );
    }
}

export default managePizza;