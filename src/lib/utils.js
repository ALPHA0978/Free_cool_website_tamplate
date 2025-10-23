/**
 * Utility Functions
 * 
 * Collection of utility functions for the application.
 * Combines clsx and tailwind-merge for optimal CSS class handling.
 * 
 * @author Manish Raj
 * @version 1.0.0
 */

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines and merges CSS classes intelligently
 * 
 * Uses clsx for conditional classes and tailwind-merge to resolve conflicts.
 * Ensures Tailwind CSS classes are properly merged without duplicates.
 * 
 * @param {...any} inputs - Class names, objects, or arrays to merge
 * @returns {string} Merged class string
 * 
 * @example
 * cn('px-4', 'px-2', 'py-2') // Returns 'px-2 py-2'
 * cn('text-red-500', condition && 'text-blue-500') // Conditional classes
 */

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}