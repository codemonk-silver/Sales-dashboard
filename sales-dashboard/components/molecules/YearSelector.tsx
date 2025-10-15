interface YearSelectorProps {
  selectedYear: string;
  onChange: (year: string) => void;
}

export default function YearSelector({ selectedYear, onChange }: YearSelectorProps) {
  return (
    <div className="flex-1 min-w-[200px]">
      <label className="block text-gray-300 text-sm mb-2">Select Year</label>
      <select 
        value={selectedYear}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 border border-gray-600 focus:border-blue-500 focus:outline-none"
      >
        <option value="2022">2022</option>
        <option value="2023">2023</option>
        <option value="2024">2024</option>
      </select>
    </div>
  );
}