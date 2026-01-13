/**
 * RightPanel Component
 * Right side panel showing live example
 */

interface RightPanelProps {
  children: React.ReactNode;
}

/**
 * Right panel with live example display
 */
export const RightPanel = ({ children }: RightPanelProps) => {
  return (
    <div className="w-full lg:w-1/2 flex flex-col items-center justify-center bg-[var(--background)] p-4 sm:p-6 min-h-[400px] lg:min-h-0">
      <div className="w-full max-w-4xl">{children}</div>
    </div>
  );
};
