import React from 'react';
import '../../Dashboard.css';
import Axios from 'axios';

class UpdatePizza extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            PizzaName: '',
            Description: '',
            priceSM: '',
            priceMD: '',
            priceLG: '',
            isUpdated: false,
            validString: 'empty',
            validNumber: 'empty',
            userId: sessionStorage.getItem('userID'),
            config: {
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem('login-token')}`
                }
            }
        }
        this.pizzaName = React.createRef();
        this.Description = React.createRef();
        this.priceSM = React.createRef();
        this.priceMD = React.createRef();
        this.priceLG = React.createRef(); 
    }

    checkPattern = () => {
        const pizzaName = this.pizzaName.current.value;
        const Description = this.Description.current.value;
        const priceSM = this.priceSM.current.value;
        const priceMD = this.priceMD.current.value;
        const priceLG = this.priceLG.current.value;
        if(pizzaName.match(this.props.pattern.namePattern) && Description.match(this.props.pattern.namePattern)
        && pizzaName.length > 0){
            this.setState({validString: true});
        }
        else{
            this.setState({validString: false});
        }
        if(priceSM.match(this.props.pattern.pricePattern) && priceMD.match(this.props.pattern.pricePattern) && priceLG.match(this.props.pattern.pricePattern)){
            this.setState({validNumber: true});
        }
        else{
            this.setState({validNumber: false});
        }
    }

    handleChange = async (e) => {
        await this.setState({
            [e.target.name]: e.target.value
        })
        await this.checkPattern();
    }

    handleClick = async(e) => {
        try{
            const {PizzaName, Description, priceSM, priceMD, priceLG, userId, config} = this.state;
            const addPizza = {
                userId,
                PizzaName,
                Description,
                Price: {
                    Small: priceSM,
                    Medium: priceMD,
                    Large: priceLG
                }
            }
            const res = await Axios.put(`./menu/${userId}/${PizzaName}`, addPizza, config);
            if(res.status === 200){
                await new Promise((resolve) => {    
                    this.setState({isUpdated: true});
                    resolve();
                }); 
        
                await new Promise((resolve)=>setTimeout(() => {
                    this.setState({isUpdated: false});
                    resolve();
                }, 3000)); 
            }
        }
        catch(err){
            console.log(err);
        }
    }

    render() {
        const {isUpdated, validNumber, validString} = this.state;
        return (
            <section>
                <h3>Update Menu</h3>
                <hr />
                <label>Pizza Name</label>
                <input ref={this.pizzaName} name="PizzaName" placeholder="Peri-peri" onChange={this.handleChange}/>
                <label>Description</label>
                <input ref={this.Description} name="Description" placeholder="A very hot sauce made with red chilli peppers." onChange={this.handleChange}/>
                
                <div class="dashboard__managePizza--sizeWrapper">
                    <label>Price-Small</label>
                    <input ref={this.priceSM} name="priceSM" className="input" placeholder="Price-sm" onChange={this.handleChange}/>
                </div>
                <div class="dashboard__managePizza--sizeWrapper">
                    <label>Price-Medium</label>
                    <input ref={this.priceMD} name="priceMD" className="input" placeholder="Price-md" onChange={this.handleChange}/>
                </div>
                <div class="dashboard__managePizza--sizeWrapper">
                    <label>Price-Large</label>
                    <input ref={this.priceLG} name="priceLG" className="input" placeholder="Price-lg" onChange={this.handleChange}/>
                </div>

                <div class="dashboard__managePizza--buttonWrapper">
                    <button className= {validNumber === true && validString === true ? "addBtn" : "addBtn disabled"} 
                    disabled={validNumber === true && validString === true ? false : true} onClick={this.handleClick}>Add Pizza</button>
                </div>
                {!isUpdated ? <></>:<div className="dashboard__managePizza--isUpdated">Pizza Added Successfully</div>}
                {validString === false && <div className="dashboard__managePizza--incorrect">Invalid PizzaName or Description</div>}
                {validNumber === false && <div className="dashboard__managePizza--incorrect">Invalid Price</div>}
            </section>
        );
    }
}

export default UpdatePizza;