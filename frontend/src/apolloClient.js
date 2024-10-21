// src/apolloClient.js
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const client = new ApolloClient({
    link: new HttpLink({
        uri: 'https://gateway.thegraph.com/api/8b372d83de6e65a0572d0c608ee1ffde/subgraphs/id/HUZDsRpEVP2AvzDCyzDHtdc64dyDxx8FQjzsmqSg4H3B'
        //wrong gpt    uri: 'https://gateway.thegraph.com/api/8b372d83de6e65a0572d0c608ee1ffde/subgraphs/name/uniswap/uniswap-v2',
        //uri: 'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2', // 替换为您选择的子图URL

        //test
        //uri: 'https://cors-anywhere.herokuapp.com/https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2',


    }),
    cache: new InMemoryCache(),
});

export default client;
