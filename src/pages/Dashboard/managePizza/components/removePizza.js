import React from 'react';
import '../../Dashboard.scss';
import { removeMenuItem } from 'api/index';

class RemovePizza extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            PizzaName: '',
            isRemoved: false,
            validString: 'empty',
            userId: sessionStorage.getItem('userID'),
            config: {
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem('login-token')}`
                }
            }
        } 
        this.pizzaName = React.createRef();
    }

    checkPattern = () => {
        const pizzaName = this.pizzaName.current.value;
        if(pizzaName.match(this.props.pattern.namePattern) && pizzaName.length > 0){
            this.setState({validString: true});
        }
        else if(pizzaName.length === 0){
            this.setState({validString: true});
        }
        else{
            this.setState({validString: false});
        }
    }

    handleChange = async(e) => {
        await this.setState({
                [e.target.name]: e.target.value
            })
        await this.checkPattern();
    }

    handleClick = async(e) => {
        try{
            const {PizzaName, config, userId} = this.state;
            const res = await removeMenuItem(userId, PizzaName, config);
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
        const {isRemoved, validString, PizzaName} = this.state;
        return (
            <section>
                <h3>Remove Pizza from the Menu</h3>
                <hr />
                <label>Pizza Name</label>
                <input ref={this.pizzaName} name="PizzaName" placeholder="Peri-peri" onChange={this.handleChange}/>
                <div className="dashboard__managePizza--buttonWrapper">
                    <button className= {validString === true && PizzaName.length !== 0 ? "removeBtn" : "removeBtn disabled"} 
                    disabled={validString === true ? false : true} onClick={this.handleClick}>Remove Pizza</button>
                </div>
                {!isRemoved ? <></>:<div className="dashboard__managePizza--isUpdated">Pizza Removed Successfully</div>}
                {validString === false && <div className="dashboard__managePizza--incorrect">Invalid PizzaName</div>}
            </section>
        );
    }
}

export default RemovePizza;