'use client';

import { useState } from 'react';

interface UserStory {
  id: string;
  title: string;
  points: number;
  status: 'Backlog' | 'In Progress' | 'Review' | 'Done';
}

export default function ScrumExample() {
  const [currentSprint, setCurrentSprint] = useState(1);
  const [sprintDay, setSprintDay] = useState(1);
  const [stories, setStories] = useState<UserStory[]>([
    { id: 'US-1', title: 'User Authentication', points: 5, status: 'In Progress' },
    { id: 'US-2', title: 'Dashboard UI', points: 8, status: 'In Progress' },
    { id: 'US-3', title: 'API Integration', points: 13, status: 'Backlog' },
    { id: 'US-4', title: 'Error Handling', points: 3, status: 'Done' },
  ]);

  const moveStory = (id: string, newStatus: UserStory['status']) => {
    setStories(stories.map(s => s.id === id ? { ...s, status: newStatus } : s));
  };

  const getStatusColor = (status: UserStory['status']) => {
    switch (status) {
      case 'Backlog': return 'bg-gray-100 dark:bg-gray-800';
      case 'In Progress': return 'bg-blue-100 dark:bg-blue-900';
      case 'Review': return 'bg-yellow-100 dark:bg-yellow-900';
      case 'Done': return 'bg-green-100 dark:bg-green-900';
    }
  };

  const totalPoints = stories.reduce((sum, s) => sum + s.points, 0);
  const completedPoints = stories.filter(s => s.status === 'Done').reduce((sum, s) => sum + s.points, 0);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Scrum Board Demo</h2>

      <div className="mb-6 p-4 bg-[var(--panel)] border border-[var(--border)] rounded-lg">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="font-semibold text-lg">Sprint {currentSprint}</h3>
            <p className="text-sm opacity-70">Day {sprintDay} of 14</p>
          </div>
          <div className="text-right">
            <p className="text-sm opacity-70">Story Points</p>
            <p className="text-2xl font-bold text-[var(--primary)]">
              {completedPoints}/{totalPoints}
            </p>
          </div>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
          <div
            className="bg-[var(--primary)] h-3 rounded-full transition-all"
            style={{ width: `${(completedPoints / totalPoints) * 100}%` }}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        {(['Backlog', 'In Progress', 'Review', 'Done'] as const).map((status) => (
          <div key={status} className="p-4 bg-[var(--panel)] border border-[var(--border)] rounded-lg">
            <h3 className="font-semibold mb-3">{status}</h3>
            <div className="space-y-2">
              {stories.filter(s => s.status === status).map((story) => (
                <div
                  key={story.id}
                  className={`p-3 rounded-lg ${getStatusColor(status)} border border-[var(--border)]`}
                >
                  <p className="font-semibold text-sm">{story.title}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs opacity-70">{story.id}</span>
                    <span className="text-xs font-bold">{story.points} pts</span>
                  </div>
                  <div className="mt-2 flex gap-1">
                    {status !== 'Done' && (
                      <button
                        onClick={() => {
                          const statuses: UserStory['status'][] = ['Backlog', 'In Progress', 'Review', 'Done'];
                          const currentIndex = statuses.indexOf(status);
                          if (currentIndex < statuses.length - 1) {
                            moveStory(story.id, statuses[currentIndex + 1]);
                          }
                        }}
                        className="text-xs bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white px-2 py-1 rounded"
                      >
                        →
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-[var(--panel)] border border-[var(--border)] rounded-lg">
          <h3 className="font-semibold mb-2">Scrum Roles</h3>
          <ul className="space-y-1 text-sm">
            <li>👔 Product Owner</li>
            <li>🎯 Scrum Master</li>
            <li>👨‍💻 Development Team</li>
          </ul>
        </div>

        <div className="p-4 bg-[var(--panel)] border border-[var(--border)] rounded-lg">
          <h3 className="font-semibold mb-2">Sprint Events</h3>
          <ul className="space-y-1 text-sm">
            <li>📋 Sprint Planning</li>
            <li>☀️ Daily Scrum (15 min)</li>
            <li>🎬 Sprint Review</li>
            <li>🔄 Sprint Retrospective</li>
          </ul>
        </div>

        <div className="p-4 bg-[var(--panel)] border border-[var(--border)] rounded-lg">
          <h3 className="font-semibold mb-2">Core Values</h3>
          <ul className="space-y-1 text-sm">
            <li>💪 Commitment</li>
            <li>🎯 Focus</li>
            <li>🤝 Openness</li>
            <li>🙏 Respect</li>
            <li>⚡ Courage</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
