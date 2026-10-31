import { useState } from 'react';
import { Idea, CATEGORY_CONFIG, PRIORITY_CONFIG } from '../types';

interface IdeaCardProps {
  idea: Idea;
  onVote: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function IdeaCard({ idea, onVote, onDelete }: IdeaCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const category = CATEGORY_CONFIG[idea.category];
  const priority = PRIORITY_CONFIG[idea.priority];

  return (
    <div
      className={`relative bg-gradient-to-br ${idea.color} border rounded-2xl p-5 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/10 cursor-pointer group`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Delete button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onDelete(idea.id);
        }}
        className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity text-red-400 hover:text-red-300 text-lg"
      >
        ✕
      </button>

      {/* Header */}
      <div className="flex items-start gap-3 mb-3">
        <span className="text-2xl">{category.emoji}</span>
        <div className="flex-1 min-w-0">
          <h3 className="text-white font-bold text-lg leading-tight truncate">
            {idea.title}
          </h3>
          <div className="flex items-center gap-2 mt-1">
            <span className={`text-xs ${priority.color}`}>
              {priority.emoji} {priority.label}
            </span>
            <span className="text-xs text-gray-400">•</span>
            <span className="text-xs text-gray-400">{category.label}</span>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className={`text-gray-300 text-sm leading-relaxed ${isExpanded ? '' : 'line-clamp-2'}`}>
        {idea.description}
      </p>

      {/* Tech Stack */}
      {idea.techStack.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-3">
          {idea.techStack.slice(0, isExpanded ? undefined : 3).map((tech, i) => (
            <span
              key={i}
              className="px-2 py-0.5 bg-white/10 rounded-full text-xs text-gray-300 border border-white/10"
            >
              {tech}
            </span>
          ))}
          {!isExpanded && idea.techStack.length > 3 && (
            <span className="px-2 py-0.5 text-xs text-gray-500">
              +{idea.techStack.length - 3}
            </span>
          )}
        </div>
      )}

      {/* Tags */}
      {idea.tags.length > 0 && isExpanded && (
        <div className="flex flex-wrap gap-1.5 mt-2">
          {idea.tags.map((tag, i) => (
            <span
              key={i}
              className="px-2 py-0.5 bg-purple-500/20 rounded-full text-xs text-purple-300 border border-purple-500/20"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between mt-4 pt-3 border-t border-white/10">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onVote(idea.id);
          }}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-white/20 rounded-full transition-colors text-sm"
        >
          <span>👍</span>
          <span className="text-white font-medium">{idea.votes}</span>
        </button>
        <span className="text-xs text-gray-500">
          {new Date(idea.createdAt).toLocaleDateString()}
        </span>
      </div>
    </div>
  );
}
