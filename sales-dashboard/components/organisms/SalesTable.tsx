import { SalesDataItem } from '@/data/salesData';

interface SalesTableProps {
  data: SalesDataItem[];
  avgSales: number;
}

export default function SalesTable({ data, avgSales }: SalesTableProps) {
  return (
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
            {data.map((item, index) => (
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
  );
}