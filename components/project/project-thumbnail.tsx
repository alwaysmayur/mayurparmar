import Image from "next/image";

export default function ProjectThumbnail({
  src,
  alt,
  className = "",
  sizes,
  priority,
  aspectVideo = true,
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  /** Set false when the box's height should instead come from a flex-stretch sibling (list rows). */
  aspectVideo?: boolean;
}) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-lg border border-border bg-muted ${
        aspectVideo ? "aspect-video" : ""
      } ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes ?? "(min-width: 1024px) 720px, 100vw"}
        priority={priority}
        className="object-cover object-top"
      />
    </div>
  );
}
