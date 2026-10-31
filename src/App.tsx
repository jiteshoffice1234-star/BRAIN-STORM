import { useState, useMemo } from 'react';
import { Idea, Category, Priority, CARD_COLORS } from './types';
import { SEED_IDEAS } from './seedData';
import IdeaCard from './components/IdeaCard';
import AddIdeaModal from './components/AddIdeaModal';
import FilterBar from './components/FilterBar';
import StatsBar from './components/StatsBar';

const PRIORITY_ORDER: Record<Priority, number> = {
  critical: 4,
  high: 3,
  medium: 2,
  low: 1,
};

export default function App() {
  const [ideas, setIdeas] = useState<Idea[]>(SEED_IDEAS);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<Category | 'all'>('all');
  const [sortBy, setSortBy] = useState<'votes' | 'date' | 'priority'>('votes');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredIdeas = useMemo(() => {
    let result = [...ideas];

    // Filter by category
    if (activeCategory !== 'all') {
      result = result.filter((idea) => idea.category === activeCategory);
    }

    // Filter by search
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (idea) =>
          idea.title.toLowerCase().includes(query) ||
          idea.description.toLowerCase().includes(query) ||
          idea.techStack.some((t) => t.toLowerCase().includes(query)) ||
          idea.tags.some((t) => t.toLowerCase().includes(query))
      );
    }

    // Sort
    switch (sortBy) {
      case 'votes':
        result.sort((a, b) => b.votes - a.votes);
        break;
      case 'date':
        result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        break;
      case 'priority':
        result.sort((a, b) => PRIORITY_ORDER[b.priority] - PRIORITY_ORDER[a.priority]);
        break;
    }

    return result;
  }, [ideas, activeCategory, sortBy, searchQuery]);

  const handleAddIdea = (newIdea: {
    title: string;
    description: string;
    category: Category;
    priority: Priority;
    techStack: string[];
    tags: string[];
  }) => {
    const idea: Idea = {
      id: Date.now().toString(),
      ...newIdea,
      votes: 0,
      createdAt: new Date(),
      color: CARD_COLORS[Math.floor(Math.random() * CARD_COLORS.length)],
    };
    setIdeas([idea, ...ideas]);
  };

  const handleVote = (id: string) => {
    setIdeas(ideas.map((idea) => (idea.id === id ? { ...idea, votes: idea.votes + 1 } : idea)));
  };

  const handleDelete = (id: string) => {
    setIdeas(ideas.filter((idea) => idea.id !== id));
  };

  const totalVotes = ideas.reduce((sum, idea) => sum + idea.votes, 0);
  const uniqueCategories = new Set(ideas.map((idea) => idea.category)).size;

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-600/5 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <header className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-4">
            <span className="text-sm text-purple-300">✨ Brainstorm Mode Active</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-4">
            RepoBrain
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Your creative space to brainstorm, capture, and organize ideas for your next amazing repository.
            Let's build something incredible! 🚀
          </p>
        </header>

        {/* Stats */}
        <div className="mb-8">
          <StatsBar totalIdeas={ideas.length} totalVotes={totalVotes} categories={uniqueCategories} />
        </div>

        {/* Add Button */}
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setIsModalOpen(true)}
            className="group flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-2xl text-white font-bold text-lg shadow-xl shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-200 hover:scale-105"
          >
            <span className="text-2xl group-hover:rotate-12 transition-transform">💡</span>
            Add New Idea
          </button>
        </div>

        {/* Filters */}
        <div className="mb-8">
          <FilterBar
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            sortBy={sortBy}
            onSortChange={setSortBy}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />
        </div>

        {/* Ideas Grid */}
        {filteredIdeas.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredIdeas.map((idea) => (
              <IdeaCard
                key={idea.id}
                idea={idea}
                onVote={handleVote}
                onDelete={handleDelete}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-300 mb-2">No ideas found</h3>
            <p className="text-gray-500">
              {searchQuery
                ? 'Try a different search term'
                : 'Click "Add New Idea" to start brainstorming!'}
            </p>
          </div>
        )}

        {/* Footer */}
        <footer className="mt-16 text-center text-gray-600 text-sm">
          <p>Built with 💜 for creative developers</p>
          <p className="mt-1">Click cards to expand • Vote on your favorites • Build something amazing</p>
        </footer>
      </div>

      {/* Modal */}
      <AddIdeaModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={handleAddIdea}
      />
    </div>
  );
}
