import YearSelector from '../molecules/YearSelector';
import ThresholdFilter from '../molecules/ThresholdFilter';
import ChartTypeSelector from '../molecules/ChartTypeSelector';

interface ControlPanelProps {
  selectedYear: string;
  onYearChange: (year: string) => void;
  threshold: string;
  onThresholdChange: (value: string) => void;
  chartType: string;
  onChartTypeChange: (type: string) => void;
}

export default function ControlPanel({
  selectedYear,
  onYearChange,
  threshold,
  onThresholdChange,
  chartType,
  onChartTypeChange
}: ControlPanelProps) {
  return (
    <div className="bg-gray-800 rounded-xl p-6 mb-6 shadow-xl">
      <div className="flex flex-wrap gap-4 items-center">
        <YearSelector selectedYear={selectedYear} onChange={onYearChange} />
        <ThresholdFilter value={threshold} onChange={onThresholdChange} />
        <ChartTypeSelector chartType={chartType} onChange={onChartTypeChange} />
      </div>
    </div>
  );
}