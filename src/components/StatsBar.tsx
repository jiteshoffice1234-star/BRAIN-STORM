interface StatsBarProps {
  totalIdeas: number;
  totalVotes: number;
  categories: number;
}

export default function StatsBar({ totalIdeas, totalVotes, categories }: StatsBarProps) {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 border border-purple-500/20 rounded-2xl p-4 text-center">
        <div className="text-3xl font-bold text-white">{totalIdeas}</div>
        <div className="text-sm text-gray-400 mt-1">💡 Ideas</div>
      </div>
      <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-500/20 rounded-2xl p-4 text-center">
        <div className="text-3xl font-bold text-white">{totalVotes}</div>
        <div className="text-sm text-gray-400 mt-1">👍 Votes</div>
      </div>
      <div className="bg-gradient-to-br from-emerald-500/10 to-emerald-600/10 border border-emerald-500/20 rounded-2xl p-4 text-center">
        <div className="text-3xl font-bold text-white">{categories}</div>
        <div className="text-sm text-gray-400 mt-1">📂 Categories</div>
      </div>
    </div>
  );
}
