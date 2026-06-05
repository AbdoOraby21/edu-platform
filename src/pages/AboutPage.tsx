import { Microscope, Target, Heart, Star, BookOpen, Users, Award, CheckCircle2, Phone, MessageCircle, Play } from 'lucide-react';
import { contactInfo } from '../data/videos';

export default function AboutPage() {
  const values = [
    { icon: <Target className="w-7 h-7" />, title: 'الجودة', description: 'نقدم محتوى تعليمي عالي الجودة ومُعد بعناية' },
    { icon: <Heart className="w-7 h-7" />, title: 'الاهتمام', description: 'نهتم بكل طالب ونساعده على تحقيق أفضل النتائج' },
    { icon: <Star className="w-7 h-7" />, title: 'التميز', description: 'نسعى دائماً للتميز في شرح الأحياء' },
  ];

  const achievements = [
    { number: '15+', label: 'سنة خبرة في التدريس', icon: <Award className="w-6 h-6" /> },
    { number: '3000+', label: 'طالب وطالبة', icon: <Users className="w-6 h-6" /> },
    { number: '18+', label: 'فيديو تعليمي', icon: <BookOpen className="w-6 h-6" /> },
    { number: '95%', label: 'نسبة رضا الطلاب', icon: <Star className="w-6 h-6" /> },
  ];

  const features = [
    'شرح مبسط وواضح لجميع أبواب الأحياء',
    'فيديوهات تعليمية عالية الجودة',
    'تغطية شاملة لمنهج الصف الثالث الثانوي',
    'اختبارات تفاعلية لكل باب',
    'شرح مفصل لكل إجابة في الاختبارات',
    'محتوى محدث وفق أحدث المناهج',
    'متاح على مدار الساعة',
    'مجاني بالكامل',
  ];

  const chaptersInfo = [
    { icon: '🦴', name: 'الدعامة والحركة' },
    { icon: '💉', name: 'التنسيق الهرموني' },
    { icon: '🧬', name: 'التكاثر' },
    { icon: '🛡️', name: 'المناعة' },
    { icon: '🔬', name: 'الحمض النووي DNA' },
  ];

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Microscope className="w-4 h-4" />
            عن المنصة
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-text-dark mb-3">
            منصة الأستاذة <span className="text-green-600">فوزية عبد اللطيف</span>
          </h1>
          <p className="text-text-gray max-w-2xl mx-auto text-lg leading-relaxed">
            منصة متخصصة في تدريس الأحياء للصف الثالث الثانوي
          </p>
        </div>

        {/* About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
          {/* Text */}
          <div>
            <h2 className="text-2xl font-bold text-text-dark mb-6 flex items-center gap-3">
              <span className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center text-green-600">
                <Microscope className="w-6 h-6" />
              </span>
              من هي الأستاذة فوزية؟
            </h2>
            <div className="space-y-4 text-text-gray leading-relaxed">
              <p>
                الأستاذة فوزية عبد اللطيف معلمة متخصصة في مادة الأحياء للصف الثالث الثانوي، تمتلك خبرة تزيد عن 15 عاماً
                في مجال التدريس. تتميز بأسلوبها المبسط والواضح في شرح المادة.
              </p>
              <p>
                تقدم الأستاذة فوزية محتواها من خلال قناة <strong className="text-green-600">{contactInfo.channelName}</strong> على يوتيوب،
                حيث تقدم شرحاً مفصلاً لجميع أبواب منهج الأحياء.
              </p>
              <p>
                تقدم المنصة دروساً مصورة شاملة لجميع أبواب الأحياء للصف الثالث الثانوي
                مع اختبارات تفاعلية تساعد الطلاب على قياس فهمهم.
              </p>
            </div>

            {/* Features list */}
            <div className="mt-8">
              <h3 className="font-bold text-text-dark mb-4">ما يميز منصتنا:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-text-gray">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image/Card */}
          <div className="flex items-center justify-center">
            <div className="bg-gradient-to-bl from-green-600 to-green-800 rounded-3xl p-10 text-center w-full max-w-md relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <div className="absolute top-5 right-5 text-8xl">🧬</div>
                <div className="absolute bottom-5 left-5 text-7xl">🔬</div>
              </div>
              <div className="relative z-10">
                <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-yellow-400/50">
                  <Microscope className="w-16 h-16 text-yellow-300" />
                </div>
                <h3 className="text-2xl font-black text-white mb-2">أ. فوزية عبد اللطيف</h3>
                <p className="text-yellow-300 font-semibold mb-4">معلمة أحياء - الصف الثالث الثانوي</p>
                <div className="flex items-center justify-center gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-green-200/70 text-sm leading-relaxed mb-6">
                  "هدفي أن أجعل الأحياء مادة سهلة وممتعة لكل طالب"
                </p>
                
                {/* Contact */}
                <div className="space-y-2">
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-xl text-sm transition-all"
                  >
                    <Phone className="w-4 h-4" />
                    {contactInfo.phone}
                  </a>
                  <a
                    href={`https://wa.me/${contactInfo.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white px-4 py-2 rounded-xl text-sm transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    واتساب
                  </a>
                  <a
                    href={contactInfo.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-red-500 hover:bg-red-400 text-white px-4 py-2 rounded-xl text-sm transition-all"
                  >
                    <Play className="w-4 h-4" />
                    قناة اليوتيوب
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Curriculum */}
        <div className="bg-white rounded-3xl shadow-lg p-10 mb-20 border border-gray-100">
          <h2 className="text-2xl font-bold text-text-dark text-center mb-10">المنهج المتاح - الصف الثالث الثانوي 📚</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {chaptersInfo.map((chapter, index) => (
              <div key={index} className="bg-green-50 rounded-2xl p-4 text-center border border-green-100 hover:bg-green-100 transition-all">
                <div className="text-4xl mb-2">{chapter.icon}</div>
                <p className="font-semibold text-green-700 text-sm">{chapter.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-white rounded-3xl shadow-lg p-10 mb-20 border border-gray-100">
          <h2 className="text-2xl font-bold text-text-dark text-center mb-10">إنجازاتنا بالأرقام 📊</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-3 text-green-600 group-hover:bg-green-600 group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <div className="text-3xl font-black text-green-600 mb-1">{item.number}</div>
                <p className="text-text-gray text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-text-dark text-center mb-10">قيمنا ومبادئنا 💫</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 text-center group hover:-translate-y-1 border border-gray-100"
              >
                <div className="w-16 h-16 bg-yellow-100 text-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-yellow-400 group-hover:text-green-800 transition-all">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-text-dark mb-3">{value.title}</h3>
                <p className="text-text-gray leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
