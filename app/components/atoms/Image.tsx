
import NextImage from "next/image";

interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

export default function Image({
  src,
  alt,
  width = 800,
  height = 600,
  className = "",
  priority = false,
}: ImageProps) {
  return (
    <NextImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
      style={{
        width: "100%",
        height: "auto",
        objectFit: "cover",
      }}
    />
  );
}
