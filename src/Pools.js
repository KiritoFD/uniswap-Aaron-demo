import React from 'react';
import { gql, useQuery } from '@apollo/client';

// 定义 GraphQL 查询
const GET_POOLS = gql`
  {
    pools(first: 5) {
      id
      feesUSD
      token0 {
        symbol
      }
      token1 {
        symbol
      }
      volumeUSD
    }
  }
`;

// 创建 React 组件
function Pools() {
    const { loading, error, data } = useQuery(GET_POOLS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h2>Top Pools</h2>
            <ul>
                {data.pools.map((pool) => (
                    <li key={pool.id}>
                        <strong>{pool.token0.symbol} / {pool.token1.symbol}</strong>
                        <p>Fees (USD): {pool.feesUSD}</p>
                        <p>Volume (USD): {pool.volumeUSD}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Pools;
