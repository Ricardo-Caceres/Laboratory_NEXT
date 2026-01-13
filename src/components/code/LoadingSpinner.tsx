/**
 * LoadingSpinner Component
 * Displays loading state for code
 */

export const LoadingSpinner = () => {
  return (
    <div className="bg-gray-800 text-white p-3 sm:p-4 rounded-lg text-sm sm:text-base flex items-center justify-center">
      <div className="flex items-center space-x-2">
        <div className="animate-spin h-5 w-5 border-2 border-cyan-500 border-t-transparent rounded-full" />
        <span>Loading code...</span>
      </div>
    </div>
  );
};
