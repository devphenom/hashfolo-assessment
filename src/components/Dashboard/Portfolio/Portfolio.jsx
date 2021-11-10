import { useEffect, useState } from "react";
import BasketCard, { Basket, BasketData, BasketImage } from "../../BasketCard";
import "./Portfolio.css";

const sampleAPI = {
  count: 2,
  next: null,
  previous: null,
  results: [
    {
      basket_id: 4,
      basket_items: [
        {
          coin_id: 8,
          coin_name: "Polygon",
          coin_ticker: "MATIC",
          coin_logo_url: "https://cryptocompare.com/media/37746047/matic.png",
          weightage: 11.0,
          basket: 4,
          coin: 3,
        },
        {
          coin_id: 7,
          coin_name: "Cardano",
          coin_ticker: "ADA",
          coin_logo_url: "https://cryptocompare.com/media/37746235/ada.png",
          weightage: 3.0,
          basket: 4,
          coin: 4,
        },
      ],
      next_review_date: "2021-09-22",
      no_of_coins: 2,
      manager_name: "M S",
      sebi_regn_no: "213123123123123",
      name: "Basket 20 Sep",
      description: "Description made on 20 Sep",
      subscription_fee: 10.0,
      review_date: "2021-09-22",
      review_freq: 7,
      methodology: "wdewfwe\r\newf\r\nwef\r\nw",
      factsheet_url: "https://www.check1234.com/pdf",
      volatility: "m",
      cagr: 11.0,
      basket_logo_url: "https://www.check1234.com/logo",
      enabled: true,
      manager: 1,
    },
    {
      basket_id: 3,
      basket_items: [
        {
          coin_id: 4,
          coin_name: "Cardano",
          coin_ticker: "ADA",
          coin_logo_url: "https://cryptocompare.com/media/37746235/ada.png",
          weightage: 100.0,
          basket: 3,
          coin: 4,
        },
      ],
      next_review_date: "2022-03-05",
      no_of_coins: 1,
      manager_name: "M S",
      sebi_regn_no: "213123123123123",
      name: "Generation 3",
      subscription_fee: 500.0,
      review_date: "2021-09-04",
      review_freq: 2,
      methodology: null,
      factsheet_url:
        "https://revix-prod-cdn-public.azureedge.net/assets/factsheets/Revix_RVX5Plat_Factsheet_20200612c.pdf",
      volatility: "h",
      cagr: 200.0,
      basket_logo_url:
        "https://api-dev.hashfolio.in/static/logos/baskets/basket.png",
      enabled: true,
      manager: 1,
    },
  ],
};

const sampleUserAPI = {
  basket_data: [
    {
      id: 3,
      invested_value: 100.0,
      current_value: 85.18,
      manager_name: "M S",
      return_percentage: -14.82,
    },
    {
      id: 2,
      invested_value: 100.0,
      current_value: 128.72,
      manager_name: "M S",
      return_percentage: 28.72,
    },
    {
      id: 1,
      invested_value: 750.0,
      current_value: 1007.99,
      manager_name: "M S",
      return_percentage: 34.4,
    },
  ],
  total_data: {
    total_invested_value: 950.0,
    total_current_value: 1221.89,
    return: 271.89,
    return_percentage: 28.62,
  },
};

const getEachBasketData = (tBasketData) => {
  const basketData = {
    invested_value: tBasketData[0]?.invested_value,
    current_value: tBasketData[0]?.current_value,
    percentage: tBasketData[0]?.return_percentage,
  };
  return basketData;
};

const getDetailsneeded = (obj, obj2) => {
  const tBasketData = obj2.basket_data.filter(
    (basketdata) => obj.basket_id === basketdata.id
  );

  const detailsNeeded = {
    image: obj.basket_logo_url,
    name: obj.name,
    assets: obj.basket_items.map((item) => item.coin_name),
    manager: obj.manager_name,
    data: getEachBasketData(tBasketData),
  };
  return detailsNeeded;
};

console.log(getDetailsneeded(sampleAPI.results[0], sampleUserAPI));
console.log(getDetailsneeded(sampleAPI.results[1], sampleUserAPI));

const Portfolio = () => {
  const [basketArray, setBasketArray] = useState([]);
  // const items = sampleAPI.results.map((res) =>
  //   res.basket_items.map((item) => item.coin_name)
  // );

  useEffect(() => {
    setBasketArray(
      sampleAPI.results.map((res) => getDetailsneeded(res, sampleUserAPI))
    );
  }, []);

  return (
    <section id="baskets">
      <div className="container-fluid">
        <div className="row">
          <div className="col px-0">
            <ul className="list-group list-group-flush p-0">
              {basketArray.map((basket, key) => (
                <BasketCard key={key}>
                  <BasketImage image={basket.image} />
                  <Basket
                    name={basket.name}
                    assets={basket.assets}
                    manager={basket.manager}
                  />
                  <BasketData
                    title="Investment Value"
                    value={basket.data.invested_value}
                  />
                  <BasketData
                    title="Current Value"
                    value={basket.data.current_value}
                  />
                  <BasketData
                    title="Percentage"
                    value={basket.data.percentage}
                    type="returns"
                  />
                </BasketCard>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
