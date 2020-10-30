import React from 'react';
import rpFirst from '../images/related-pizza-1.png';
import rpSecond from '../images/related-pizza-2.png';
import rpThird from '../images/related-pizza-3.png';
import rpFourth from '../images/related-pizza-4.png';

class RelatedPizza extends React.Component {

    render() {
        return (
            <div className="related-pizza-wrapper">
                <h1>Related Products</h1>
                <div className="related-pizza-list flex-container">
                    <div className="related-pizza-first flex-item">
                        <img src={rpFirst} alt="pizza" />
                        <p className="pizza-name">Florentine Ricotta</p>
                        <p className="pizza-ingrd">
                            Spinach & Ricotta, Kalamata Olives, Spanish Onions,
                            Cherry Tomatoes & Feta served with Cracked Pepper
                            & Sea salt
                        </p>
                    </div>
                    <div className="related-pizza-second flex-item">
                        <img src={rpSecond} alt="pizza" />
                        <p className="pizza-name">Margherita</p>
                        <p className="pizza-ingrd">
                            Margherita with Authentic Buffalo Mazzarella and Cherry
                            Tomatoes on a Tomato base, garnished with Fresh Basil, served
                            with Cracked Pepper & Sea salt.
                        </p>
                    </div>
                    <div className="related-pizza-third flex-item">
                        <img src={rpThird} alt="pizza" />
                        <p className="pizza-name">Vegetarian Supreme</p>
                        <p className="pizza-ingrd">
                            Grilled Eggplant, Marinated Artichokes, Baby spinach, Roasted
                            Capsicum, Mushrooms, Sundried Tomatoes & Bocconcini on a Tomato
                            base, Pesto Aioli.
                        </p>
                    </div>
                    <div className="related-pizza-fourth flex-item">
                        <img src={rpFourth} alt="pizza" />
                        <p className="pizza-name">Roast Beetroot</p>
                        <p className="pizza-ingrd">
                            Slowcooked Roasted Beetroot, Baby spinach, Bocconcini on a Harissa
                            Infused Hummus base, topped with Crushed Walnuts and Honey
                        </p>
                    </div>
                </div>
            </div>
        )
    };

};

export default RelatedPizza;