项目概览

这个项目旨在展示如何使用GraphQL和The Graph来与uniswap协议交互。它包含了一个基本的前端应用程序，该应用程序使用GraphQL查询来获取和展示uniswap的数据。

核心特性

GraphQL支持：通过GraphQL模式定义，可以查询uniswap的各种数据，包括交易、池、代币等。
实时数据：利用The Graph的订阅功能，可以实时接收uniswap网络上的事件和更新。
快速开始
安装依赖：

bash
npm install

启动项目：

bash
npm start

探索GraphQL：

使用GraphQL Playground或任何支持GraphQL的客户端来探索和测试定义在schema.graphql中的查询和订阅。
GraphQL模式定义
以下是schema.graphql中定义的一些核心类型和查询示例：

Bundle：包含有关以太坊价格的信息。
Pool：包含有关流动性池的详细信息，如流动性、交易量等。
Swap：记录交换事件的详细信息，包括代币数量和价格。
Token：包含有关代币的统计信息，如总供应量、交易量等。
查询示例
graphql
query {
  bundle {
    id
    ethPriceUSD
  }
}

query {
  pool(id: "YOUR_POOL_ID") {
    id
    token0 {
      id
      symbol
    }
    token1 {
      id
      symbol
    }
    liquidity
  }
}
贡献
欢迎任何形式的贡献！如果你有任何问题或建议，请随时提交issue或pull request。

许可证
本项目采用ISC许可证。
