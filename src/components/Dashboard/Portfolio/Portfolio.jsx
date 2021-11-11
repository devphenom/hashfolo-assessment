import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../../redux/actions/basket";
import BasketCard, { Basket, BasketData, BasketImage } from "../../BasketCard";
import "./Portfolio.css";

const Portfolio = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  const baskets = useSelector((state) => state.basket);

  return (
    <section id="baskets">
      <div className="container-fluid">
        <div className="row">
          <div className="col px-0">
            <ul className="list-group list-group-flush p-0">
              {baskets?.map((basket, key) => (
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
