import React from "react";
import { NumericFormat } from "react-number-format";
import { useSelector } from "react-redux";
import { productsSelector } from "../redux/productsSlice";
import Controls from "./Controls";

function Product() {
  const product = useSelector(productsSelector);

  return (
    <div className="cards">
      {product.map((pr) => (
        <div key={pr.id}>
          <div className="card-item">
            <img className="pr-image" src={pr.image} alt={pr.productName} />
            <div className="pr-name">{pr.productName}</div>
            <div className="pr-price">
              $
              <NumericFormat
                allowLeadingZeros
                thousandSeparator=","
                displayType="text"
                value={pr.productPrice}
              />
            </div>
            
            <Controls
              product={{
                id: pr.id,
                name: pr.productName,
                price: Number(pr.productPrice),
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Product;
