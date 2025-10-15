import { Filter } from 'lucide-react';

interface ThresholdFilterProps {
  value: string;
  onChange: (value: string) => void;
}

export default function ThresholdFilter({ value, onChange }: ThresholdFilterProps) {
  return (
    <div className="flex-1 min-w-[200px]">
      <label className="block text-gray-300 text-sm mb-2 flex items-center gap-2">
        <Filter size={16} />
        Sales Threshold
      </label>
      <input 
        type="number"
        placeholder="e.g., 60000"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 border border-gray-600 focus:border-blue-500 focus:outline-none"
      />
    </div>
  );
}