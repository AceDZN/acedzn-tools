import React from 'react';

interface TableRow {
  [key: string]: string | number;
}

interface ScientificTableProps {
  title?: string;
  headers: string[];
  rows: TableRow[];
  note?: string;
  variant?: 'blue' | 'amber' | 'emerald';
}

export const ScientificTable: React.FC<ScientificTableProps> = ({ 
  title, 
  headers, 
  rows, 
  note,
  variant = 'blue' 
}) => {
  const themes = {
    blue: {
      header: 'bg-blue-600 text-white',
      border: 'border-blue-100',
      row: 'even:bg-blue-50/50',
      title: 'text-blue-700'
    },
    amber: {
      header: 'bg-amber-500 text-white',
      border: 'border-amber-100',
      row: 'even:bg-amber-50/50',
      title: 'text-amber-700'
    },
    emerald: {
      header: 'bg-emerald-600 text-white',
      border: 'border-emerald-100',
      row: 'even:bg-emerald-50/50',
      title: 'text-emerald-700'
    }
  };

  const theme = themes[variant];

  return (
    <div className="my-8 overflow-hidden rounded-[2rem] border-2 border-slate-100 shadow-sm bg-white">
      {title && (
        <div className="p-6 border-b border-slate-100">
          <h4 className={`text-xl font-black ${theme.title}`}>{title}</h4>
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="w-full text-right border-collapse">
          <thead>
            <tr className={theme.header}>
              {headers.map((header, i) => (
                <th key={i} className="p-4 font-black whitespace-nowrap">{header}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {rows.map((row, i) => (
              <tr key={i} className={`hover:bg-slate-50 transition-colors ${theme.row}`}>
                {Object.values(row).map((val, j) => (
                  <td key={j} className="p-4 font-medium text-slate-700">{val}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {note && (
        <div className="p-4 bg-slate-50 border-t border-slate-100">
          <p className="text-sm text-slate-500 italic font-medium">* {note}</p>
        </div>
      )}
    </div>
  );
};
