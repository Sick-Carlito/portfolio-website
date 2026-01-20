/**
 * Animation configuration for consistent timing
 */
export const ANIMATION_CONFIG = {
  duration: {
    fast: 300,
    normal: 500,
    slow: 1000,
  },
  delay: {
    none: 0,
    short: 150,
    medium: 300,
    long: 500,
  },
  easing: {
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
  },
} as const;

/**
 * Get staggered animation delay
 * @param index - Item index
 * @param baseDelay - Base delay in ms
 * @param increment - Delay increment per item
 * @returns Delay in ms
 */
export function getStaggerDelay(
  index: number,
  baseDelay: number = 0,
  increment: number = 150
): number {
  return baseDelay + index * increment;
}

/**
 * Animation variants for common patterns
 */
export const animationVariants = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  fadeInUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
  fadeInDown: {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  },
  slideInLeft: {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  },
  slideInRight: {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  },
} as const;