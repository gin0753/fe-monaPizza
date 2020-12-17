import React from 'react';
import '../Menu.css';
import { SaucesItems, CheeseItems, MeatItems, VeggiesItems, ExtraItems } from './components/FilterItems';


class Filter extends React.Component {

    render() {
        return (<div className="catelogue__topbar">
            <div className="catelogue__filter">
                <header>
                    <input type="checkbox" id="filter" className="filter" />
                    <label htmlFor="filter">
                        <div className="filter-container">
                            <ul>
                                <li className="filter__button">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </li>
                                <li className="filter__title"><h4>TOPPINGS</h4></li>
                                <li className="filter__result">Showing 1-3 of 3 results</li>
                            </ul>
                        </div>
                    </label>
                    <div className="filter__items">
                        <ul>
                            <li>
                                <h3>SAUCES</h3>
                                <div>
                                    {SaucesItems.map((item, index) => {
                                        return(
                                            <label className="filter__options" key={index}>
                                                <input name={item.name} type={item.type} onClick={this.props.clickEvent} value={item.value}/>
                                                <h4>{item.name}</h4>
                                                <span className="checkmark"></span>
                                            </label>
                                        )
                                    })}
                                </div>
                            </li>
                            <li>
                                <h3>CHEESES</h3>
                                <div>
                                    {CheeseItems.map((item, index) => {
                                        return(
                                            <label className="filter__options" key={index}>
                                                <input name={item.name} type={item.type} onClick={this.props.clickEvent} value={item.value} />
                                                <h4>{item.name}</h4>
                                                <span className="checkmark"></span>
                                            </label>
                                        )
                                    })}
                                </div>
                            </li>
                            <li>
                                <h3>MEATS</h3>
                                <div>
                                    {MeatItems.map((item, index) => {
                                        return(
                                            <label className="filter__options" key={index}>
                                                <input name={item.name} type={item.type} onClick={this.props.clickEvent} value={item.value} />
                                                <h4>{item.name}</h4>
                                                <span className="checkmark"></span>
                                            </label>
                                        )
                                    })}
                                </div>
                            </li>

                            <li>
                                <h3>VEGGIES</h3>
                                <div>
                                    {VeggiesItems.map((item, index) => {
                                        return(
                                            <label className="filter__options" key={index}>
                                                <input name={item.name} type={item.type} onClick={this.props.clickEvent} value={item.value} />
                                                <h4>{item.name}</h4>
                                                <span className="checkmark"></span>
                                            </label>
                                        )
                                    })}
                                </div>
                            </li>
                            <li className="more-options">
                                <h3 className="more-vegetable">EXTRA</h3>
                                <div>
                                    {ExtraItems.map((item, index) => {
                                        return(
                                            <label className="filter__options" key={index}>
                                                <input name={item.name} type={item.type} onClick={this.props.clickEvent} value={item.value} />
                                                <h4>{item.name}</h4>
                                                <span className="checkmark"></span>
                                            </label>
                                        )
                                    })}
                                </div>
                            </li>
                        </ul>
                        <div className="filter--selected">
                            <button className="filter__button--selected">
                                FILTER SELECTED
                            </button>
                        </div>
                    </div>
                </header>
            </div>
            <div className="catelogue__default">
                <label htmlFor="default"></label>
                <select name="default" id="default" className="sorting">
                    <option value="default">DEFAULT SORTING</option>
                </select>
            </div>
        </div>)
    }
}

export default Filter