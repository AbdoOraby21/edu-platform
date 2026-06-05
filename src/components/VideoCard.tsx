import { Play, Clock } from 'lucide-react';
import { Video, chapters } from '../data/videos';

interface VideoCardProps {
  video: Video;
  onClick: () => void;
}

export default function VideoCard({ video, onClick }: VideoCardProps) {
  const chapter = chapters.find(c => c.id === video.chapter);
  
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-green-300"
    >
      {/* Thumbnail */}
      <div className="relative aspect-video bg-gradient-to-bl from-green-600 to-green-800 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-6xl opacity-30">{chapter?.icon || '🧬'}</div>
        </div>
        <img
          src={`https://img.youtube.com/vi/${video.youtubeId}/mqdefault.jpg`}
          alt={video.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
        {/* Play overlay */}
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-300">
            <Play className="w-7 h-7 text-white mr-[-2px]" fill="currentColor" />
          </div>
        </div>
        {/* Duration badge */}
        <div className="absolute bottom-3 left-3 bg-black/70 text-white text-xs font-semibold px-2.5 py-1 rounded-lg flex items-center gap-1">
          <Clock className="w-3 h-3" />
          {video.duration}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {chapter && (
          <span className="text-xs font-semibold text-green-700 bg-green-50 px-2.5 py-1 rounded-full">
            {chapter.icon} {chapter.name}
          </span>
        )}
        <h4 className="font-bold text-text-dark mt-2 mb-1 line-clamp-2 group-hover:text-green-700 transition-colors">
          {video.title}
        </h4>
        <p className="text-sm text-text-gray line-clamp-2">{video.description}</p>
      </div>
    </div>
  );
}
