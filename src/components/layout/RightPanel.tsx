/**
 * RightPanel Component
 * Right side panel showing live example
 */

interface RightPanelProps {
  children: React.ReactNode;
}

/**
 * Right panel with live example display
 * Enhanced with better spacing, scrolling, and visual hierarchy
 */
export const RightPanel = ({ children }: RightPanelProps) => {
  return (
    <div className="w-full lg:w-1/2 bg-[var(--background)] border-t lg:border-t-0 lg:border-l border-[var(--border)]">
      <div className="sticky top-0 bg-[var(--panel)] border-b border-[var(--border)] px-6 py-4 z-10">
        <h2 className="text-lg sm:text-xl font-bold text-[var(--foreground)] flex items-center gap-2">
          <span className="text-2xl">▶️</span>
          <span>Live Example</span>
        </h2>
        <p className="text-sm text-[var(--foreground)] opacity-70 mt-1">
          Interactive demonstration
        </p>
      </div>
      
      <div className="overflow-y-auto h-[calc(100vh-8rem)] p-6 lg:p-8">
        <div className="w-full max-w-4xl mx-auto space-y-6">
          {children}
        </div>
      </div>
    </div>
  );
};
