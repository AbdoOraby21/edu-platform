import { Clock, FileQuestion, BarChart3, ChevronLeft } from 'lucide-react';
import { Quiz } from '../data/quizzes';
import { chapters } from '../data/videos';

interface QuizCardProps {
  quiz: Quiz;
  onClick: () => void;
}

export default function QuizCard({ quiz, onClick }: QuizCardProps) {
  const chapter = chapters.find(c => c.id === quiz.chapter);
  
  const difficultyColors = {
    'سهل': 'bg-green-100 text-green-700',
    'متوسط': 'bg-yellow-100 text-yellow-700',
    'صعب': 'bg-red-100 text-red-700',
  };

  return (
    <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-green-300 hover:-translate-y-1">
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{chapter?.icon || '🧬'}</span>
            <div>
              <h3 className="font-bold text-text-dark text-lg">{quiz.title}</h3>
              <p className="text-sm text-text-gray">الصف الثالث الثانوي</p>
            </div>
          </div>
        </div>

        {/* Chapter name */}
        {chapter && (
          <p className="text-sm text-green-700 bg-green-50 px-3 py-1.5 rounded-lg mb-4 line-clamp-1">
            {chapter.name}
          </p>
        )}

        {/* Info badges */}
        <div className="flex flex-wrap gap-2 mb-5">
          <span className={`text-xs font-semibold px-3 py-1.5 rounded-lg ${difficultyColors[quiz.difficulty]}`}>
            {quiz.difficulty}
          </span>
          <span className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-blue-50 text-primary flex items-center gap-1">
            <FileQuestion className="w-3.5 h-3.5" />
            {quiz.questions.length} سؤال
          </span>
          <span className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-purple-50 text-purple-700 flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {quiz.timeLimit} دقيقة
          </span>
        </div>

        {/* Action button */}
        <button
          onClick={onClick}
          className="w-full flex items-center justify-center gap-2 bg-gradient-to-l from-green-600 to-green-700 text-white font-semibold py-3 rounded-xl hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 group-hover:from-green-500 group-hover:to-green-600"
        >
          <BarChart3 className="w-5 h-5" />
          <span>ابدأ الاختبار</span>
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
