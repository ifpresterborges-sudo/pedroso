import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  icon?: React.ElementType;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, icon: Icon }) => {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-2">
        {Icon && <div className="p-2 bg-red-100 rounded-lg text-red-600"><Icon size={24} /></div>}
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
      </div>
      {subtitle && <p className="text-gray-600 ml-1">{subtitle}</p>}
    </div>
  );
};
