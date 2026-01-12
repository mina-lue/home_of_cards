import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import NewsArticles from '@/components/NewsArticles';
import SetChecklists from '@/components/SetChecklists';
import TrackerTool from '@/components/TrackerTool';
import GradingGuide from '@/components/GradingGuide';
import EventCalendar from '@/components/EventCalendar';
import ForumSection from '@/components/ForumSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <NewsArticles />
      <SetChecklists />
      <TrackerTool />
      <GradingGuide />
      <EventCalendar />
      <ForumSection />
      <Footer />
    </main>
  );
}
