// src/App.js
import React from 'react';
import { ApolloProvider, useQuery, gql } from '@apollo/client';
import client from './apolloClient';
import './App.css';

// 使用成功返回的数据的 GraphQL 查询
const GET_TOP_POOLS = gql`
  query GetTopPools {
    pools(first: 5, orderBy: volumeUSD, orderDirection: desc) {
      id
      token0 {
        symbol
      }
      token1 {
        symbol
      }
      feesUSD
      volumeUSD
    }
  }
`;

function TopPools() {
  const { loading, error, data } = useQuery(GET_TOP_POOLS);

  if (loading) return <p>加载中...</p>;
  if (error) return <p>出错: {error.message}</p>;

  return (
    <div>
      <h2>Uniswap V2 最高交易量池</h2>
      <table>
        <thead>
          <tr>
            <th>交易池</th>
            <th>总费用 (USD)</th>
            <th>交易量 (USD)</th>
          </tr>
        </thead>
        <tbody>
          {data.pools.map((pool) => (
            <tr key={pool.id}>
              <td>{pool.token0.symbol} - {pool.token1.symbol}</td>
              <td>${parseFloat(pool.feesUSD).toLocaleString()}</td>
              <td>${parseFloat(pool.volumeUSD).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>Uniswap V2 子图使用示例</h1>
        <TopPools />
      </div>
    </ApolloProvider>
  );
}

export default App;
