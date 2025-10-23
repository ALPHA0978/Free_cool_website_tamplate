/**
 * useMeasure Hook
 * 
 * Custom hook wrapper for react-use-measure library.
 * Provides element dimension measurements for responsive animations.
 * 
 * Features:
 * - Real-time element size tracking
 * - Optimized for performance with ResizeObserver
 * - Returns width, height, and other measurements
 * - Essential for dynamic animations and layouts
 * 
 * @hook
 * @returns {Array} [ref, measurements] - Ref to attach and measurement object
 * 
 * @example
 * const [ref, { width, height }] = useMeasure();
 * 
 * return (
 *   <div ref={ref}>
 *     Size: {width} x {height}
 *   </div>
 * );
 */

import useMeasureLib from 'react-use-measure';

export default function useMeasure() {
  return useMeasureLib();
}