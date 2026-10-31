export type Category = 'web-app' | 'cli-tool' | 'library' | 'api' | 'game' | 'ai-ml' | 'dev-tool' | 'mobile' | 'other';

export type Priority = 'low' | 'medium' | 'high' | 'critical';

export interface Idea {
  id: string;
  title: string;
  description: string;
  category: Category;
  priority: Priority;
  techStack: string[];
  tags: string[];
  votes: number;
  createdAt: Date;
  color: string;
}

export const CATEGORY_CONFIG: Record<Category, { label: string; emoji: string; color: string }> = {
  'web-app': { label: 'Web App', emoji: '🌐', color: 'bg-blue-500' },
  'cli-tool': { label: 'CLI Tool', emoji: '⌨️', color: 'bg-green-500' },
  'library': { label: 'Library', emoji: '📦', color: 'bg-purple-500' },
  'api': { label: 'API', emoji: '🔌', color: 'bg-orange-500' },
  'game': { label: 'Game', emoji: '🎮', color: 'bg-red-500' },
  'ai-ml': { label: 'AI/ML', emoji: '🤖', color: 'bg-pink-500' },
  'dev-tool': { label: 'Dev Tool', emoji: '🛠️', color: 'bg-yellow-500' },
  'mobile': { label: 'Mobile', emoji: '📱', color: 'bg-teal-500' },
  'other': { label: 'Other', emoji: '✨', color: 'bg-gray-500' },
};

export const PRIORITY_CONFIG: Record<Priority, { label: string; emoji: string; color: string }> = {
  'low': { label: 'Low', emoji: '🟢', color: 'text-green-400' },
  'medium': { label: 'Medium', emoji: '🟡', color: 'text-yellow-400' },
  'high': { label: 'High', emoji: '🟠', color: 'text-orange-400' },
  'critical': { label: 'Critical', emoji: '🔴', color: 'text-red-400' },
};

export const CARD_COLORS = [
  'from-violet-500/20 to-purple-600/20 border-violet-500/30',
  'from-blue-500/20 to-cyan-600/20 border-blue-500/30',
  'from-emerald-500/20 to-teal-600/20 border-emerald-500/30',
  'from-orange-500/20 to-amber-600/20 border-orange-500/30',
  'from-pink-500/20 to-rose-600/20 border-pink-500/30',
  'from-indigo-500/20 to-blue-600/20 border-indigo-500/30',
];
