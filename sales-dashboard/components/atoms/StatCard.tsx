interface StatCardProps {
  title: string;
  value: string;
  gradient: string;
}

export default function StatCard({ title, value, gradient }: StatCardProps) {
  return (
    <div className={`bg-gradient-to-br ${gradient} rounded-xl p-6 shadow-xl`}>
      <div className="text-blue-100 text-sm mb-1">{title}</div>
      <div className="text-3xl font-bold text-white">{value}</div>
    </div>
  );
}