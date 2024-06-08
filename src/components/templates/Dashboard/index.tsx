import React, { useEffect } from 'react';
import WrapperCard from '../../organisms/WrapperCard';
import Card from '../../molecules/Card';
import Table from '../../organisms/Table';
import { formatPrice } from '../../../utils/formatPrice';
import { useCryptoStore } from '../../../store/cryptoStore';
import PieChart from '../../organisms/PieChart';

const Dashboard: React.FC = () => {
  const { trending, fetchTrending } = useCryptoStore();
  // const { coinsCategory, fetchCoinsCategory } = useCryptoStore();

  useEffect(() => {
    fetchTrending();
  }, [fetchTrending]);

  const Trending = ({ data }: any) => {
    useEffect(() => {
      if (data) {
        console.log(data.data)
      }
    }, [data])
    return (
      <>
        <p>${formatPrice(data?.data?.total_market_cap.usd)}</p>
      </>
    )
  }
  
  const Volume = ({ data }: any) => {
    return (
      <>
        <p>${formatPrice(data?.data?.total_volume.usd)}</p>
      </>
    )
  }

  return (
    <div className="container-lg mx-auto p-2 md:p-4 flex flex-col gap-4 bg-[#eee]">
      <WrapperCard columns={2}>
        <Card title="Market Cap" content={Object.keys(trending).length > 0 ? <Trending data={trending} /> : null} />
        <Card title="24h Trading Volume" content={Object.keys(trending).length > 0 ? <Volume data={trending} /> : null} />
      </WrapperCard>
      <WrapperCard columns={1}>
        <Card title="Top 10 Cryptocurrencies" content={<PieChart />} />
      </WrapperCard>
      <WrapperCard columns={1}>
        <Card title="Top 100 Cryptocurrencies" content={<Table />} />
      </WrapperCard>
      {/* <WrapperCard columns={1} ignoreColumnsOnMobile={false}>
        <Card title="Top 100 Cryptocurrencies" content={<CryptoList />} />
      </WrapperCard> */}
    </div>
  );
};

export default Dashboard;
