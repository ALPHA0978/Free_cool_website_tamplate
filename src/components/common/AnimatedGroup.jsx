/**
 * AnimatedGroup Component
 * 
 * A reusable animation wrapper that applies staggered animations to child elements.
 * Supports multiple animation presets and custom variants.
 * 
 * Features:
 * - Staggered child animations with configurable delays
 * - Multiple preset animations (fade, slide, blur-slide)
 * - Custom animation variants support
 * - Automatic child element wrapping with motion.div
 * 
 * @component
 * @param {React.ReactNode} children - Child elements to animate
 * @param {string} className - Additional CSS classes
 * @param {Object} variants - Custom animation variants
 * @param {string} preset - Preset animation type ('fade', 'slide', 'blur-slide')
 * 
 * @example
 * <AnimatedGroup preset="slide">
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 * </AnimatedGroup>
 */

import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

const defaultContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const defaultItemVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const presetVariants = {
  fade: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
  },
  slide: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    },
  },
  "blur-slide": {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, filter: "blur(4px)", y: 20 },
      visible: { opacity: 1, filter: "blur(0px)", y: 0 },
    },
  },
};

function AnimatedGroup({ children, className, variants, preset }) {
  const selectedVariants = preset
    ? presetVariants[preset]
    : { container: defaultContainerVariants, item: defaultItemVariants };
  const containerVariants = variants?.container || selectedVariants.container;
  const itemVariants = variants?.item || selectedVariants.item;

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={cn(className)}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div key={index} variants={itemVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}

export default AnimatedGroup;