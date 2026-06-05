import { Microscope, Heart, Phone, MessageCircle, Play } from 'lucide-react';
import { contactInfo } from '../data/videos';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-l from-green-800 via-green-700 to-green-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-yellow-400 rounded-xl flex items-center justify-center">
                <Microscope className="w-6 h-6 text-green-800" />
              </div>
              <h3 className="font-bold text-lg">أ. فوزية عبد اللطيف</h3>
            </div>
            <p className="text-green-200/70 leading-relaxed text-sm">
              منصة تعليمية متخصصة في شرح مادة الأحياء للصف الثالث الثانوي
              تهدف إلى مساعدة الطلاب على التفوق والنجاح.
            </p>
            <p className="text-yellow-300 text-sm mt-2 font-semibold">
              قناة: {contactInfo.channelName}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-yellow-300">روابط سريعة</h3>
            <ul className="space-y-2 text-sm">
              <li><span className="text-green-200/70 hover:text-white cursor-pointer transition-colors">الصفحة الرئيسية</span></li>
              <li><span className="text-green-200/70 hover:text-white cursor-pointer transition-colors">دروس الأحياء</span></li>
              <li><span className="text-green-200/70 hover:text-white cursor-pointer transition-colors">الاختبارات التفاعلية</span></li>
              <li><span className="text-green-200/70 hover:text-white cursor-pointer transition-colors">عن المنصة</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-yellow-300">تواصل معنا</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={`tel:${contactInfo.phone}`} className="flex items-center gap-3 text-green-200/70 hover:text-white transition-colors">
                  <Phone className="w-4 h-4 text-yellow-300" />
                  <span>{contactInfo.phone}</span>
                </a>
              </li>
              <li>
                <a href={`https://wa.me/${contactInfo.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-green-200/70 hover:text-white transition-colors">
                  <MessageCircle className="w-4 h-4 text-yellow-300" />
                  <span>واتساب: {contactInfo.whatsapp}</span>
                </a>
              </li>
              <li>
                <a href={contactInfo.youtube} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-green-200/70 hover:text-white transition-colors">
                  <Play className="w-4 h-4 text-yellow-300" />
                  <span>قناة اليوتيوب</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
         <div className="border-t border-white/10 mt-10 pt-6 text-center">
  <p className="text-green-200/50 text-sm flex items-center justify-center gap-1">
    صنع بواسطة
    <Heart className="w-4 h-4 text-red-400 fill-red-400" />
    
    <a
      href="https://abdo-oraby.myftp.org/"
      target="_blank"
      rel="noopener noreferrer"
      className="font-bold text-yellow-300 mx-1 hover:text-yellow-200 underline transition"
    >
      Abdo Oraby
    </a>
  </p>
</div>
      </div>
    </footer>
  );
}