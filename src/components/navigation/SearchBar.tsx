/**
 * Search Bar Component
 * Integrated search for navigation items
 */

'use client';

import { Search, X } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onClear: () => void;
}

export const SearchBar = ({ value, onChange, onClear }: SearchBarProps) => {
  return (
    <div className="hidden md:flex relative flex-1 max-w-md">
      <Search 
        className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--foreground)] opacity-50" 
        aria-hidden="true"
      />
      <input
        type="search"
        placeholder="Buscar módulos..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full pl-10 pr-10 py-2 text-sm bg-[var(--background)] border border-[var(--border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent placeholder:text-[var(--foreground)] placeholder:opacity-50 transition-all"
        aria-label="Search modules"
      />
      {value && (
        <button
          onClick={onClear}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--foreground)] opacity-50 hover:opacity-100 transition-opacity"
          aria-label="Clear search"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
};
