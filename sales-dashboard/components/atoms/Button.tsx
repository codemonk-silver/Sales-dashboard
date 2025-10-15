import { LucideIcon } from 'lucide-react';

interface ButtonProps {
  onClick: () => void;
  isActive: boolean;
  icon: LucideIcon;
  label: string;
  activeColor: string;
}

export default function Button({ onClick, isActive, icon: Icon, label, activeColor }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg transition-all ${
        isActive 
          ? `${activeColor} text-white` 
          : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
      }`}
    >
      <Icon size={18} />
      {label}
    </button>
  );
}