/**
 * Format URL segment to user-friendly display name
 * 
 * @param segment - URL segment to format
 * @param segmentMap - Optional mapping of segments to names
 * @returns Formatted segment name
 * 
 * @example
 * formatSegment('react-hooks') // 'React Hooks'
 * formatSegment('[id]') // 'Id'
 * formatSegment('123') // 'ID: 123'
 */
export const formatSegment = (
  segment: string,
  segmentMap?: Record<string, string>
): string => {
  // Check if we have a custom name for this segment
  if (segmentMap?.[segment]) {
    return segmentMap[segment];
  }
  
  // Handle dynamic routes [id], [slug], etc.
  if (segment.startsWith('[') && segment.endsWith(']')) {
    const param = segment.slice(1, -1);
    return `${param.charAt(0).toUpperCase()}${param.slice(1)}`;
  }
  
  // Handle numeric IDs
  if (/^\d+$/.test(segment)) {
    return `ID: ${segment}`;
  }
  
  // Default formatting: split by dash and capitalize
  return segment
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};
