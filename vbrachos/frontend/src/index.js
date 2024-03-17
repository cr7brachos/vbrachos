import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'; //css for bootstrap
import { UserProvider } from './contexts/user.context';
import { TeamProvider } from './contexts/team.managent.context';
import { CartProvider } from './contexts/cart.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* all components wrapped inside UserProvider, are able to use the data from UserContext */}
    <UserProvider> 
      <TeamProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </TeamProvider> 
    </UserProvider>
    
  </React.StrictMode>
);

