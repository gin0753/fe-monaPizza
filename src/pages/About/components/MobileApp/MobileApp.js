import React from 'react';
import Iphone6Ads from './img/iPhone6-ad.png';

class MobileApp extends React.Component {
  render() {
    return (
      <section className="restPage_mobileApp">
        <div className="restPage_mobileApp_wrap">
          <aside>
            <img src={Iphone6Ads} />
          </aside>
          <main>
            <h2>Get the newest version of our mobile app for your phone.</h2>
            <p>
              Do you have an iPhone, Android device or an web-enabled mobile?
              Then it’s easier than ever to order hot and fresh pizza – no phone
              calls necessary! Mobile ordering lets you access all the best
              features in a format that’s tailored to the screen size of your
              mobile phone, find special online offers and order your favorite
              pizza and sides in a flash.
            </p>
            <h3>Here's why it's great:</h3>
            <ul>
              <li>It's free</li>
              <li>No registration required</li>
              <li>Order from the full menu</li>
              <li>Find local deals</li>
              <li>Pay directly from the app</li>
            </ul>
            <div className="appDownload">
              <a className="ios">download iPhone App</a>
              <a className="android">download Android App</a>
            </div>
          </main>
        </div>
      </section>
    );
  }
}

export default MobileApp;
