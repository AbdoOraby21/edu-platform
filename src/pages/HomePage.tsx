import Hero from '../components/Hero';
import ChapterCard from '../components/ChapterCard';
import { chapters, videos, contactInfo } from '../data/videos';
import { quizzes } from '../data/quizzes';
import { Sparkles, BookOpen, Brain, Trophy, Phone, MessageCircle } from 'lucide-react';

interface HomePageProps {
  setCurrentPage: (page: string) => void;
  setSelectedChapter: (chapterId: string) => void;
}

export default function HomePage({ setCurrentPage, setSelectedChapter }: HomePageProps) {
  const features = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'دروس مصورة',
      description: 'فيديوهات تعليمية من قناة الست الناظره مع شرح مبسط لكل درس',
      color: 'bg-green-50 text-green-600',
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'اختبارات تفاعلية',
      description: 'اختبارات ذكية لقياس مستوى الفهم مع شرح مفصل لكل إجابة',
      color: 'bg-purple-50 text-purple-600',
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: 'تقييم فوري',
      description: 'احصل على نتيجتك فوراً مع توضيح نقاط القوة والضعف',
      color: 'bg-blue-50 text-blue-600',
    },
  ];

  return (
    <div>
      <Hero setCurrentPage={setCurrentPage} />

      {/* Features */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Sparkles className="w-4 h-4" />
              لماذا تختار منصتنا؟
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-text-dark">
              تعلم الأحياء بطريقة <span className="text-green-600">ممتعة وفعالة</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 text-center group hover:-translate-y-1 border border-gray-100"
              >
                <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-text-dark mb-3">{feature.title}</h3>
                <p className="text-text-gray leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chapters */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              📚 أبواب المنهج
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-text-dark mb-2">
              أحياء الصف <span className="text-green-600">الثالث الثانوي</span>
            </h2>
            <p className="text-text-gray">اختر الباب وابدأ المذاكرة</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {chapters.map((chapter) => (
              <ChapterCard
                key={chapter.id}
                chapter={chapter}
                gradeName="الصف الثالث الثانوي"
                videoCount={videos.filter((v) => v.chapter === chapter.id).length}
                quizCount={quizzes.filter((q) => q.chapter === chapter.id).length}
                onClick={() => {
                  setSelectedChapter(chapter.id);
                  setCurrentPage('lessons');
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-gradient-to-bl from-green-600 to-green-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-black text-white mb-4">تواصل معنا 📞</h2>
          <p className="text-green-100 mb-8">للاستفسارات والحجز</p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${contactInfo.phone}`}
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white text-green-700 font-bold px-8 py-4 rounded-2xl text-lg hover:bg-gray-100 transition-all shadow-lg"
            >
              <Phone className="w-6 h-6" />
              <span>{contactInfo.phone}</span>
            </a>
            <a
              href={`https://wa.me/${contactInfo.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-green-500 text-white font-bold px-8 py-4 rounded-2xl text-lg hover:bg-green-400 transition-all shadow-lg"
            >
              <MessageCircle className="w-6 h-6" />
              <span>واتساب</span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-bl from-green-600 to-green-800 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="absolute top-10 right-10 text-9xl">🧬</div>
              <div className="absolute bottom-10 left-10 text-8xl">🔬</div>
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                مستعد للتفوق في الأحياء؟ 🚀
              </h2>
              <p className="text-green-100 text-lg mb-8 max-w-xl mx-auto">
                ابدأ رحلة التعلم الآن مع الأستاذة فوزية عبد اللطيف
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => setCurrentPage('lessons')}
                  className="w-full sm:w-auto bg-white hover:bg-gray-100 text-green-700 font-bold px-8 py-4 rounded-2xl text-lg transition-all shadow-lg"
                >
                  شاهد الدروس 📺
                </button>
                <button
                  onClick={() => setCurrentPage('quizzes')}
                  className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-2xl text-lg transition-all border border-white/20"
                >
                  اختبر نفسك ✍️
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
