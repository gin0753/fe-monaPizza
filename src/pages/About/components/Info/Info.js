import React from 'react';

class Info extends React.Component {
  render() {
    return (
      <section className="restPage_info">
        <div className="restPage_info_wrap">
          <div className="restPage_info_top">
            <h2>
              We are pizza makers, and our mission is to make cool pizza which
              feeds all your senses.
            </h2>
            <p>
              We prefer to rely on instinct and feel, measuring by hand, not by
              the gram. This is the authentic way to make pizza. Sure it’s a
              little unrefined, but we’re proud of that. It’s pizza like this
              which feeds your sense of sharing, adding flavour to those
              occasions when you get together with friends and family. And
              really, isn’t that what it’s all about? Because when pizza feeds
              all your senses, it’s not just great, it’s sensational.
            </p>
          </div>
          <ul className="restPage_info_bottom">
            <li>
              <div className="icon_leaf" />
              <h2>We’re Careful</h2>
              <p>
                The crust is stored in a separate container, on a separate shelf
                in our fridge. The cheese, marinara sauce and pepperoni are
                stored in a designated kit, and every pizza is freshly baked on
                designated parchment paper in our ovens.
              </p>
            </li>
            <li>
              <div className="icon_badge" />
              <h2>We’re Certified</h2>
              <p>
                Our cheese-only and cheese-and-pepperoni gluten-free pizzas are
                prepared using the procedures certified by the Gluten
                Intolerance Group (GIG), and we take specific caution when
                making these pizzas.
              </p>
            </li>
            <li>
              <div className="icon_rocket" />
              <h2>You’re Creative</h2>
              <p>
                For those simply looking to reduce gluten in their diets, we
                offer a Create Your Own pizza option. The cheese, pepperoni and
                marinara come from our gluten-free kit, but all additional
                toppings are stored at our standard make table.
              </p>
            </li>
          </ul>

          <div className="restPage_info_last">
            <h2>
              From classic pizzeria profiles, to innovative ethnic selections or
              flavourful health conscious choices, all our products reflect our
              customers’ desires.
            </h2>
            <main>
              <p>
                With more than 40 recipes and more toppings than any other pizza
                franchise, our selection is unmatched. Our innovative menu
                ranges from basics, like classic pepperoni or ham and pineapple,
                to gourmet originals, like our primo pollo and grilled veggie
                and goat cheese.
              </p>
              <p>
                We know that better pizza starts with better quality, fresh
                ingredients. Our pepperoni is dry-cured, our mozzarella is
                rennet-free, our seafood is certified and none of our products
                contain artificial colours, flavours. With an extensive array of
                superior toppings, four distinct crusts and nine savoury sauces,
                we offer the choices our consumers demand—creating strong
                customer loyalty that leads to improved profitability.
              </p>
            </main>
          </div>
        </div>
      </section>
    );
  }
}

export default Info;
