import StatCard from '../atoms/StatCard';

interface StatsGridProps {
  yearlyTotal: number;
  avgSales: number;
  maxSales: number;
  minSales: number;
}

export default function StatsGrid({ yearlyTotal, avgSales, maxSales, minSales }: StatsGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
      <StatCard 
        title="Total Sales" 
        value={`$${(yearlyTotal / 1000).toFixed(0)}k`}
        gradient="from-blue-600 to-blue-700"
      />
      <StatCard 
        title="Average Sales" 
        value={`$${(avgSales / 1000).toFixed(0)}k`}
        gradient="from-green-600 to-green-700"
      />
      <StatCard 
        title="Highest Month" 
        value={`$${(maxSales / 1000).toFixed(0)}k`}
        gradient="from-purple-600 to-purple-700"
      />
      <StatCard 
        title="Lowest Month" 
        value={`$${(minSales / 1000).toFixed(0)}k`}
        gradient="from-orange-600 to-orange-700"
      />
    </div>
  );
}