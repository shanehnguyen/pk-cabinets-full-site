import React from 'react';

interface ImagePlaceholderProps {
  className?: string;
  aspectRatio?: string;
}

const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({ className = '', aspectRatio = 'aspect-square' }) => {
  return (
    <div className={`bg-pk-placeholder-bg flex items-center justify-center ${aspectRatio} ${className}`}>
      <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#50463c]/30">
        Image Placeholder
      </span>
    </div>
  );
};

export default ImagePlaceholder;
