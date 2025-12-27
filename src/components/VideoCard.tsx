import { useRef, useState } from "react";
import { Play } from "lucide-react";

interface VideoCardProps {
  src?: string;
  poster?: string;
  title: string;
  description?: string;
  aspectRatio?: "16/9" | "1/1";
  className?: string;
  cropVertical?: boolean;
}

const VideoCard = ({
  src,
  poster,
  title,
  description,
  aspectRatio = "16/9",
  className = "",
  cropVertical = false,
}: VideoCardProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick = () => {
    if (!videoRef.current) return;
    
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div
      className={`video-container group cursor-pointer ${className}`}
      style={{ aspectRatio }}
      onClick={handleClick}
    >
      {/* Placeholder or Video */}
      {src ? (
        <div className={`w-full h-full overflow-hidden ${cropVertical ? 'flex items-center' : ''}`}>
          <video
            ref={videoRef}
            src={src}
            poster={poster}
            className={cropVertical 
              ? "w-full scale-[1.78] object-cover" 
              : "w-full h-full object-cover"
            }
            loop
            playsInline
          />
        </div>
      ) : (
        <div className="w-full h-full bg-card flex items-center justify-center">
          <div className="text-center p-6">
            <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
              <Play className="w-8 h-8 text-accent" />
            </div>
            <p className="text-muted-foreground text-sm">Video placeholder</p>
          </div>
        </div>
      )}

      {/* Play Button Overlay */}
      <div 
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
          isPlaying ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <div className="w-16 h-16 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center border border-border/50">
          <Play className="w-7 h-7 text-foreground ml-1" fill="currentColor" />
        </div>
      </div>

      {/* Title Overlay */}
      <div className={`absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background/90 to-transparent transition-opacity duration-300 ${isPlaying ? "opacity-0" : "opacity-100"}`}>
        <h4 className="text-lg font-semibold text-foreground mb-1">{title}</h4>
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </div>

      {/* Hover Border Glow */}
      <div className={`absolute inset-0 rounded-2xl border-2 border-accent/0 transition-all duration-500 pointer-events-none group-hover:border-accent/30`} />
    </div>
  );
};

export default VideoCard;
