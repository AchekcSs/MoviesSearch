import SearchInput from "@/components/SearchInput/SearchInput";

const Hero = () => {
  return (
    <section className="py-30 flex flex-col items-center">
      <h1 className="text-6xl md:text-7xl font-semibold mb-6 text-center max-w-230">
        Discover Your Next <span className="text-red-500">Favorite</span> Movie Or Show
      </h1>
      <p className="text-lg max-w-xl mb-12 text-center">
        Search thousands of movies and build your personal watchlist with our curated explorer. Cinematic immersion meets effortless
        discovery.
      </p>
      <SearchInput variant="hero" />
    </section>
  );
};

export default Hero;
