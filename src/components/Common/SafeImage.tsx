import React, { useState, useEffect } from 'react';
import { getFallbackForCategory, createSvgFallback } from '../../utils/images';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackCategory?: string;
  secondarySrc?: string;
  isHovered?: boolean;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  secondarySrc,
  isHovered = false,
  fallbackCategory,
  alt = 'VÉLORA Product',
  className = '',
  loading = 'lazy',
  ...props
}) => {
  const categoryFallback = getFallbackForCategory(fallbackCategory);
  const emergencySvg = createSvgFallback(alt);

  // Error stage: 0 = initial src, 1 = category fallback, 2 = svg fallback
  const [errorStage, setErrorStage] = useState(0);
  const [secondaryLoaded, setSecondaryLoaded] = useState(false);
  const [secondaryError, setSecondaryError] = useState(false);

  // Reset when src changes
  useEffect(() => {
    setErrorStage(0);
    setSecondaryLoaded(false);
    setSecondaryError(false);
  }, [src, secondarySrc]);

  // Determine active primary source
  let currentPrimary = src;
  if (!currentPrimary || errorStage === 1) {
    currentPrimary = categoryFallback;
  } else if (errorStage >= 2) {
    currentPrimary = emergencySvg;
  }

  const handlePrimaryError = () => {
    setErrorStage((prev) => prev + 1);
  };

  const hasValidSecondary = Boolean(
    secondarySrc &&
    secondarySrc !== src &&
    secondarySrc !== currentPrimary &&
    !secondaryError &&
    secondaryLoaded
  );

  return (
    <div className="relative w-full h-full overflow-hidden bg-[#FAF7F5] flex items-center justify-center">
      {/* Primary Image: Always visible, smooth scale on hover */}
      <img
        src={currentPrimary}
        alt={alt}
        loading={loading}
        onError={handlePrimaryError}
        className={`w-full h-full object-cover object-center transition-all duration-500 ease-out scale-100 ${
          isHovered ? 'scale-105' : ''
        } ${className}`}
        {...props}
      />

      {/* Secondary Hover Image (only active when pre-loaded successfully) */}
      {secondarySrc && secondarySrc !== src && !secondaryError && (
        <img
          src={secondarySrc}
          alt={`${alt} view`}
          loading={loading}
          onLoad={() => setSecondaryLoaded(true)}
          onError={() => setSecondaryError(true)}
          className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-700 ease-out pointer-events-none ${
            isHovered && secondaryLoaded
              ? 'opacity-100 scale-105'
              : 'opacity-0 scale-100'
          } ${className}`}
          {...props}
        />
      )}
    </div>
  );
};
