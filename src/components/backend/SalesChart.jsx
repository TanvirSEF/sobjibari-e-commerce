import React from 'react'
import WeeklySalesChart from './WeeklySalesChart'
import BestSaleProducts from './BestSaleProducts'

export default function SalesChart() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
      <WeeklySalesChart/>
      <BestSaleProducts/>
    </div>
  )
}
