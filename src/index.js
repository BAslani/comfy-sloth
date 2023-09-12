import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { ProductsProvider } from './context/products_context';
import { FilterProvider } from './context/filter_context';
import { CartProvider } from './context/cart_context';
import { UserProvider } from './context/user_context';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
// dev-4qamel3bp2w0hrvt.us.auth0.com
// uukUDulUyLXmI7wThih2JXIpaazHj2vI
root.render(
    <Auth0Provider
        domain="dev-4qamel3bp2w0hrvt.us.auth0.com"
        clientId="uukUDulUyLXmI7wThih2JXIpaazHj2vI"
        authorizationParams={{
            redirect_uri: window.location.origin
        }}
        cacheLocation='localstorage'
    >
        <UserProvider>
            <React.StrictMode>
                <ProductsProvider>
                    <FilterProvider>
                        <CartProvider>
                            <App />
                        </CartProvider>
                    </FilterProvider>
                </ProductsProvider>
            </React.StrictMode>
        </UserProvider>
    </Auth0Provider>,
);
