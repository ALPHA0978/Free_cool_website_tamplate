/**
 * InfiniteSlider Component
 * 
 * A smooth infinite scrolling slider with customizable speed and hover effects.
 * Automatically duplicates content for seamless looping animation.
 * 
 * Features:
 * - Infinite horizontal/vertical scrolling
 * - Hover speed control
 * - Automatic content duplication for seamless loops
 * - Configurable gap, duration, and direction
 * - Responsive design with dynamic measurements
 * 
 * @component
 * @param {React.ReactNode} children - Content to scroll
 * @param {number} gap - Space between items (default: 16)
 * @param {number} duration - Animation duration (default: 25)
 * @param {number} speed - Animation speed (default: 40)
 * @param {number} speedOnHover - Speed when hovered
 * @param {string} direction - Scroll direction ('horizontal' | 'vertical')
 * @param {boolean} reverse - Reverse scroll direction
 * @param {string} className - Additional CSS classes
 * 
 * @example
 * <InfiniteSlider speedOnHover={20} gap={32}>
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 * </InfiniteSlider>
 */

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";
import useMeasure from "react-use-measure";

function InfiniteSlider({
  children,
  gap = 16,
  duration = 25,
  speed = 40,
  speedOnHover,
  direction = "horizontal",
  reverse = false,
  className,
}) {
  const [currentDuration, setCurrentDuration] = useState(duration);
  const [ref, { width, height }] = useMeasure();

  const hoverProps = speedOnHover
    ? {
        onHoverStart: () => {
          setCurrentDuration(speedOnHover);
        },
        onHoverEnd: () => {
          setCurrentDuration(duration);
        },
      }
    : {};

  return (
    <div className={cn("overflow-hidden", className)}>
      <motion.div
        className="flex w-max"
        style={{
          gap: `${gap}px`,
          flexDirection: direction === "horizontal" ? "row" : "column",
        }}
        ref={ref}
        animate={{
          x: direction === "horizontal" ? [0, -(width + gap) / 2] : 0,
          y: direction === "vertical" ? [0, -(height + gap) / 2] : 0,
        }}
        transition={{
          duration: currentDuration,
          repeat: Infinity,
          ease: "linear",
        }}
        {...hoverProps}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}

export default InfiniteSlider;