import { Category, CATEGORY_CONFIG } from '../types';

interface FilterBarProps {
  activeCategory: Category | 'all';
  onCategoryChange: (category: Category | 'all') => void;
  sortBy: 'votes' | 'date' | 'priority';
  onSortChange: (sort: 'votes' | 'date' | 'priority') => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export default function FilterBar({
  activeCategory,
  onCategoryChange,
  sortBy,
  onSortChange,
  searchQuery,
  onSearchChange,
}: FilterBarProps) {
  return (
    <div className="space-y-4">
      {/* Search */}
      <div className="relative">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search ideas..."
          className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
        />
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onCategoryChange('all')}
          className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
            activeCategory === 'all'
              ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/25'
              : 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700'
          }`}
        >
          🎯 All
        </button>
        {Object.entries(CATEGORY_CONFIG).map(([key, config]) => (
          <button
            key={key}
            onClick={() => onCategoryChange(key as Category)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
              activeCategory === key
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/25'
                : 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700'
            }`}
          >
            {config.emoji} {config.label}
          </button>
        ))}
      </div>

      {/* Sort */}
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-400">Sort by:</span>
        {[
          { key: 'votes', label: '🔥 Popular' },
          { key: 'date', label: '🕐 Recent' },
          { key: 'priority', label: '⚡ Priority' },
        ].map(({ key, label }) => (
          <button
            key={key}
            onClick={() => onSortChange(key as 'votes' | 'date' | 'priority')}
            className={`px-3 py-1.5 rounded-lg text-sm transition-all ${
              sortBy === key
                ? 'bg-gray-700 text-white'
                : 'text-gray-500 hover:text-gray-300'
            }`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
