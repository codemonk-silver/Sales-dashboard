import React, { useState } from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Filter, BarChart3, LineChart as LineChartIcon, PieChart as PieChartIcon } from 'lucide-react';

// Mock sales data for 2022, 2023, 2024
const salesData = [
  { year: '2022', sales: 45000, month: 'Jan' },
  { year: '2022', sales: 52000, month: 'Feb' },
  { year: '2022', sales: 48000, month: 'Mar' },
  { year: '2022', sales: 61000, month: 'Apr' },
  { year: '2022', sales: 55000, month: 'May' },
  { year: '2022', sales: 67000, month: 'Jun' },
  { year: '2022', sales: 58000, month: 'Jul' },
  { year: '2022', sales: 72000, month: 'Aug' },
  { year: '2022', sales: 63000, month: 'Sep' },
  { year: '2022', sales: 69000, month: 'Oct' },
  { year: '2022', sales: 78000, month: 'Nov' },
  { year: '2022', sales: 85000, month: 'Dec' },
  
  { year: '2023', sales: 48000, month: 'Jan' },
  { year: '2023', sales: 56000, month: 'Feb' },
  { year: '2023', sales: 52000, month: 'Mar' },
  { year: '2023', sales: 65000, month: 'Apr' },
  { year: '2023', sales: 61000, month: 'May' },
  { year: '2023', sales: 73000, month: 'Jun' },
  { year: '2023', sales: 68000, month: 'Jul' },
  { year: '2023', sales: 79000, month: 'Aug' },
  { year: '2023', sales: 71000, month: 'Sep' },
  { year: '2023', sales: 76000, month: 'Oct' },
  { year: '2023', sales: 84000, month: 'Nov' },
  { year: '2023', sales: 92000, month: 'Dec' },
  
  { year: '2024', sales: 53000, month: 'Jan' },
  { year: '2024', sales: 61000, month: 'Feb' },
  { year: '2024', sales: 58000, month: 'Mar' },
  { year: '2024', sales: 71000, month: 'Apr' },
  { year: '2024', sales: 68000, month: 'May' },
  { year: '2024', sales: 81000, month: 'Jun' },
  { year: '2024', sales: 76000, month: 'Jul' },
  { year: '2024', sales: 88000, month: 'Aug' },
  { year: '2024', sales: 79000, month: 'Sep' },
  { year: '2024', sales: 85000, month: 'Oct' },
  { year: '2024', sales: 93000, month: 'Nov' },
  { year: '2024', sales: 102000, month: 'Dec' },
];

const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#EC4899'];

const SalesDashboard = () => {
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

  const renderChart = () => {
    switch(chartType) {
      case 'bar':
        return (
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={thresholdFilteredData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="month" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1F2937', border: 'none', borderRadius: '8px' }}
                labelStyle={{ color: '#F9FAFB' }}
              />
              <Legend />
              <Bar dataKey="sales" fill="#3B82F6" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        );
      
      case 'line':
        return (
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={thresholdFilteredData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="month" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1F2937', border: 'none', borderRadius: '8px' }}
                labelStyle={{ color: '#F9FAFB' }}
              />
              <Legend />
              <Line type="monotone" dataKey="sales" stroke="#10B981" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        );
      
      case 'pie':
        return (
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={thresholdFilteredData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={(entry) => `${entry.month}: $${(entry.sales / 1000).toFixed(0)}k`}
                outerRadius={120}
                fill="#8884d8"
                dataKey="sales"
              >
                {thresholdFilteredData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ backgroundColor: '#1F2937', border: 'none', borderRadius: '8px' }}
              />
            </PieChart>
          </ResponsiveContainer>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Sales Dashboard</h1>
          <p className="text-gray-400">Track and analyze sales performance across years</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-6 shadow-xl">
            <div className="text-blue-100 text-sm mb-1">Total Sales</div>
            <div className="text-3xl font-bold text-white">${(yearlyTotal / 1000).toFixed(0)}k</div>
          </div>
          <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-xl p-6 shadow-xl">
            <div className="text-green-100 text-sm mb-1">Average Sales</div>
            <div className="text-3xl font-bold text-white">${(avgSales / 1000).toFixed(0)}k</div>
          </div>
          <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl p-6 shadow-xl">
            <div className="text-purple-100 text-sm mb-1">Highest Month</div>
            <div className="text-3xl font-bold text-white">${(maxSales / 1000).toFixed(0)}k</div>
          </div>
          <div className="bg-gradient-to-br from-orange-600 to-orange-700 rounded-xl p-6 shadow-xl">
            <div className="text-orange-100 text-sm mb-1">Lowest Month</div>
            <div className="text-3xl font-bold text-white">${(minSales / 1000).toFixed(0)}k</div>
          </div>
        </div>

        {/* Controls */}
        <div className="bg-gray-800 rounded-xl p-6 mb-6 shadow-xl">
          <div className="flex flex-wrap gap-4 items-center">
            {/* Year Selector */}
            <div className="flex-1 min-w-[200px]">
              <label className="block text-gray-300 text-sm mb-2">Select Year</label>
              <select 
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 border border-gray-600 focus:border-blue-500 focus:outline-none"
              >
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
              </select>
            </div>

            {/* Threshold Filter */}
            <div className="flex-1 min-w-[200px]">
              <label className="block text-gray-300 text-sm mb-2 flex items-center gap-2">
                <Filter size={16} />
                Sales Threshold
              </label>
              <input 
                type="number"
                placeholder="e.g., 60000"
                value={salesThreshold}
                onChange={(e) => setSalesThreshold(e.target.value)}
                className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 border border-gray-600 focus:border-blue-500 focus:outline-none"
              />
            </div>

            {/* Chart Type Selector */}
            <div className="flex-1 min-w-[200px]">
              <label className="block text-gray-300 text-sm mb-2">Chart Type</label>
              <div className="flex gap-2">
                <button
                  onClick={() => setChartType('bar')}
                  className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg transition-all ${
                    chartType === 'bar' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  <BarChart3 size={18} />
                  Bar
                </button>
                <button
                  onClick={() => setChartType('line')}
                  className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg transition-all ${
                    chartType === 'line' 
                      ? 'bg-green-600 text-white' 
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  <LineChartIcon size={18} />
                  Line
                </button>
                <button
                  onClick={() => setChartType('pie')}
                  className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg transition-all ${
                    chartType === 'pie' 
                      ? 'bg-purple-600 text-white' 
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  <PieChartIcon size={18} />
                  Pie
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Chart */}
        <div className="bg-gray-800 rounded-xl p-6 shadow-xl">
          <h2 className="text-2xl font-semibold text-white mb-6">
            {selectedYear} Sales Performance {salesThreshold && `(Above $${parseInt(salesThreshold).toLocaleString()})`}
          </h2>
          {renderChart()}
        </div>

        {/* Data Table */}
        <div className="bg-gray-800 rounded-xl p-6 mt-6 shadow-xl">
          <h2 className="text-2xl font-semibold text-white mb-4">Monthly Breakdown</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left text-gray-300 py-3 px-4">Month</th>
                  <th className="text-right text-gray-300 py-3 px-4">Sales</th>
                  <th className="text-right text-gray-300 py-3 px-4">vs Average</th>
                </tr>
              </thead>
              <tbody>
                {thresholdFilteredData.map((item, index) => (
                  <tr key={index} className="border-b border-gray-700 hover:bg-gray-750">
                    <td className="text-white py-3 px-4">{item.month}</td>
                    <td className="text-white text-right py-3 px-4">${item.sales.toLocaleString()}</td>
                    <td className={`text-right py-3 px-4 font-semibold ${
                      item.sales > avgSales ? 'text-green-400' : 'text-orange-400'
                    }`}>
                      {item.sales > avgSales ? '+' : ''}{((item.sales - avgSales) / avgSales * 100).toFixed(1)}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesDashboard;