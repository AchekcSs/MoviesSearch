import Container from "@/components/Container/Container";
import FavoritesList from "@/components/FavoritesList/FavoritesList";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { scrollToTop } from "@/utils/scrollToTop";
import { useEffect } from "react";

const FavoritesPage = () => {
  useEffect(scrollToTop, [])

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Container className="grow">
        <main>
          <FavoritesList />
        </main>
      </Container>
      <Footer />
    </div>
  );
};

export default FavoritesPage;
