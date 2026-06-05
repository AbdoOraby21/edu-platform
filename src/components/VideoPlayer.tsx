import { X, Clock } from 'lucide-react';
import { Video, chapters } from '../data/videos';

interface VideoPlayerProps {
  video: Video;
  onClose: () => void;
}

export default function VideoPlayer({ video, onClose }: VideoPlayerProps) {
  const chapter = chapters.find(c => c.id === video.chapter);
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4" onClick={onClose}>
      <div
        className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 bg-gradient-to-l from-green-700 to-green-600">
          <div>
            <h3 className="text-white font-bold text-lg">{video.title}</h3>
            <div className="flex items-center gap-4 mt-1">
              <span className="flex items-center gap-1 text-green-200 text-sm">
                <Clock className="w-4 h-4" />
                {video.duration}
              </span>
              {chapter && (
                <span className="text-green-200 text-sm">
                  {chapter.icon} {chapter.name}
                </span>
              )}
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-xl transition-all"
            aria-label="إغلاق"
            title="إغلاق"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Video */}
        <div className="aspect-video bg-black">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Description */}
        <div className="p-5 bg-gray-50">
          <p className="text-text-gray leading-relaxed">{video.description}</p>
        </div>
      </div>
    </div>
  );
}
