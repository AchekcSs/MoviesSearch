import { ThemeProvider } from "@/contexts/ThemeContext";
import { Route, Routes } from "react-router";
import HomePage from "@/pages/HomePage/HomePage";
import ContentDetailsPage from "@/pages/ContentDetailsPage/ContentDetailsPage";
import FavoritesPage from "@/pages/FavoritesPage/FavoritesPage";
import NotFoundPage from "@/pages/NotFoundPage/NotFoundPage";

const App = () => {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favorites/:contentType/:id/:seasonNumber?" element={<ContentDetailsPage />} />
        <Route path="/:contentType/:id/:seasonNumber?" element={<ContentDetailsPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
