import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import './index.css';
import App from './App';

// 创建 Apollo Client
const client = new ApolloClient({
    uri: 'https://gateway.thegraph.com/api/8b372d83de6e65a0572d0c608ee1ffde/subgraphs/id/HUZDsRpEVP2AvzDCyzDHtdc64dyDxx8FQjzsmqSg4H3B', // 替换为您要使用的子图 API
    cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </React.StrictMode>
);
