import { ChevronLeft, PlayCircle, FileQuestion } from 'lucide-react';
import { Chapter } from '../data/videos';

interface ChapterCardProps {
  chapter: Chapter;
  onClick: () => void;
  videoCount: number;
  quizCount: number;
  gradeName: string;
}

export default function ChapterCard({ chapter, onClick, videoCount, quizCount }: ChapterCardProps) {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-green-300 hover:-translate-y-1"
    >
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start gap-4 mb-4">
          <span className="text-4xl">{chapter.icon}</span>
          <div className="flex-1">
            <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">
              الصف الثالث الثانوي
            </span>
            <h3 className="font-bold text-text-dark text-lg mt-2 leading-tight">{chapter.name}</h3>
          </div>
        </div>

        {/* Description */}
        <p className="text-text-gray text-sm mb-4 leading-relaxed">{chapter.description}</p>

        {/* Stats */}
        <div className="flex items-center gap-3 mb-4">
          <span className="flex items-center gap-1.5 bg-blue-50 text-primary font-semibold text-sm px-3 py-1.5 rounded-lg">
            <PlayCircle className="w-4 h-4" />
            {videoCount} فيديو
          </span>
          <span className="flex items-center gap-1.5 bg-purple-50 text-purple-700 font-semibold text-sm px-3 py-1.5 rounded-lg">
            <FileQuestion className="w-4 h-4" />
            {quizCount} اختبار
          </span>
        </div>

        {/* Action */}
        <button className="w-full flex items-center justify-center gap-2 text-green-700 font-semibold py-3 rounded-xl bg-green-50 hover:bg-green-600 hover:text-white transition-all duration-300 group-hover:bg-green-600 group-hover:text-white">
          <span>عرض الدروس</span>
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
