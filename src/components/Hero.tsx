import { Play, BookOpen, Award, Users, Microscope, Phone, MessageCircle } from 'lucide-react';
import { contactInfo } from '../data/videos';

interface HeroProps {
  setCurrentPage: (page: string) => void;
}

export default function Hero({ setCurrentPage }: HeroProps) {
  const stats = [
    { icon: <Play className="w-6 h-6" />, value: '18+', label: 'فيديو تعليمي' },
    { icon: <Users className="w-6 h-6" />, value: '3000+', label: 'طالب وطالبة' },
    { icon: <BookOpen className="w-6 h-6" />, value: '5+', label: 'اختبار تفاعلي' },
    { icon: <Award className="w-6 h-6" />, value: '15+', label: 'سنة خبرة' },
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-bl from-green-700 via-green-600 to-green-800"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-72 h-72 bg-yellow-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-green-300 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-teal-400 rounded-full blur-3xl"></div>
      </div>
      
      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 text-9xl">🧬</div>
        <div className="absolute top-40 left-20 text-8xl">🔬</div>
        <div className="absolute bottom-20 right-1/3 text-7xl">🦠</div>
        <div className="absolute bottom-40 left-10 text-8xl">🧫</div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-green-100 px-5 py-2 rounded-full text-sm font-semibold mb-8 backdrop-blur-sm">
            <Microscope className="w-4 h-4" />
            أحياء الصف الثالث الثانوي
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
            الأستاذة
            <span className="block text-yellow-300 mt-2">فوزية عبد اللطيف</span>
          </h1>
          
          <p className="text-lg md:text-xl text-green-100/80 max-w-2xl mx-auto mb-6 leading-relaxed">
            منصة متخصصة في شرح مادة الأحياء للصف الثالث الثانوي
            <br />
            شرح مبسط ومفصل مع اختبارات تفاعلية
          </p>

          {/* Contact buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            <a
              href={`tel:${contactInfo.phone}`}
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all backdrop-blur-sm border border-white/20"
            >
              <Phone className="w-4 h-4" />
              {contactInfo.phone}
            </a>
            <a
              href={`https://wa.me/${contactInfo.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              واتساب
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button
              onClick={() => setCurrentPage('lessons')}
              className="group w-full sm:w-auto bg-white hover:bg-gray-100 text-green-700 font-bold px-8 py-4 rounded-2xl text-lg transition-all duration-300 shadow-lg hover:shadow-white/20 hover:shadow-2xl flex items-center justify-center gap-3"
            >
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
              ابدأ المذاكرة الآن
            </button>
            <button
              onClick={() => setCurrentPage('quizzes')}
              className="group w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-2xl text-lg transition-all duration-300 backdrop-blur-sm border border-white/20 flex items-center justify-center gap-3"
            >
              <BookOpen className="w-5 h-5 group-hover:scale-110 transition-transform" />
              اختبر نفسك
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:bg-white/15 transition-all duration-300 group"
              >
                <div className="text-yellow-300 mb-2 flex justify-center group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-2xl md:text-3xl font-black text-white">{stat.value}</div>
                <div className="text-green-200/70 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 80L60 73.3C120 66.7 240 53.3 360 46.7C480 40 600 40 720 46.7C840 53.3 960 66.7 1080 70C1200 73.3 1320 66.7 1380 63.3L1440 60V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z" fill="#f7f8fc"/>
        </svg>
      </div>
    </section>
  );
}
