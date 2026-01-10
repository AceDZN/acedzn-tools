import React from 'react';
import { parseMergeTags } from "@/utils/MergeTagParser";
import { SpanBlock } from "@/components/DynamicContent/blocks/SpanBlock";

interface ScientificTableProps {
    title?: string;
    headers: string[];
    rows: (string | number)[][];
    note?: string;
    variant?: 'blue' | 'amber' | 'emerald' | 'purple' | 'cyan' | 'orange';
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
        },
        purple: {
            header: 'bg-purple-600 text-white',
            border: 'border-purple-100',
            row: 'even:bg-purple-50/50',
            title: 'text-purple-700'
        },
        cyan: {
            header: 'bg-cyan-600 text-white',
            border: 'border-cyan-100',
            row: 'even:bg-cyan-50/50',
            title: 'text-cyan-700'
        },
        orange: {
            header: 'bg-orange-500 text-white',
            border: 'border-orange-100',
            row: 'even:bg-orange-50/50',
            title: 'text-orange-700'
        }
    };

    const theme = themes[variant] || themes.blue;

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
                                <th key={i} className="p-4 font-black whitespace-nowrap">
                                    {parseMergeTags(header).map((seg, idx) => <SpanBlock key={idx} block={seg} />)}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {rows.map((row, i) => (
                            <tr key={i} className={`hover:bg-slate-50 transition-colors ${theme.row}`}>
                                {row.map((val, j) => (
                                    <td key={j} className="p-4 font-medium text-slate-700">
                                        {parseMergeTags(String(val)).map((seg, idx) => <SpanBlock key={idx} block={seg} />)}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {note && (
                <div className="p-4 bg-slate-50 border-t border-slate-100">
                    <p className="text-sm text-slate-500 italic font-medium">
                        * {parseMergeTags(note).map((seg, idx) => <SpanBlock key={idx} block={seg} />)}
                    </p>
                </div>
            )}
        </div>
    );
};
