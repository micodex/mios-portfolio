import { useState } from "react";

interface ImageSkeletonProps {
  src: string;
  alt: string;
  className?: string;
}

const ImageSkeleton = ({ src, alt, className }: ImageSkeletonProps) => {
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {loading && (
        <div className="absolute inset-0 bg-sky-200/50 animate-pulse"></div>
      )}

      <img
        src={src}
        alt={alt}
        className={`block w-full h-auto transition-all duration-200 select-none
          ${loading ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}
        loading="lazy"
        draggable="false"
        onLoad={() => setLoading(false)}
        // onError={() => setLoading(false)}
      />
    </div>
  );
};

export default ImageSkeleton;
