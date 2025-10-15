import { BarChart3, TrendingUp, Disc } from 'lucide-react';
import Button from '../atoms/Button';

interface ChartTypeSelectorProps {
  chartType: string;
  onChange: (type: string) => void;
}

export default function ChartTypeSelector({ chartType, onChange }: ChartTypeSelectorProps) {
  return (
    <div className="flex-1 min-w-[200px]">
      <label className="block text-gray-300 text-sm mb-2">Chart Type</label>
      <div className="flex gap-2">
        <Button
          onClick={() => onChange('bar')}
          isActive={chartType === 'bar'}
          icon={BarChart3}
          label="Bar"
          activeColor="bg-blue-600"
        />
        <Button
          onClick={() => onChange('line')}
          isActive={chartType === 'line'}
          icon={TrendingUp}
          label="Line"
          activeColor="bg-green-600"
        />
        <Button
          onClick={() => onChange('pie')}
          isActive={chartType === 'pie'}
          icon={Disc}
          label="Pie"
          activeColor="bg-purple-600"
        />
      </div>
    </div>
  );
}