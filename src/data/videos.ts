export interface Video {
  id: string;
  title: string;
  description: string;
  youtubeId: string;
  chapter: string;
  duration: string;
}

export interface Chapter {
  id: string;
  name: string;
  icon: string;
  description: string;
}

// أبواب الصف الثالث الثانوي فقط
export const chapters: Chapter[] = [
  { 
    id: 'ch1', 
    name: 'الدعامة والحركة', 
    icon: '🦴', 
    description: 'الهيكل العظمي والعضلات والانقباض العضلي' 
  },
  { 
    id: 'ch2', 
    name: 'التنسيق الهرموني', 
    icon: '💉', 
    description: 'الغدد الصماء والهرمونات وتنظيم وظائف الجسم' 
  },
  { 
    id: 'ch3', 
    name: 'التكاثر', 
    icon: '🧬', 
    description: 'التكاثر في الكائنات الحية والانقسام الخلوي' 
  },
  { 
    id: 'ch4', 
    name: 'المناعة', 
    icon: '🛡️', 
    description: 'الجهاز المناعي وخطوط الدفاع والأجسام المضادة' 
  },
  { 
    id: 'ch5', 
    name: 'الحمض النووي DNA', 
    icon: '🔬', 
    description: 'تركيب DNA وتضاعفه وبناء البروتين' 
  },
];

// فيديوهات من قناة الست الناظره - الأستاذة فوزية عبد اللطيف
// تم تحديث المعرفات بفيديوهات حقيقية من القناة
export const videos: Video[] = [
  // الباب الأول: الدعامة والحركة
   {
  id: '1',
  title: 'المناعة الخلطية',
  description: 'شرح المناعة الخلطية والأجسام المضادة',
  youtubeId: 'fXsbNYg-WGU',
  chapter: 'ch4',
  duration: '13:47',
},

{
  id: '2',
  title: 'آلية عمل المناعة - الجزء الأول',
  description: 'المناعة الطبيعية وخطوط الدفاع',
  youtubeId: 'Nm672tHU6q0',
  chapter: 'ch4',
  duration: '18:08',
},

{
  id: '3',
  title: 'مراجعة أحياء 16 مايو 2026 (1)',
  description: 'شرح ومراجعة أحياء',
  youtubeId: 'CUaKBxnTzug',
  chapter: 'ch4',
  duration: '26:10',
},

{
  id: '4',
  title: 'مراجعة أحياء 16 مايو 2026 (2)',
  description: 'شرح ومراجعة أحياء',
  youtubeId: 'WIHYpTmge8w',
  chapter: 'ch4',
  duration: '19:15',
},

{
  id: '5',
  title: 'مراجعة أحياء 16 مايو 2026 (3)',
  description: 'شرح ومراجعة أحياء',
  youtubeId: 'bo0puRiINEI',
  chapter: 'ch4',
  duration: '11:22',
},

{
  id: '6',
  title: 'مراجعة أحياء 16 مايو 2026 (4)',
  description: 'شرح ومراجعة أحياء',
  youtubeId: 'H8X0MEE4KS4',
  chapter: 'ch4',
  duration: '11:29',
},

{
  id: '7',
  title: 'علم الجيولوجيا',
  description: 'مقدمة في علم الجيولوجيا',
  youtubeId: '_MYpsSC3iSc',
  chapter: 'ch5',
  duration: '22:00',
},

{
  id: '8',
  title: 'أهمية DNA ومعاد الاتحاد',
  description: 'أهمية الحمض النووي DNA',
  youtubeId: 'q_ax76PyKW4',
  chapter: 'ch5',
  duration: '24:37',
},

{
  id: '9',
  title: 'إنزيمات القصر البكتيرية',
  description: 'إنزيمات القطع البكتيرية وتطبيقاتها',
  youtubeId: 'BPvn3Y_duOI',
  chapter: 'ch5',
  duration: '8:49',
},

{
  id: '10',
  title: 'تكملة ونهاية تكوين البروتين',
  description: 'استكمال شرح بناء البروتين',
  youtubeId: 'gOAJ42pt-6w',
  chapter: 'ch5',
  duration: '23:47',
},

{
  id: '11',
  title: 'تابع شرح بناء البروتين - الحلقة الثانية',
  description: 'استكمال مراحل بناء البروتين',
  youtubeId: 'jTedxdtNneI',
  chapter: 'ch5',
  duration: '30:50',
},

{
  id: '12',
  title: 'بناء البروتين',
  description: 'شرح بناء البروتين للصف الثالث الثانوي',
  youtubeId: '4_cNUqDx0VU',
  chapter: 'ch5',
  duration: '22:51',
},
];

// معلومات التواصل - قم بتغيير الأرقام هنا
export const contactInfo = {
  phone: '01000407680', // رقم الهاتف
  whatsapp: '201000407680', // رقم الواتساب مع كود الدولة
  facebook: 'https://facebook.com/fozyalatif', // صفحة الفيسبوك
  youtube: 'https://youtube.com/@fozyalatif', // قناة اليوتيوب
  channelName: 'الست الناظره', // اسم القناة
};