import React from 'react';
import '../../Header.css';
import { Link } from 'react-router-dom';

function CheckOut() {
  return (
    <div className="logo">
      <Link to='index.html'><span>Mona Pizza</span></Link>
    </div>
  );
}

export default CheckOut;
