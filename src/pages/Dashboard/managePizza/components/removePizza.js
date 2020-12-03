import React from 'react';
import '../../Dashboard.css';
import Axios from 'axios';

class RemovePizza extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            PizzaName: '',
            isRemoved: false,
            userId: sessionStorage.getItem('userID'),
            config: {
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem('login-token')}`
                }
            }
        } 
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClick = async(e) => {
        try{
            const {PizzaName, userId, config} = this.state;
            console.log(userId)
            const res = await Axios.delete(`./menu/${userId}/${PizzaName}`, config);
            if(res.status === 200){
                await new Promise((resolve) => {    
                    this.setState({isRemoved: true});
                    resolve();
                }); 
        
                await new Promise((resolve)=>setTimeout(() => {
                    this.setState({isRemoved: false});
                    resolve();
                }, 3000)); 
            }
        }
        catch(err){
            console.log(err);
        }
    }

    render() {
        const {isRemoved} = this.state;
        return (
            <section>
                <h3>Remove Pizza from the Menu</h3>
                <label>Pizza Name</label>
                <input name="PizzaName" placeholder="Peri-peri" onChange={this.handleChange}/>
                <div class="dashboard__managePizza--buttonWrapper">
                    <button className="addBtn" onClick={this.handleClick}>Remove Pizza</button>
                </div>
                {!isRemoved ? <></>:<div className="dashboard__managePizza--isUpdated">Pizza Removed Successfully</div>}
            </section>
        );
    }
}

export default RemovePizza;