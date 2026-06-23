import { Link } from "react-router";

const Logo = () => {
  return (
    <Link to="/">
      <span className="uppercase text-xl font-semibold">moviesearch</span>
    </Link>
  );
};

export default Logo;
