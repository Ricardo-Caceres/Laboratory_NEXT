'use client';

import { useState } from 'react';

interface Row {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
}

export default function AGGridExample() {
  const [data] = useState<Row[]>([
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Developer', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Designer', status: 'Active' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Manager', status: 'Inactive' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Developer', status: 'Active' },
    { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', role: 'QA', status: 'Active' },
  ]);

  const [sortField, setSortField] = useState<keyof Row>('id');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  const sortedData = [...data].sort((a, b) => {
    if (sortDirection === 'asc') {
      return a[sortField] > b[sortField] ? 1 : -1;
    }
    return a[sortField] < b[sortField] ? 1 : -1;
  });

  const handleSort = (field: keyof Row) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">AG Grid Style Table</h2>
      
      <div className="overflow-x-auto border border-[var(--border)] rounded-lg">
        <table className="w-full">
          <thead className="bg-[var(--panel)]">
            <tr>
              {(['id', 'name', 'email', 'role', 'status'] as const).map((field) => (
                <th
                  key={field}
                  onClick={() => handleSort(field)}
                  className="px-4 py-3 text-left text-sm font-semibold cursor-pointer hover:bg-[var(--border)] transition-colors"
                >
                  <div className="flex items-center gap-2">
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                    {sortField === field && (
                      <span className="text-xs">{sortDirection === 'asc' ? '↑' : '↓'}</span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sortedData.map((row, index) => (
              <tr
                key={row.id}
                className={`border-t border-[var(--border)] hover:bg-[var(--panel)] transition-colors ${
                  index % 2 === 0 ? 'bg-[var(--background)]' : 'bg-[var(--panel)]'
                }`}
              >
                <td className="px-4 py-3 text-sm">{row.id}</td>
                <td className="px-4 py-3 text-sm font-medium">{row.name}</td>
                <td className="px-4 py-3 text-sm opacity-70">{row.email}</td>
                <td className="px-4 py-3 text-sm">{row.role}</td>
                <td className="px-4 py-3 text-sm">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      row.status === 'Active'
                        ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100'
                        : 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100'
                    }`}
                  >
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-sm opacity-70">
        Click on column headers to sort. This demonstrates AG Grid's sorting capabilities.
      </p>
    </div>
  );
}
