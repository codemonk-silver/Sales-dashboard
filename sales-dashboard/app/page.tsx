'use client';

import { useState } from 'react';
import { salesData } from '@/data/salesData';
import StatsGrid from '@/components/molecules/StatsGrid';
import ControlPanel from '@/components/organisms/ControlPanel';
import ChartContainer from '@/components/organisms/ChartContainer';
import SalesTable from '@/components/organisms/SalesTable';

export default function SalesDashboard() {
  const [selectedYear, setSelectedYear] = useState('2024');
  const [chartType, setChartType] = useState('bar');
  const [salesThreshold, setSalesThreshold] = useState('');

  const filteredData = salesData.filter(item => item.year === selectedYear);
  
  const thresholdFilteredData = salesThreshold 
    ? filteredData.filter(item => item.sales >= parseInt(salesThreshold))
    : filteredData;

  const yearlyTotal = filteredData.reduce((sum, item) => sum + item.sales, 0);
  const avgSales = Math.round(yearlyTotal / filteredData.length);
  const maxSales = Math.max(...filteredData.map(item => item.sales));
  const minSales = Math.min(...filteredData.map(item => item.sales));

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Sales Dashboard</h1>
          <p className="text-gray-400">Track and analyze sales performance across years</p>
        </div>

        <StatsGrid 
          yearlyTotal={yearlyTotal}
          avgSales={avgSales}
          maxSales={maxSales}
          minSales={minSales}
        />

        <ControlPanel
          selectedYear={selectedYear}
          onYearChange={setSelectedYear}
          threshold={salesThreshold}
          onThresholdChange={setSalesThreshold}
          chartType={chartType}
          onChartTypeChange={setChartType}
        />

        <div className="bg-gray-800 rounded-xl p-6 shadow-xl">
          <h2 className="text-2xl font-semibold text-white mb-6">
            {selectedYear} Sales Performance {salesThreshold && `(Above $${parseInt(salesThreshold).toLocaleString()})`}
          </h2>
          <ChartContainer chartType={chartType} data={thresholdFilteredData} />
        </div>

        <SalesTable data={thresholdFilteredData} avgSales={avgSales} />
      </div>
    </div>
  );
}