// components/ui/table.tsx
import React from 'react';

export const Table = ({ children, className }: any) => <table className={`min-w-full divide-y divide-gray-200 ${className}`}>{children}</table>;

export const TableHeader = ({ children }: any) => <thead className="bg-gray-50">{children}</thead>;

export const TableRow = ({ children }: any) => <tr>{children}</tr>;

export const TableHead = ({ children, className }: any) => (
  <th scope="col" className={`px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${className}`}>
    {children}
  </th>
);

export const TableBody = ({ children }: any) => <tbody className="bg-white divide-y divide-gray-200">{children}</tbody>;

export const TableCell = ({ children, className }: any) => (
  <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 ${className}`}>{children}</td>
);
