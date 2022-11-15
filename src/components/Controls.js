import  { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  buy,
  sell,
  moneySelector,
} from "../redux/productsSlice";

function Controls({ product }) {
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();
  const totalMoney = useSelector(moneySelector);
  

  const handleChange = (event) => {
    setValue(Number(event.target.value));
  };

  const handleBuyClick = (product) => {
    setValue(value + 1);
    dispatch(buy({ ...product, amount: 1 }));
  };

  const handleSellClick = (product) => {
    setValue(value - 1);
    dispatch(sell({ ...product, amount: 1 }));
  };

  return (
    <div className="controls">
      <button
        disabled={!value}
        onClick={() => handleSellClick(product)}
        className={`${value > 0 ? "ctrl-sell" : "disabled"}`}
      >
        Sell
      </button>

      <input
        onChange={handleChange}
        value={value < 0 ? 0 : value}
        type="number"
        className="ctrl-input"
        pattern="\d*"
      />
      <button
        disabled={product.price > totalMoney}
        onClick={() => handleBuyClick(product)}
        className={`${product.price > totalMoney ? "disabled" : "ctrl-buy"}`}
      >
        Buy
      </button>
    </div>
  );
}

export default Controls;
