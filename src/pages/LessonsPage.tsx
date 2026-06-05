import { useState } from 'react';
import { Search, PlayCircle, Microscope } from 'lucide-react';
import VideoCard from '../components/VideoCard';
import VideoPlayer from '../components/VideoPlayer';
import { chapters, videos, Video } from '../data/videos';

interface LessonsPageProps {
  selectedChapter: string;
  setSelectedChapter: (chapterId: string) => void;
}

export default function LessonsPage({ selectedChapter, setSelectedChapter }: LessonsPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeVideo, setActiveVideo] = useState<Video | null>(null);

  const filteredVideos = videos.filter((video) => {
    const matchChapter = selectedChapter === 'all' || video.chapter === selectedChapter;
    const matchSearch = video.title.includes(searchQuery) || video.description.includes(searchQuery);
    return matchChapter && matchSearch;
  });

  const currentChapter = chapters.find((c) => c.id === selectedChapter);

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <PlayCircle className="w-4 h-4" />
            دروس الأحياء - الصف الثالث الثانوي
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-text-dark mb-3">
            {currentChapter ? (
              <>
                <span className="ml-2">{currentChapter.icon}</span>
                {currentChapter.name}
              </>
            ) : (
              <>
                <Microscope className="inline-block w-10 h-10 ml-2 text-green-600" />
                جميع دروس الأحياء
              </>
            )}
          </h1>
          <p className="text-text-gray max-w-xl mx-auto">
            شاهد الفيديوهات التعليمية من قناة الست الناظره
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-8 border border-gray-100">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-gray" />
              <input
                type="text"
                placeholder="ابحث عن درس..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl pr-12 pl-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500/30 focus:border-green-500 transition-all"
              />
            </div>

            {/* Chapter filter */}
            <div>
              <select
                value={selectedChapter}
                onChange={(e) => setSelectedChapter(e.target.value)}
                aria-label="تصفية الدروس حسب الباب"
                className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500/30 focus:border-green-500 appearance-none cursor-pointer min-w-[200px]"
              >
                <option value="all">جميع الأبواب</option>
                {chapters.map((chapter) => (
                  <option key={chapter.id} value={chapter.id}>
                    {chapter.icon} {chapter.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Chapter tabs */}
          <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-100">
            <button
              onClick={() => setSelectedChapter('all')}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                selectedChapter === 'all'
                  ? 'bg-green-600 text-white shadow-md'
                  : 'bg-gray-100 text-text-gray hover:bg-gray-200'
              }`}
            >
              🧬 الكل
            </button>
            {chapters.map((chapter) => (
              <button
                key={chapter.id}
                onClick={() => setSelectedChapter(chapter.id)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                  selectedChapter === chapter.id
                    ? 'bg-green-600 text-white shadow-md'
                    : 'bg-gray-100 text-text-gray hover:bg-gray-200'
                }`}
              >
                {chapter.icon} {chapter.name}
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-text-gray text-sm">
            عرض <span className="font-bold text-text-dark">{filteredVideos.length}</span> فيديو
          </p>
        </div>

        {/* Videos Grid */}
        {filteredVideos.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredVideos.map((video) => (
              <VideoCard
                key={video.id}
                video={video}
                onClick={() => setActiveVideo(video)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-text-dark mb-2">لا توجد نتائج</h3>
            <p className="text-text-gray">جرب البحث بكلمات مختلفة أو اختر باب آخر</p>
          </div>
        )}
      </div>

      {/* Video Player Modal */}
      {activeVideo && (
        <VideoPlayer video={activeVideo} onClose={() => setActiveVideo(null)} />
      )}
    </div>
  );
}
