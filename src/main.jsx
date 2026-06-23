import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { BrowserRouter } from "react-router";
import { SearchProvider } from "@/contexts/SearchContext";
import { ContentProvider } from "@/contexts/ContentContext";
import App from "@/App.jsx";
import "@/index.css";
import { FavoritesProvider } from "@/contexts/FavoritesContext";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <FavoritesProvider>
      <SearchProvider>
        <ContentProvider>
          <StrictMode>
            <App />
          </StrictMode>
        </ContentProvider>
      </SearchProvider>
    </FavoritesProvider>
  </BrowserRouter>
);
