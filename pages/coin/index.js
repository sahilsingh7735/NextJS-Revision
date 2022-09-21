import Head from "next/head";

export default function CoinData({ coinData }) {
  return (
    <div>
      <Head>
        <title>Coin List</title>
        <meta name="description" content="Coin List" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        {coinData.coins.map((coin) => {
          return (
            <div key={coin.id}>
              <h1> {coin.name}</h1>
              <img src={coin.icon} alt={coin.name} />
              <p> {coin.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const response = await fetch(
    `https://api.coinstats.app/public/v1/coins?skip=0`
  );
  const data = await response.json();

  return {
    props: {
      coinData: data,
    },
    revalidate: 10,
  };
};
