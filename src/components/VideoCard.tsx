import { useRef, useState } from "react";
import { Play, Pause, Volume2 } from "lucide-react";

interface VideoCardProps {
  src?: string;
  poster?: string;
  title: string;
  description?: string;
  aspectRatio?: "16/9" | "1/1";
  className?: string;
  cropVertical?: boolean; // Crop 9:16 video to 1:1 by showing only the center
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
  const [isHovered, setIsHovered] = useState(false);
  const fadeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      // Clear any existing fade timeout
      if (fadeTimeoutRef.current) {
        clearTimeout(fadeTimeoutRef.current);
      }
      
      videoRef.current.muted = false;
      videoRef.current.volume = 0;
      videoRef.current.play();
      setIsPlaying(true);

      // Fade in audio
      let volume = 0;
      const fadeIn = setInterval(() => {
        if (videoRef.current && volume < 1) {
          volume = Math.min(volume + 0.1, 1);
          videoRef.current.volume = volume;
        } else {
          clearInterval(fadeIn);
        }
      }, 50);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      // Fade out audio
      let volume = videoRef.current.volume;
      const fadeOut = setInterval(() => {
        if (videoRef.current && volume > 0) {
          volume = Math.max(volume - 0.1, 0);
          videoRef.current.volume = volume;
        } else {
          clearInterval(fadeOut);
          if (videoRef.current) {
            videoRef.current.pause();
            setIsPlaying(false);
          }
        }
      }, 50);

      fadeTimeoutRef.current = setTimeout(() => {
        clearInterval(fadeOut);
      }, 600);
    }
  };

  return (
    <div
      className={`video-container group cursor-pointer ${className}`}
      style={{ aspectRatio }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
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
            muted
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

      {/* Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent transition-opacity duration-500 ${isHovered ? "opacity-0" : "opacity-100"}`}>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h4 className="text-lg font-semibold text-foreground mb-1">{title}</h4>
          {description && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}
        </div>
      </div>

      {/* Play/Pause Indicator */}
      <div className={`absolute top-4 right-4 w-10 h-10 rounded-full glass flex items-center justify-center transition-all duration-300 ${isHovered ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}>
        {isPlaying ? (
          <Volume2 className="w-5 h-5 text-accent" />
        ) : (
          <Play className="w-5 h-5 text-foreground" />
        )}
      </div>

      {/* Hover Border Glow */}
      <div className={`absolute inset-0 rounded-2xl border-2 border-accent/0 transition-all duration-500 pointer-events-none ${isHovered ? "border-accent/30" : ""}`} />
    </div>
  );
};

export default VideoCard;
