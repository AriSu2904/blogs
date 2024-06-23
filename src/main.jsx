import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {App} from "./App.jsx";
import {ApolloProvider} from "@apollo/client";
import {client} from "./graphql/clientConfig.js";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <ApolloProvider client={client}>
        <App/>
    </ApolloProvider>,
)
