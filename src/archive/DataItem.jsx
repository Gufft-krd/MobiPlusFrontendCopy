import React from 'react';

function DataItem({ icon, label, children }) {
  return (
    <div className="flex items-center gap-4 py-2">
      <span className="flex items-center gap-2 font-medium text-gray-700">
        {icon}
        <span>{label}</span>
      </span>
      {children}
    </div>
  );
}

export default DataItem;