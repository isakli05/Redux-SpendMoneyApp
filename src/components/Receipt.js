import { useEffect } from "react";
import { NumericFormat } from "react-number-format";
import { useDispatch, useSelector } from "react-redux";
import {
  receiptSelector,
  productsSelector,
  receiptTotalSelector,
  calculateReceiptTotal,
} from "../redux/productsSlice";

function Receipt() {
  const receipts = useSelector(receiptSelector);
  const products = useSelector(productsSelector);
  const receiptTotal = useSelector(receiptTotalSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      calculateReceiptTotal(
        receipts.reduce((acc, item) => {
          return (
            acc +
            item.amount *
              products.find((product) => product.id === item.id).productPrice
          );
        }, 0)
      )
    );
  }, [receipts, products, dispatch]);

  return (
    <>
      {receipts.length > 0 && (
        <div className="receipt">
          <div className="head-receipt">Your Receipt</div>
          {receipts.map((rc) => (
            <div key={rc.id} className="receipt-items">
              <div className="item-name">{rc.name}</div>
              <div className="item-amount">x{rc.amount}</div>
              <div className="item-cost">${rc.amount * rc.price}</div>
            </div>
          ))}
          <div className="receipt-total">
            TOTAL
            <div>
              $
              <NumericFormat
                value={receiptTotal}
                allowLeadingZeros
                thousandSeparator=","
                displayType="text"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Receipt;
