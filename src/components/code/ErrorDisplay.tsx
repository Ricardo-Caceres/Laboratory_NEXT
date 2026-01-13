/**
 * ErrorDisplay Component
 * Displays error state for code loading
 */

interface ErrorDisplayProps {
  error: Error;
  onRetry?: () => void;
}

export const ErrorDisplay = ({ error, onRetry }: ErrorDisplayProps) => {
  return (
    <div className="bg-red-900/20 border border-red-500/50 text-white p-4 rounded-lg">
      <div className="flex items-start space-x-3">
        <svg 
          className="h-6 w-6 text-red-500 flex-shrink-0" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
          />
        </svg>
        <div className="flex-1">
          <h3 className="font-semibold mb-1">Error Loading Code</h3>
          <p className="text-sm text-red-200">{error.message}</p>
          {onRetry && (
            <button
              onClick={onRetry}
              className="mt-2 text-sm bg-red-600 hover:bg-red-700 px-3 py-1 rounded transition-colors"
            >
              Try Again
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
