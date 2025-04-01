import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines multiple class names into a single string, merging Tailwind CSS classes properly.
 *
 * @param inputs - Class names or conditional class objects
 * @returns Merged class string
 *
 * @example
 * // Basic usage
 * cn("text-red-500", "bg-blue-500")
 * // => "text-red-500 bg-blue-500"
 *
 * @example
 * // With conditionals
 * cn("text-red-500", isActive && "bg-blue-500")
 * // => "text-red-500 bg-blue-500" if isActive is true
 * // => "text-red-500" if isActive is false
 *
 * @example
 * // Merging conflicting Tailwind classes (last one wins)
 * cn("px-2 py-1", "px-4")
 * // => "py-1 px-4"
 */
export function cn(...inputs) {
	return twMerge(clsx(inputs));
}
