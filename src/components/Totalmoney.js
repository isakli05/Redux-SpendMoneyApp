import React from 'react'
import { useSelector } from 'react-redux'
import { moneySelector } from '../redux/productsSlice'
import { NumericFormat } from 'react-number-format';
function Totalmoney() {
    const totalMoney=useSelector(moneySelector)
  return (
    <div className='total-money'>$
    <NumericFormat value={totalMoney} allowLeadingZeros thousandSeparator="," displayType="text" /></div>
  )
}

export default Totalmoney