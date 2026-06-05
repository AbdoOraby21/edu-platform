import { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Clock, CheckCircle2, XCircle, RotateCcw, Trophy, AlertCircle } from 'lucide-react';
import { Quiz } from '../data/quizzes';

interface QuizPlayerProps {
  quiz: Quiz;
  onClose: () => void;
}

export default function QuizPlayer({ quiz, onClose }: QuizPlayerProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(
    new Array(quiz.questions.length).fill(null)
  );
  const [showResult, setShowResult] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [timeLeft, setTimeLeft] = useState(quiz.timeLimit * 60);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (isFinished) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setIsFinished(true);
          setShowResult(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [isFinished]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSelectAnswer = (answerIndex: number) => {
    if (isFinished) return;
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
    setShowExplanation(true);
  };

  const handleNext = () => {
    setShowExplanation(false);
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrev = () => {
    setShowExplanation(false);
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleFinish = () => {
    setIsFinished(true);
    setShowResult(true);
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswers(new Array(quiz.questions.length).fill(null));
    setShowResult(false);
    setShowExplanation(false);
    setTimeLeft(quiz.timeLimit * 60);
    setIsFinished(false);
  };

  const calculateScore = useCallback(() => {
    let correct = 0;
    quiz.questions.forEach((q, index) => {
      if (selectedAnswers[index] === q.correctAnswer) {
        correct++;
      }
    });
    return correct;
  }, [quiz.questions, selectedAnswers]);

  const score = calculateScore();
  const percentage = Math.round((score / quiz.questions.length) * 100);
  const question = quiz.questions[currentQuestion];

  if (showResult) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4" onClick={onClose}>
        <div
          className="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Result Header */}
          <div className={`p-8 text-center ${
            percentage >= 80 ? 'bg-gradient-to-bl from-green-500 to-green-700' :
            percentage >= 50 ? 'bg-gradient-to-bl from-yellow-500 to-orange-600' :
            'bg-gradient-to-bl from-red-500 to-red-700'
          }`}>
            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Trophy className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-3xl font-black text-white mb-2">
              {percentage >= 80 ? 'ممتاز! 🎉' :
               percentage >= 50 ? 'جيد! 👍' :
               'حاول مرة أخرى 💪'}
            </h2>
            <div className="text-6xl font-black text-white my-4">{percentage}%</div>
            <p className="text-white/80 text-lg">
              {score} من {quiz.questions.length} إجابات صحيحة
            </p>
          </div>

          {/* Details */}
          <div className="p-6 max-h-60 overflow-y-auto">
            <div className="space-y-3 mb-6">
              {quiz.questions.map((q, index) => (
                <div
                  key={q.id}
                  className={`flex items-center gap-3 p-3 rounded-xl ${
                    selectedAnswers[index] === q.correctAnswer
                      ? 'bg-green-50 text-green-700'
                      : 'bg-red-50 text-red-700'
                  }`}
                >
                  {selectedAnswers[index] === q.correctAnswer ? (
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  ) : (
                    <XCircle className="w-5 h-5 flex-shrink-0" />
                  )}
                  <span className="text-sm font-medium truncate">سؤال {index + 1}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="p-6 pt-0">
            <div className="flex gap-3">
              <button
                onClick={handleRestart}
                className="flex-1 flex items-center justify-center gap-2 bg-green-600 text-white font-semibold py-3 rounded-xl hover:bg-green-700 transition-all"
              >
                <RotateCcw className="w-5 h-5" />
                إعادة الاختبار
              </button>
              <button
                onClick={onClose}
                className="flex-1 bg-gray-100 text-text-dark font-semibold py-3 rounded-xl hover:bg-gray-200 transition-all"
              >
                إغلاق
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4" onClick={onClose}>
      <div
        className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-l from-green-700 to-green-600 p-5 flex items-center justify-between sticky top-0 z-10">
          <div>
            <h3 className="text-white font-bold text-lg">{quiz.title}</h3>
            <p className="text-green-200 text-sm">الصف الثالث الثانوي</p>
          </div>
          <div className="flex items-center gap-3">
            <div className={`flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-sm ${
              timeLeft < 60 ? 'bg-red-500 text-white animate-pulse' : 'bg-white/15 text-white'
            }`}>
              <Clock className="w-4 h-4" />
              {formatTime(timeLeft)}
            </div>
            <button
              onClick={onClose}
              className="text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-xl transition-all"              aria-label="إغلاق"
              title="إغلاق"            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Progress */}
        <div className="px-6 pt-5">
          <div className="flex items-center justify-between text-sm text-text-gray mb-2">
            <span>السؤال {currentQuestion + 1} من {quiz.questions.length}</span>
            <span>{Math.round(((currentQuestion + 1) / quiz.questions.length) * 100)}%</span>
          </div>
          <progress
            className="w-full h-2.5 rounded-full overflow-hidden bg-gray-200"
            value={((currentQuestion + 1) / quiz.questions.length) * 100}
            max={100}
            aria-label="تقدّم الاختبار"
          />
          
          {/* Question dots */}
          <div className="flex items-center justify-center gap-2 mt-4 flex-wrap">
            {quiz.questions.map((_, index) => (
              <button
                key={index}
                onClick={() => { setCurrentQuestion(index); setShowExplanation(selectedAnswers[index] !== null); }}
                className={`w-8 h-8 rounded-full text-xs font-bold transition-all ${
                  index === currentQuestion
                    ? 'bg-green-600 text-white scale-110 shadow-md'
                    : selectedAnswers[index] !== null
                    ? selectedAnswers[index] === quiz.questions[index].correctAnswer
                      ? 'bg-green-100 text-green-700'
                      : 'bg-red-100 text-red-700'
                    : 'bg-gray-100 text-text-gray hover:bg-gray-200'
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Question */}
        <div className="p-6">
          <div className="bg-green-50 rounded-2xl p-6 mb-6">
            <h4 className="text-xl font-bold text-text-dark leading-relaxed">{question.text}</h4>
          </div>

          {/* Options */}
          <div className="space-y-3 mb-6">
            {question.options.map((option, index) => {
              const isSelected = selectedAnswers[currentQuestion] === index;
              const isCorrect = index === question.correctAnswer;
              const hasAnswered = selectedAnswers[currentQuestion] !== null;

              let optionClass = 'bg-white border-2 border-gray-200 hover:border-green-400 hover:bg-green-50';
              
              if (hasAnswered) {
                if (isCorrect) {
                  optionClass = 'bg-green-50 border-2 border-green-500 text-green-700';
                } else if (isSelected && !isCorrect) {
                  optionClass = 'bg-red-50 border-2 border-red-500 text-red-700';
                } else {
                  optionClass = 'bg-gray-50 border-2 border-gray-200 opacity-60';
                }
              }

              return (
                <button
                  key={index}
                  onClick={() => handleSelectAnswer(index)}
                  disabled={hasAnswered}
                  className={`w-full text-right p-4 rounded-xl transition-all duration-300 flex items-center gap-3 ${optionClass}`}
                >
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${
                    hasAnswered && isCorrect
                      ? 'bg-green-500 text-white'
                      : hasAnswered && isSelected && !isCorrect
                      ? 'bg-red-500 text-white'
                      : isSelected
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-200 text-text-gray'
                  }`}>
                    {hasAnswered && isCorrect ? (
                      <CheckCircle2 className="w-5 h-5" />
                    ) : hasAnswered && isSelected && !isCorrect ? (
                      <XCircle className="w-5 h-5" />
                    ) : (
                      String.fromCharCode(1571 + index)
                    )}
                  </span>
                  <span className="font-medium">{option}</span>
                </button>
              );
            })}
          </div>

          {/* Explanation */}
          {showExplanation && selectedAnswers[currentQuestion] !== null && (
            <div className={`p-4 rounded-xl mb-6 flex items-start gap-3 ${
              selectedAnswers[currentQuestion] === question.correctAnswer
                ? 'bg-green-50 border border-green-200'
                : 'bg-orange-50 border border-orange-200'
            }`}>
              <AlertCircle className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                selectedAnswers[currentQuestion] === question.correctAnswer
                  ? 'text-green-600'
                  : 'text-orange-600'
              }`} />
              <div>
                <p className={`font-bold text-sm mb-1 ${
                  selectedAnswers[currentQuestion] === question.correctAnswer
                    ? 'text-green-700'
                    : 'text-orange-700'
                }`}>
                  {selectedAnswers[currentQuestion] === question.correctAnswer ? 'إجابة صحيحة! ✅' : 'إجابة خاطئة ❌'}
                </p>
                <p className="text-sm text-text-gray">{question.explanation}</p>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <button
              onClick={handlePrev}
              disabled={currentQuestion === 0}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm bg-gray-100 text-text-dark hover:bg-gray-200 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-4 h-4" />
              السابق
            </button>

            {currentQuestion === quiz.questions.length - 1 ? (
              <button
                onClick={handleFinish}
                className="flex items-center gap-2 px-6 py-2.5 rounded-xl font-semibold text-sm bg-yellow-400 text-green-800 hover:bg-yellow-300 transition-all shadow-lg"
              >
                <Trophy className="w-4 h-4" />
                إنهاء الاختبار
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm bg-green-600 text-white hover:bg-green-700 transition-all"
              >
                التالي
                <ChevronLeft className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
