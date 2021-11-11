import * as api from "../api/index.js";
import { FETCH } from "../../constants/actionTypes";

const getEachBasketData = (tBasketData) => {
  const basketData = {
    invested_value: tBasketData[0]?.invested_value,
    current_value: tBasketData[0]?.current_value,
    percentage: tBasketData[0]?.return_percentage,
  };
  return basketData;
};

const getDetailsneeded = (obj, obj2) => {
  const tBasketData = obj2.filter(
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

// Action Creators
export const fetchData = () => async (dispatch) => {
  let baskets = [];
  try {
    const { data } = await api.fetchBaskets();
    const { data: basketData } = await api.fetchBasketData();
    baskets = data.map((eachData) => getDetailsneeded(eachData, basketData));
    console.log(baskets);
    dispatch({ type: FETCH, payload: baskets });
  } catch (error) {
    if (error.response) {
      console.log(error.response.data.message);
    } else {
      console.log(error);
    }
  }
};
