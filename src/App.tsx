import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LessonsPage from './pages/LessonsPage';
import QuizzesPage from './pages/QuizzesPage';
import AboutPage from './pages/AboutPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedChapter, setSelectedChapter] = useState('all');

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomePage
            setCurrentPage={setCurrentPage}
            setSelectedChapter={(chapterId: string) => {
              setSelectedChapter(chapterId);
            }}
          />
        );
      case 'lessons':
        return (
          <LessonsPage
            selectedChapter={selectedChapter}
            setSelectedChapter={setSelectedChapter}
          />
        );
      case 'quizzes':
        return <QuizzesPage />;
      case 'about':
        return <AboutPage />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} setSelectedChapter={setSelectedChapter} />;
    }
  };

  return (
    <div className="min-h-screen bg-bg-light flex flex-col">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}
