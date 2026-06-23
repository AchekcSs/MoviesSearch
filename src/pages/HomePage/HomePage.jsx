import { useEffect } from "react";
import { useSearch } from "@/contexts/SearchContext";
import Header from "@/components/Header/Header";
import Container from "@/components/Container/Container";
import Hero from "@/components/Hero/Hero";
import ContentList from "@/components/ContentList/ContentList";
import Footer from "@/components/Footer/Footer";
import { useContent } from "@/contexts/ContentContext";

const HomePage = () => {
  const { searchParams } = useSearch()
  const { applyFilters } = useContent()

  const loadPopularMoviesOrShows = async () => {
    await applyFilters(searchParams);
  };

  useEffect(() => {
    loadPopularMoviesOrShows();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Container className="grow">
        <main>
          <Hero />
          <ContentList />
        </main>
      </Container>
      <Footer />
    </div>
  );
};

export default HomePage;
