import { CartIcon } from '../icons';

import React from 'react';

export const Navbar = () => {
  return (
    <nav>
      <div className="nav-center">
        <h3>Redux toolkit</h3>
        <div className="nav-container">
          <CartIcon />
          <div className="amount-container">
            <p className="total-amount">0</p>
          </div>
        </div>
      </div>
    </nav>
  );
};
